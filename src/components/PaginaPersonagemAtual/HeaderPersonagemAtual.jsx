import React from 'react'
import { MarvelLogoSmallIcon } from 'icons/MarvelLogoSmallIcon'
import { InputBuscaPersonagens } from 'components/InputBuscaPersonagens'
import { usePaginaPersonagemControl } from 'components/ProviderPaginaPersonagem'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'min(62rem, 95%)',
    '@media (max-width: 680px)': { flexDirection: 'column', gap: '2rem', justifyContent: 'center' },
  },
  logoMarvel: { cursor: 'pointer' },
  inputBusca: { width: 'min(35rem, 100%)', marginRight: 'auto', '@media (max-width: 680px)': { marginRight: 'unset' } },
})

export const HeaderPersonagemAtual = () => {
  const classes = useClasses()
  const paginaPersonagemControl = usePaginaPersonagemControl()
  return (
    <div className={classes.root}>
      <div className={classes.logoMarvel} onClick={paginaPersonagemControl.fecharPaginaPersonagem}>
        <MarvelLogoSmallIcon />
      </div>
      <InputBuscaPersonagens className={classes.inputBusca} onEnter={paginaPersonagemControl.fecharPaginaPersonagem} />
    </div>
  )
}
