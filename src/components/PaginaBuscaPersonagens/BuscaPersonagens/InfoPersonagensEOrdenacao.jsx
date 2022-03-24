import React from 'react'
import { makeStyles } from '@mui/styles'
import { strings } from 'utils/strings'
import {
  usePersonagensContext,
  usePersonagensControl,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { ToggleSwitch } from 'components/ToggleSwitch'
import { useFavoritosContext } from 'components/ProviderFavoritos/ProviderFavoritosComponent'
import { HeroiIcon } from 'icons/HeroiIcon'
import { FavoritoOnIcon } from 'icons/FavoritoOnIcon'
import { FavoritoOffIcon } from 'icons/FavoritoOffIcon'

const useClasses = makeStyles(() => {
  const textoBase = {
    color: '#FF0000A1',
    fontSize: '1rem',
    fontWeight: 500,
    '@media (max-width: 800px)': { display: 'none' },
  }
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      '@media (max-width: 680px)': { flexDirection: 'column', gap: '1rem', alignItems: 'center' },
    },
    textoEncontrados: { fontSize: '1.2rem', fontWeight: 500, color: '#80808085' },
    wrapperIconTexto: { display: 'flex', gap: '1rem', alignItems: 'center' },
    wrapperSwitch: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    favoritosButton: {
      border: 0,
      borderRadius: '2rem',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      '&:hover': { filter: 'brightness(90%)' },
    },
    textoSwitch: {
      ...textoBase,
    },
    textoFavoritos: {
      ...textoBase,
    },
  }
})

export const InfoPersonagensEOrdenacao = () => {
  const personagens = usePersonagensContext()
  const personagensControl = usePersonagensControl()
  const classes = useClasses()
  const onChangeSwitch = React.useCallback(
    (switchValue) => {
      personagensControl.changeOrdenacaoNome({ asc: !switchValue })
    },
    [personagensControl],
  )
  return (
    <div className={classes.root}>
      <div data-testid="herois-encontrados">
        <span className={classes.textoEncontrados}>{strings.encontradosXHerois(personagens.length)}</span>
      </div>
      <div className={classes.wrapperSwitch}>
        <div className={classes.wrapperIconTexto}>
          <HeroiIcon /> <span className={classes.textoSwitch}>{strings.ordenarPorNomeAZ}</span>
        </div>
        <ToggleSwitch alterarCor={false} onChange={onChangeSwitch} data-testid="switch-favoritos" />
        <FavoritosButton />
      </div>
    </div>
  )
}

const FavoritosButton = () => {
  const classes = useClasses()
  const favoritos = useFavoritosContext()
  const personagensControl = usePersonagensControl()
  const [ehFavorito, setEhFavorito] = React.useState(false)
  const handleClickFavoritos = React.useCallback(() => {
    if (ehFavorito) personagensControl.unsetPersonagensFavoritos()
    else personagensControl.setPersonagensFavoritos(favoritos)
    setEhFavorito(!ehFavorito)
  }, [ehFavorito, personagensControl, favoritos])
  return (
    <button className={classes.favoritosButton} onClick={handleClickFavoritos}>
      {ehFavorito ? <FavoritoOnIcon /> : <FavoritoOffIcon />}{' '}
      <span className={classes.textoFavoritos}>{strings.somenteFavoritos}</span>
    </button>
  )
}
