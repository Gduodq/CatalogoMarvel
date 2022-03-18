import React from 'react'
import { Grid } from 'components/Grid'
import {
  usePersonagensContext,
  usePersonagensControl,
} from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { CardPersonagem } from 'components/CardPersonagem'
import { makeStyles } from '@mui/styles'
import { InputBuscaPersonagens } from './InputBuscaPersonagens'
import { InfoPersonagensEOrdenacao } from './InfoPersonagensEOrdenacao'

const useClasses = makeStyles({
  root: {
    width: 'min(900px, 100%)',
    marginBottom: '3rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4rem',
  },
})

export const BuscaPersonagens = () => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <InputBuscaPersonagens />
      <InfoPersonagensEOrdenacao />
    </div>
  )
}
