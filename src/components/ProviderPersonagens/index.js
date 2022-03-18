import { ProviderPersonagensComponent } from './ProviderPersonagensComponent'
import { ProviderFiltroContext, ProviderFiltroControl } from 'components/ProviderFiltro'
import { injetarProviders } from 'utils/injetarProviders'

export const ProviderPersonagens = injetarProviders(ProviderPersonagensComponent, [
  ProviderFiltroContext,
  ProviderFiltroControl,
])
