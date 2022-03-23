import React, { Component } from 'react'
import { api } from 'api'
import { routesAPI } from 'utils/routesAPI'

export const ProviderPaginaPersonagemAbertaContext = React.createContext()
ProviderPaginaPersonagemAbertaContext.propName = 'paginaPersonagemAberta'
export const usePaginaPersonagemAberta = () => React.useContext(ProviderPaginaPersonagemAbertaContext)

export const ProviderPersonagemAtualContext = React.createContext()
ProviderPersonagemAtualContext.propName = 'personagemAtual'
export const usePersonagemAtual = () => React.useContext(ProviderPersonagemAtualContext)

export const ProviderPaginaPersonagemControl = React.createContext()
ProviderPaginaPersonagemControl.propName = 'paginaPersonagemControl'
export const usePaginaPersonagemControl = () => React.useContext(ProviderPaginaPersonagemControl)

export const ProviderQuadrinhosPersonagemAtualCarregandoContext = React.createContext()
ProviderQuadrinhosPersonagemAtualCarregandoContext.propName = 'carregandoQuadrinhosPersonagemAtual'
export const useCarregandoQuadrinhosPersonagemAtual = () =>
  React.useContext(ProviderQuadrinhosPersonagemAtualCarregandoContext)

export const ProviderQuadrinhosPersonagemAtualErroContext = React.createContext()
ProviderQuadrinhosPersonagemAtualErroContext.propName = 'erroQuadrinhosPersonagemAtual'
export const useErroQuadrinhosPersonagemAtual = () => React.useContext(ProviderQuadrinhosPersonagemAtualErroContext)

export class ProviderPaginaPersonagemComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paginaPersonagemAberta: false,
      personagemAtual: null,
      carregandoQuadrinhos: false,
      erroQuadrinhos: false,
    }
    this.control = {
      abrirPaginaPersonagem: this.abrirPaginaPersonagem,
      fecharPaginaPersonagem: this.fecharPaginaPersonagem,
      setPersonagemAtual: this.setPersonagemAtual,
      fetchUltimosQuadrinhos: this.fetchUltimosQuadrinhos,
    }
    this.quantidadeDeQuadrinhos = props.quantidadeDeQuadrinhos || 5
  }

  get filtroQuadrinhos() {
    return {
      apikey: process.env.REACT_APP_API_PUBLIC_KEY,
      limit: this.quantidadeDeQuadrinhos,
      offset: 0,
      orderBy: 'onsaleDate',
    }
  }

  abrirPaginaPersonagem = () => this.setState({ paginaPersonagemAberta: true })

  fecharPaginaPersonagem = () => this.setState({ paginaPersonagemAberta: false })

  setPersonagemAtual = (personagem) => this.setState({ personagemAtual: personagem })

  fetchUltimosQuadrinhos = async () => {
    const { personagemAtual } = this.state
    if (!personagemAtual || !personagemAtual.id) return
    this.setState({ carregandoQuadrinhos: true, erroQuadrinhos: false })
    try {
      const route = routesAPI.getPersonagemQuadrinhos(personagemAtual.id)
      const filtro = this.filtroQuadrinhos
      const query = route + '?' + new URLSearchParams(filtro).toString()
      const { data } = await api.get(query)
      const quadrinhosBase = data.data.results
      const quadrinhos = quadrinhosBase.map(this.filtrarInfoQuadrinho)
      this.setState({ personagemAtual: { ...personagemAtual, quadrinhos }, carregandoQuadrinhos: false })
    } catch (e) {
      console.error(`Ocorreu um erro ao recuperar os quadrinhos do personagem ${personagemAtual.id}`, e)
      this.setState({ carregandoQuadrinhos: false, erroQuadrinhos: true })
    }
  }

  filtrarInfoQuadrinho = (quadrinho) => {
    const { id, title, thumbnail } = quadrinho
    const imageURL = thumbnail.path + '.' + thumbnail.extension
    return { id, title, imageURL }
  }

  render() {
    const { children } = this.props
    return (
      <ProviderQuadrinhosPersonagemAtualErroContext.Provider value={this.state.erroQuadrinhos}>
        <ProviderQuadrinhosPersonagemAtualCarregandoContext.Provider value={this.state.carregandoQuadrinhos}>
          <ProviderPersonagemAtualContext.Provider value={this.state.personagemAtual}>
            <ProviderPaginaPersonagemAbertaContext.Provider value={this.state.paginaPersonagemAberta}>
              <ProviderPaginaPersonagemControl.Provider value={this.control}>
                {children}
              </ProviderPaginaPersonagemControl.Provider>
            </ProviderPaginaPersonagemAbertaContext.Provider>
          </ProviderPersonagemAtualContext.Provider>
        </ProviderQuadrinhosPersonagemAtualCarregandoContext.Provider>
      </ProviderQuadrinhosPersonagemAtualErroContext.Provider>
    )
  }
}
