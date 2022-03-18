import React, { Component } from 'react'

export const ProviderFiltroContext = React.createContext()
ProviderFiltroContext.propName = 'filtroContext'
export const useProviderFiltroContext = () => React.useContext(ProviderFiltroContext)

export const ProviderFiltroControl = React.createContext()
ProviderFiltroControl.propName = 'filtroControl'
export const useProviderFiltroControl = () => React.useContext(ProviderFiltroControl)

export class ProviderFiltroComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { filtro: this.props.filtroInicial || {} }
    this.control = { setFiltro: this.setFiltro, limparFiltro: this.limparFiltro, getFiltro: this.getFiltro }
  }

  setFiltro = (filtro) => this.setState({ filtro })

  getFiltro = () => this.state.filtro

  limparFiltro = () => this.setFiltro(this.props.filtroInicial || {})

  render() {
    const { children } = this.props
    return (
      <ProviderFiltroContext.Provider value={this.state.filtro}>
        <ProviderFiltroControl.Provider value={this.control}>{children}</ProviderFiltroControl.Provider>
      </ProviderFiltroContext.Provider>
    )
  }
}
