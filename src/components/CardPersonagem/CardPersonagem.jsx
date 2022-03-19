import React from 'react'
import { makeStyles } from '@mui/styles'
import { FavoritoOffIcon } from 'icons/FavoritoOffIcon'
import { useFavoritosControl } from 'components/ProviderFavoritos/ProviderFavoritosComponent'
import { FavoritoOnIcon } from 'icons/FavoritoOnIcon'

const useClasses = makeStyles({
  rootCard: { display: 'flex', flexDirection: 'column', height: 250 },
  imagemPersonagem: { width: '100%', height: '77%', cursor: 'pointer', '&:hover': { filter: 'brightness(0.75)' } },
  stripe: { width: '100%', backgroundColor: '#FF0000', height: '5px' },
  bottomCard: {
    width: '100%',
    maxWidth: '100%',
    height: 'calc(23% - 3px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomePersonagem: {
    textAlign: 'start',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: 7,
  },
  fonteNome: { fontSize: '1.1rem', fontWeight: 500 },
  favorito: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', cursor: 'pointer' },
  buttonInvisible: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer' },
})

export const CardPersonagem = ({ instancia }) => {
  const classes = useClasses()
  const favoritosControl = useFavoritosControl()
  const [ehFavorito, setEhFavorito] = React.useState(favoritosControl.ehFavorito(instancia.id))
  const onClickImagem = React.useCallback(() => {
    console.log(instancia)
  }, [])
  const handleClickFavorito = React.useCallback(() => {
    if (ehFavorito) favoritosControl.removerFavorito(instancia.id)
    else {
      const favoritoAdicionado = favoritosControl.addFavorito(instancia)
      if (!favoritoAdicionado) return console.warn('Quantidade de favoritos atingiu o limite')
    }
    setEhFavorito(!ehFavorito)
  }, [ehFavorito])
  return (
    <div className={classes.rootCard}>
      <img src={instancia.imageURL} className={classes.imagemPersonagem} onClick={onClickImagem} alt="" />
      <div className={classes.stripe} />
      <div className={classes.bottomCard}>
        <div className={classes.nomePersonagem}>
          <span className={classes.fonteNome}>{instancia.name}</span>
        </div>
        <div className={classes.favorito}>
          <button className={classes.buttonInvisible} onClick={handleClickFavorito}>
            {ehFavorito ? <FavoritoOnIcon /> : <FavoritoOffIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}
