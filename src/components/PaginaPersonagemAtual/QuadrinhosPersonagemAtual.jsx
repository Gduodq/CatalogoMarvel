import React from 'react'
import { usePaginaPersonagemControl, usePersonagemAtual } from 'components/ProviderPaginaPersonagem'
import { strings } from 'utils/strings'
import { makeStyles } from '@mui/styles'
import { Grid } from 'components/Grid'
import {
  useCarregandoQuadrinhosPersonagemAtual,
  useErroQuadrinhosPersonagemAtual,
} from 'components/ProviderPaginaPersonagem/ProviderPaginaPersonagemComponent'
import { CardQuadrinho } from './CardQuadrinho'
import { RecarregarButton } from 'components/RecarregarButton'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    width: 'min(calc(13rem * 5), 95%)',
  },
  tituloSecao: { marginRight: 'auto' },
  grid: { width: '100%', gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))' },
})

export const QuadrinhosPersonagemAtual = () => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <h2 className={classes.tituloSecao}>{strings.ultimosLancamentos}</h2>
      <GridQuadrinhos />
    </div>
  )
}

const GridQuadrinhos = () => {
  const classes = useClasses()
  const { quadrinhos = [] } = usePersonagemAtual()
  const carregandoQuadrinhos = useCarregandoQuadrinhosPersonagemAtual()
  const erroQuadrinhos = useErroQuadrinhosPersonagemAtual()
  const paginaPersonagemControl = usePaginaPersonagemControl()
  if (carregandoQuadrinhos) return <div>Carregando...</div>
  if (erroQuadrinhos) return <RecarregarButton onClick={paginaPersonagemControl.fetchUltimosQuadrinhos} />
  return <Grid className={classes.grid} instancias={quadrinhos} Card={CardQuadrinho} />
}
