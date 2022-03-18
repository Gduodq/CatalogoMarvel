import React, { Component } from 'react'
import { api } from 'api'
import { routesAPI } from 'utils/routesAPI'

export const ProviderPersonagemAtualContext = React.createContext()
ProviderPersonagemAtualContext.propName = 'personagemAtualContext'
export const usePersonagemAtualContext = () => React.useContext(ProviderPersonagemAtualContext)

export const ProviderPersonagensContext = React.createContext()
ProviderPersonagensContext.propName = 'personagensContext'
export const usePersonagensContext = () => React.useContext(ProviderPersonagensContext)

export const ProviderPersonagensControl = React.createContext()
ProviderPersonagensControl.propName = 'personagensControl'
export const usePersonagensControl = () => React.useContext(ProviderPersonagensControl)

export class ProviderPersonagensComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { personagens: [], personagemAtual: null, carregando: true, erro: false }
    this.control = { fetchPersonagens: this.fetchPersonagens, setPersonagemAtual: this.setPersonagemAtual }
  }

  componentDidMount = async () => {
    await this.fetchPersonagens()
  }

  fetchPersonagens = async () => {
    this.setState({ carregando: true, erro: false })
    try {
      const route = routesAPI.getPersonagens()
      const filtro = this.props.filtroContext
      const query = route + '?' + new URLSearchParams(filtro).toString()
      const { data } = await api.get(query)
      const personagensBase = data.data.results
      const personagens = personagensBase.map(this.filtrarInfoPersonagens)
      this.setState({ personagens, carregando: false })
    } catch (e) {
      console.error('Ocorreu um erro ao recuperar os personagens', e)
      this.setState({ carregando: false, erro: true })
    }
  }

  setPersonagemAtual = (personagemAtual) => this.setState({ personagemAtual })

  filtrarInfoPersonagens = (personagem) => {
    const { id, name, thumbnail } = personagem
    const imageURL = thumbnail.path + '.' + thumbnail.extension
    return { id, name, imageURL }
  }

  render() {
    const { children } = this.props
    if (this.state.carregando) return <div>Carregando...</div>
    return (
      <ProviderPersonagemAtualContext.Provider value={this.state.personagemAtual}>
        <ProviderPersonagensContext.Provider value={this.state.personagens}>
          <ProviderPersonagensControl.Provider value={this.control}>{children}</ProviderPersonagensControl.Provider>
        </ProviderPersonagensContext.Provider>
      </ProviderPersonagemAtualContext.Provider>
    )
  }
}
