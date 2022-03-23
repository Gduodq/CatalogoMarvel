import React from 'react'
import { makeStyles } from '@mui/styles'
import { useFiltroControl } from 'components/ProviderFiltro/ProviderFiltroComponent'
import { strings } from 'utils/strings'
import {
  usePersonagensContext,
  usePersonagensControl,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { ToggleSwitch } from 'components/ToggleSwitch'
import { useFavoritosContext } from 'components/ProviderFavoritos/ProviderFavoritosComponent'
import { HeroiIcon } from 'icons/HeroiIcon'
import { FavoritoOnIcon } from 'icons/FavoritoOnIcon'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    '@media (max-width: 680px)': { flexDirection: 'column', gap: '1rem', alignItems: 'center' },
  },
  textoEncontrados: { fontSize: '1.2rem', fontWeight: 500, color: '#80808085' },
  wrapperSwitch: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  wrapperIconTexto: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  textoSwitch: {
    color: '#FF0000A1',
    fontSize: '1rem',
    fontWeight: 500,
    '@media (max-width: 800px)': { display: 'none' },
  },
})

export const InfoPersonagensEOrdenacao = () => {
  const favoritos = useFavoritosContext()
  const personagens = usePersonagensContext()
  const personagensControl = usePersonagensControl()
  const filtroControl = useFiltroControl()
  const classes = useClasses()
  const onChangeSwitch = React.useCallback(
    (switchValue) => {
      filtroControl.limparFiltro()
      if (switchValue) personagensControl.setPersonagensFavoritos(favoritos)
      else personagensControl.unsetPersonagensFavoritos()
    },
    [favoritos],
  )
  return (
    <div className={classes.root}>
      <div>
        <span className={classes.textoEncontrados}>{strings.encontradosXHerois(personagens.length)}</span>
      </div>
      <div className={classes.wrapperSwitch}>
        <div className={classes.wrapperIconTexto}>
          <HeroiIcon /> <span className={classes.textoSwitch}>{strings.ordenarPorNomeAZ}</span>
        </div>
        <ToggleSwitch alterarCor={false} onChange={onChangeSwitch} />
        <div className={classes.wrapperIconTexto}>
          <FavoritoOnIcon /> <span className={classes.textoSwitch}>{strings.somenteFavoritos}</span>
        </div>
      </div>
    </div>
  )
}
