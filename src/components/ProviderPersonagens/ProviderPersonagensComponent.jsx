import React, { Component } from 'react'
import { api } from 'api'
import { routesAPI } from 'utils/routesAPI'

export const ProviderPersonagensCarregandoContext = React.createContext()
ProviderPersonagensCarregandoContext.propName = 'personagensCarregando'
export const usePersonagensCarregando = () => React.useContext(ProviderPersonagensCarregandoContext)

export const ProviderPersonagensErroContext = React.createContext()
ProviderPersonagensErroContext.propName = 'personagensErro'
export const usePersonagensErro = () => React.useContext(ProviderPersonagensErroContext)

export const ProviderPersonagensContext = React.createContext()
ProviderPersonagensContext.propName = 'personagensContext'
export const usePersonagensContext = () => React.useContext(ProviderPersonagensContext)

export const ProviderPersonagensControl = React.createContext()
ProviderPersonagensControl.propName = 'personagensControl'
export const usePersonagensControl = () => React.useContext(ProviderPersonagensControl)

export class ProviderPersonagensComponent extends Component {
  personagensSaoFavoritos = false
  constructor(props) {
    super(props)
    this.state = { personagens: [], carregando: true, erro: false }
    this.control = {
      fetchPersonagens: this.fetchPersonagens,
      setPersonagensFavoritos: this.setPersonagensFavoritos,
      unsetPersonagensFavoritos: this.unsetPersonagensFavoritos,
    }
  }

  componentDidMount = async () => {
    await this.fetchPersonagens()
  }

  fetchPersonagens = async () => {
    if (this.personagensSaoFavoritos) return
    this.setState({ carregando: true, erro: false })
    try {
      const route = routesAPI.getPersonagens()
      const filtro = this.props.filtroContext
      const query = route + '?' + new URLSearchParams(filtro).toString()
      const { data } = await api.get(query)
      const personagensBase = data.data.results
      const personagens = personagensBase.map(this.filtrarInfoPersonagens)
      if (this.personagensSaoFavoritos) return this.setState({ carregando: false })
      this.setState({ personagens, carregando: false })
    } catch (e) {
      console.error('Ocorreu um erro ao recuperar os personagens', e)
      this.setState({ carregando: false, erro: true })
    }
  }

  filtrarInfoPersonagens = (personagem) => {
    const { id, name, description, thumbnail, comics, events } = personagem
    const imageURL = thumbnail.path + '.' + thumbnail.extension
    return {
      id,
      name,
      description,
      imageURL,
      quadrinhosDisponiveis: comics.available,
      eventosDisponiveis: events.available,
    }
  }

  setPersonagensFavoritos = (personagens) => this.setState({ personagens }, () => (this.personagensSaoFavoritos = true))

  unsetPersonagensFavoritos = () => {
    this.personagensSaoFavoritos = false
    this.fetchPersonagens()
  }

  render() {
    const { children } = this.props
    return (
      <ProviderPersonagensErroContext.Provider value={this.state.erro}>
        <ProviderPersonagensCarregandoContext.Provider value={this.state.carregando}>
          <ProviderPersonagensContext.Provider value={this.state.personagens}>
            <ProviderPersonagensControl.Provider value={this.control}>{children}</ProviderPersonagensControl.Provider>
          </ProviderPersonagensContext.Provider>
        </ProviderPersonagensCarregandoContext.Provider>
      </ProviderPersonagensErroContext.Provider>
    )
  }
}
