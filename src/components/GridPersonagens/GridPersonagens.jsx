import React from 'react'
import { Grid } from 'components/Grid'
import {
  usePersonagensContext,
  usePersonagensCarregando,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { CardPersonagem } from 'components/CardPersonagem'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  grid: { maxWidth: 'min(900px, 100%)' },
})

export const GridPersonagens = () => {
  const personagens = usePersonagensContext()
  const personagensCarregando = usePersonagensCarregando()
  const classes = useClasses()
  if (personagensCarregando) return <div>Carregando...</div>
  return <Grid instancias={personagens} Card={CardPersonagem} className={classes.grid} />
}
