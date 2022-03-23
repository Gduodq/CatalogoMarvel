import React from 'react'
import { usePaginaPersonagemAberta, usePaginaPersonagemControl } from 'components/ProviderPaginaPersonagem'
import { makeStyles } from '@mui/styles'
import { HeaderPersonagemAtual } from './HeaderPersonagemAtual'
import { InfoPersonagemAtual } from './InfoPersonagemAtual'
import { Footer } from 'components/Footer'
import { QuadrinhosPersonagemAtual } from './QuadrinhosPersonagemAtual'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 0 0 0',
    gap: '3rem',
    minHeight: 'calc(100vh - 2rem)',
  },
})

export const PaginaPersonagemAtual = () => {
  const classes = useClasses()
  const paginaPersonagemAberta = usePaginaPersonagemAberta()
  const paginaPersonagemControl = usePaginaPersonagemControl()
  React.useEffect(() => {
    if (paginaPersonagemAberta) {
      paginaPersonagemControl.fetchUltimosQuadrinhos()
      window.scrollTo(0, 0)
    }
  }, [paginaPersonagemAberta])
  if (!paginaPersonagemAberta) return null
  return (
    <div className={classes.root}>
      <HeaderPersonagemAtual />
      <InfoPersonagemAtual />
      <QuadrinhosPersonagemAtual />
      <Footer />
    </div>
  )
}
