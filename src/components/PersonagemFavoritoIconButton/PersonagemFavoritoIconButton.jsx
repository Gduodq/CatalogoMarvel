import React from 'react'
import { makeStyles } from '@mui/styles'
import { FavoritoOnIcon } from 'icons/FavoritoOnIcon'
import { FavoritoOffIcon } from 'icons/FavoritoOffIcon'
import { useFavoritosControl } from 'components/ProviderFavoritos/ProviderFavoritosComponent'

const useClasses = makeStyles({
  favorito: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', cursor: 'pointer' },
  buttonInvisible: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer' },
})

export const PersonagemFavoritoIconButton = ({ personagem }) => {
  const classes = useClasses()
  const favoritosControl = useFavoritosControl()
  const [ehFavorito, setEhFavorito] = React.useState(favoritosControl.ehFavorito(personagem.id))
  const handleClickFavorito = React.useCallback(() => {
    if (ehFavorito) favoritosControl.removerFavorito(personagem.id)
    else {
      const favoritoAdicionado = favoritosControl.addFavorito(personagem)
      if (!favoritoAdicionado) return console.warn('Quantidade de favoritos atingiu o limite')
    }
    setEhFavorito(!ehFavorito)
  }, [ehFavorito])
  return (
    <div className={classes.favorito} data-testid="favorito-button">
      <button className={classes.buttonInvisible} onClick={handleClickFavorito}>
        {ehFavorito ? <FavoritoOnIcon /> : <FavoritoOffIcon />}
      </button>
    </div>
  )
}
