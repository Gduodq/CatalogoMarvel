import React, { Component } from 'react'

export const ProviderFavoritosContext = React.createContext()
ProviderFavoritosContext.propName = 'favoritosContext'
export const useFavoritosContext = () => React.useContext(ProviderFavoritosContext)

export const ProviderFavoritosControl = React.createContext()
ProviderFavoritosControl.propName = 'favoritosControl'
export const useFavoritosControl = () => React.useContext(ProviderFavoritosControl)

export class ProviderFavoritosComponent extends Component {
  chave
  constructor(props) {
    super(props)
    this.chave = props.chave || 'favoritos'
    if (!props.chave) console.warn('Chave não informada no ProviderFavoritos, chave default será usada (favoritos)')
    this.limiteFavoritos = Number(props.limiteFavoritos) || 0
    this.state = { favoritos: null }
    this.control = { addFavorito: this.addFavorito, removerFavorito: this.removerFavorito, ehFavorito: this.ehFavorito }
  }

  componentDidMount() {
    this.carregarFavoritos()
  }

  quantidadeFavoritosValida = (favoritos) => {
    if (Number.isNaN(this.limiteFavoritos) || this.limiteFavoritos <= 0) return true
    return favoritos.length <= this.limiteFavoritos
  }

  carregarFavoritos = () => {
    const favoritosString = sessionStorage.getItem(this.chave)
    const favoritos = favoritosString ? JSON.parse(favoritosString) : []
    this.setState({ favoritos })
  }

  atualizarFavoritos = (favoritos, { persistir = true } = {}) => {
    if (!this.quantidadeFavoritosValida(favoritos)) return
    this.setState({ favoritos }, persistir ? this.persistirFavoritos : undefined)
    return true
  }

  persistirFavoritos = () => {
    const favoritosString = JSON.stringify(this.state.favoritos)
    sessionStorage.setItem(this.chave, favoritosString)
  }

  addFavorito = (favorito) => this.atualizarFavoritos([...this.state.favoritos, favorito])

  removerFavorito = (favoritoId) => {
    const favoritos = this.state.favoritos.filter((favorito) => favorito.id !== favoritoId)
    this.atualizarFavoritos(favoritos)
  }

  limparFavoritos = () => this.atualizarFavoritos([])

  ehFavorito = (favoritoId) => this.state.favoritos.find((favorito) => favorito.id === favoritoId)

  render() {
    const { children } = this.props
    return (
      <ProviderFavoritosContext.Provider value={this.state.favoritos}>
        <ProviderFavoritosControl.Provider value={this.control}>{children}</ProviderFavoritosControl.Provider>
      </ProviderFavoritosContext.Provider>
    )
  }
}
