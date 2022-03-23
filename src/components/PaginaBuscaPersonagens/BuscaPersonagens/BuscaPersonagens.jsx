import React from 'react'
import { makeStyles } from '@mui/styles'
import { InputBuscaPersonagens } from 'components/InputBuscaPersonagens'
import { InfoPersonagensEOrdenacao } from './InfoPersonagensEOrdenacao'

const useClasses = makeStyles({
  root: {
    width: 'min(59rem, 95%)',
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
