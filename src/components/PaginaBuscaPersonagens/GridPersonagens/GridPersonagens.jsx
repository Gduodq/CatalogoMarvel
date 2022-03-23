import React from 'react'
import { Grid } from 'components/Grid'
import {
  usePersonagensContext,
  usePersonagensCarregando,
  usePersonagensErro,
  usePersonagensControl,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { CardPersonagem } from 'components/CardPersonagem'
import { makeStyles } from '@mui/styles'
import { RecarregarButton } from 'components/RecarregarButton'

const useClasses = makeStyles({
  grid: { maxWidth: 'min(calc(16rem * 4), 95%)' },
})

export const GridPersonagens = () => {
  const personagens = usePersonagensContext()
  const personagensCarregando = usePersonagensCarregando()
  const personagensErro = usePersonagensErro()
  const personagensControl = usePersonagensControl()
  const classes = useClasses()
  if (personagensCarregando) return <div>Carregando...</div>
  if (personagensErro) return <RecarregarButton onClick={personagensControl.fetchPersonagens} />
  return <Grid instancias={personagens} Card={CardPersonagem} className={classes.grid} data-testid="grid-personagens" />
}
