import React, { Component } from 'react'
import { api } from 'api'
import { routesAPI } from 'utils/routesAPI'

export const ProviderPersonagemAtualContext = React.createContext()
ProviderPersonagemAtualContext.propName = 'personagemAtualContext'
export const useProviderPersonagemAtualContext = () => React.useContext(ProviderPersonagemAtualContext)

export const ProviderPersonagensContext = React.createContext()
ProviderPersonagensContext.propName = 'personagensContext'
export const useProviderPersonagensContext = () => React.useContext(ProviderPersonagensContext)

export const ProviderPersonagensControl = React.createContext()
ProviderPersonagensControl.propName = 'personagensControl'
export const useProviderPersonagensControl = () => React.useContext(ProviderPersonagensControl)

export class ProviderPersonagensComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { personagens: [], personagemAtual: null, carregando: true, erro: false }
    this.control = { fetchPersonagens: this.fetchPersonagens, setPersonagemAtual: this.setPersonagemAtual }
  }

  componentDidMount = async () => {}

  fetchPersonagens = async () => {
    this.setState({ carregando: true, erro: false })
    try {
      const route = routesAPI.getPersonagens()
      const filtro = this.props.filtroContext
      const query = route + '?' + new URLSearchParams(filtro).toString()
      const { data } = await api.get(query)
      const personagens = data.data.results
      this.setState({ personagens, carregando: false })
    } catch (e) {
      console.error('Ocorreu um erro ao recuperar os personagens', e)
      this.setState({ carregando: false, erro: true })
    }
  }

  setPersonagemAtual = (personagemAtual) => this.setState({ personagemAtual })

  render() {
    const { children } = this.props
    //if (this.state.carregando) return <div>Carregando...</div>
    return (
      <ProviderPersonagemAtualContext.Provider value={this.state.personagemAtual}>
        <ProviderPersonagensContext.Provider value={this.state.personagens}>
          <ProviderPersonagensControl.Provider value={this.control}>{children}</ProviderPersonagensControl.Provider>
        </ProviderPersonagensContext.Provider>
      </ProviderPersonagemAtualContext.Provider>
    )
  }
}
