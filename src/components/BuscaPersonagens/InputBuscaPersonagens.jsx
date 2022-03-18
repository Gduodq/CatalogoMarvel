import React from 'react'
import { usePersonagensControl } from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { makeStyles } from '@mui/styles'
import { useFiltroContext, useFiltroControl } from 'components/ProviderFiltro/ProviderFiltroComponent'
import { strings } from 'utils/strings'

const useClasses = makeStyles({
  input: {
    width: 'max(175px, 65%)',
    height: '3rem',
    padding: '0 1rem',
    borderRadius: '1rem',
    backgroundColor: '#fed7d7',
    border: 0,
    color: '#e25800ad',
    fontSize: '1rem',
    fontWeight: 600,
    '&::placeholder': { color: '#e25800ad' },
  },
})

export const InputBuscaPersonagens = () => {
  const filtro = useFiltroContext()
  const filtroControl = useFiltroControl()
  const personagensControl = usePersonagensControl()
  const classes = useClasses()
  const handleChangeInput = React.useCallback(
    (event) => {
      const nameStartsWith = event.target.value
      if (nameStartsWith) filtroControl.setFiltro({ ...filtro, nameStartsWith })
      else {
        delete filtro.nameStartsWith
        filtroControl.setFiltro({ ...filtro })
      }
    },
    [filtro],
  )
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === 'Enter') personagensControl.fetchPersonagens()
  }, [])
  return (
    <input
      value={filtro.nameStartsWith || ''}
      type="search"
      data-search
      onChange={handleChangeInput}
      onKeyDown={handleKeyDown}
      placeholder={strings.procurePorHerois}
      className={classes.input}
    />
  )
}
