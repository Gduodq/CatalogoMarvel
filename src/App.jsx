import React from 'react'
import { ProviderPersonagens } from 'components/ProviderPersonagens'
import { ProviderFiltro } from 'components/ProviderFiltro'
import { ProviderFavoritos } from 'components/ProviderFavoritos'
import { filtroInicialPersonagens } from 'components/ProviderPersonagens/filtroInicialPersonagens'
import { ProviderPaginaPersonagem } from 'components/ProviderPaginaPersonagem'
import { PaginaBuscaPersonagens } from 'components/PaginaBuscaPersonagens'
import { PaginaPersonagemAtual } from 'components/PaginaPersonagemAtual'

export const App = () => {
  return (
    <ProviderPaginaPersonagem quantidadeDeQuadrinhos={10}>
      <ProviderFavoritos chave="personagensFavoritos" limiteFavoritos={5}>
        <ProviderFiltro filtroInicial={filtroInicialPersonagens}>
          <ProviderPersonagens>
            <PaginaBuscaPersonagens />
            <PaginaPersonagemAtual />
          </ProviderPersonagens>
        </ProviderFiltro>
      </ProviderFavoritos>
    </ProviderPaginaPersonagem>
  )
}
