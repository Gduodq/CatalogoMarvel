import React from 'react'
import { makeStyles } from '@mui/styles'
import { useFiltroContext, useFiltroControl } from 'components/ProviderFiltro/ProviderFiltroComponent'
import { strings } from 'utils/strings'
import {
  usePersonagensContext,
  usePersonagensControl,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { ToggleSwitch } from 'components/ToggleSwitch'
import { useFavoritosContext } from 'components/ProviderFavoritos/ProviderFavoritosComponent'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  textoEncontrados: { fontSize: '1.2rem', fontWeight: 500, color: '#80808085' },
  wrapperSwitch: {
    display: 'flex',
    alignItems: 'center',
    color: '#e25800ad',
    fontSize: '1rem',
    fontWeight: 500,
    gap: '1rem',
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
      if (switchValue) personagensControl.setPersonagens(favoritos)
      else personagensControl.fetchPersonagens()
    },
    [favoritos],
  )
  return (
    <div className={classes.root}>
      <div>
        <span className={classes.textoEncontrados}>{strings.encontradosXHerois(personagens.length)}</span>
      </div>
      <div className={classes.wrapperSwitch}>
        <div>{strings.ordenarPorNomeAZ}</div>
        <ToggleSwitch alterarCor={false} onChange={onChangeSwitch} />
        <div>{strings.somenteFavoritos}</div>
      </div>
    </div>
  )
}
