import React, { Component } from 'react'

export const ProviderFiltroContext = React.createContext()
ProviderFiltroContext.propName = 'filtroContext'
export const useFiltroContext = () => React.useContext(ProviderFiltroContext)

export const ProviderFiltroControl = React.createContext()
ProviderFiltroControl.propName = 'filtroControl'
export const useFiltroControl = () => React.useContext(ProviderFiltroControl)

export class ProviderFiltroComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { filtro: this.props.filtroInicial || {} }
    this.control = {
      setFiltroAsync: this.setFiltroAsync,
      limparFiltro: this.limparFiltro,
      getFiltro: this.getFiltro,
    }
  }

  setFiltroAsync = (filtro) => new Promise((res) => this.setState({ filtro }, res))

  getFiltro = () => this.state.filtro

  limparFiltro = () => this.setFiltroAsync(this.props.filtroInicial || {})

  render() {
    const { children } = this.props
    return (
      <ProviderFiltroContext.Provider value={this.state.filtro}>
        <ProviderFiltroControl.Provider value={this.control}>{children}</ProviderFiltroControl.Provider>
      </ProviderFiltroContext.Provider>
    )
  }
}
