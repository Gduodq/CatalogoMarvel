import React from 'react'
import { BuscaPersonagens } from 'components/PaginaBuscaPersonagens/BuscaPersonagens'
import { Footer } from 'components/Footer'
import { GridPersonagens } from 'components/PaginaBuscaPersonagens/GridPersonagens'
import { HeaderPersonagens } from 'components/PaginaBuscaPersonagens/HeaderPersonagens'
import { usePaginaPersonagemAberta } from 'components/ProviderPaginaPersonagem'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 0 0 0',
    gap: '3.5rem',
    minHeight: 'calc(100vh - 2rem)',
  },
})

export const PaginaBuscaPersonagens = () => {
  const classes = useClasses()
  const paginaPersonagemAberta = usePaginaPersonagemAberta()
  if (paginaPersonagemAberta) return null
  return (
    <div className={classes.root}>
      <HeaderPersonagens />
      <BuscaPersonagens />
      <GridPersonagens />
      <Footer />
    </div>
  )
}
