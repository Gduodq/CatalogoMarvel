import './App.css'
import { Grid } from 'components/Grid'
import { ProviderPersonagens } from 'components/ProviderPersonagens'
import { ProviderFiltro } from 'components/ProviderFiltro'
import { ProviderFavoritos } from 'components/ProviderFavoritos'
import { filtroInicialPersonagens } from 'components/ProviderPersonagens/filtroInicialPersonagens'
import { CardPersonagem } from 'components/CardPersonagem'

export const App = () => {
  return (
    <div className="App">
      <ProviderFavoritos chave="personagensFavoritos">
        <ProviderFiltro filtroInicial={filtroInicialPersonagens}>
          <ProviderPersonagens>
            <Grid instancias={[1, 2, 3, 4, 5, 6, 7, 8]} Card={CardPersonagem} />
          </ProviderPersonagens>
        </ProviderFiltro>
      </ProviderFavoritos>
    </div>
  )
}
