import React from 'react'
import { ProviderPersonagens } from 'components/ProviderPersonagens'
import { ProviderFiltro } from 'components/ProviderFiltro'
import { ProviderFavoritos } from 'components/ProviderFavoritos'
import { filtroInicialPersonagens } from 'components/ProviderPersonagens/filtroInicialPersonagens'
import { makeStyles } from '@mui/styles'
import { GridPersonagens } from 'components/GridPersonagens'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 0 ',
  },
})

export const App = () => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <ProviderFavoritos chave="personagensFavoritos">
        <ProviderFiltro filtroInicial={filtroInicialPersonagens}>
          <ProviderPersonagens>
            <GridPersonagens />
          </ProviderPersonagens>
        </ProviderFiltro>
      </ProviderFavoritos>
    </div>
  )
}
