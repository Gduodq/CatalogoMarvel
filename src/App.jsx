import React from 'react'
import { ProviderPersonagens } from 'components/ProviderPersonagens'
import { ProviderFiltro } from 'components/ProviderFiltro'
import { ProviderFavoritos } from 'components/ProviderFavoritos'
import { filtroInicialPersonagens } from 'components/ProviderPersonagens/filtroInicialPersonagens'
import { makeStyles } from '@mui/styles'
import { GridPersonagens } from 'components/GridPersonagens'
import { BuscaPersonagens } from 'components/BuscaPersonagens'
import { HeaderPersonagens } from 'components/HeaderPersonagens'
import { FooterPersonagens } from 'components/FooterPersonagens'

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

export const App = () => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <ProviderFavoritos chave="personagensFavoritos" limiteFavoritos={5}>
        <ProviderFiltro filtroInicial={filtroInicialPersonagens}>
          <ProviderPersonagens>
            <HeaderPersonagens />
            <BuscaPersonagens />
            <GridPersonagens />
            <FooterPersonagens />
          </ProviderPersonagens>
        </ProviderFiltro>
      </ProviderFavoritos>
    </div>
  )
}
