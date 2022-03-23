import React from 'react'
import { usePersonagensControl } from 'components/ProviderPersonagens/ProviderPersonagensComponent'
import { makeStyles } from '@mui/styles'
import { useFiltroContext, useFiltroControl } from 'components/ProviderFiltro/ProviderFiltroComponent'
import { strings } from 'utils/strings'
import { SearchIcon } from 'icons/SearchIcon'
import classNames from 'classnames'

const useClasses = makeStyles({
  root: { width: 'max(13rem, 68%)', height: '3.5rem' },
  icon: { position: 'relative', top: 'calc(50% - 20px)', left: 'calc(1rem + 30px)' },
  input: {
    width: 'calc(100% - 40px)',
    height: '100%',
    padding: '0 1rem 0 calc(30px + 2rem)',
    borderRadius: '2rem',
    backgroundColor: '#FDECEC',
    border: 0,
    color: '#FF0000',
    fontSize: '1rem',
    fontWeight: 600,
    '&::placeholder': { color: '#FF0000A1' },
  },
})

export const InputBuscaPersonagens = ({ className, onEnter }) => {
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
  const teclasEspeciais = React.useMemo(
    () => ({
      Enter: async () => {
        onEnter && onEnter()
        await personagensControl.fetchPersonagens()
      },
    }),
    [onEnter],
  )
  const handleKeyDown = React.useCallback(async (event) => {
    const handleTeclaEspecial = teclasEspeciais[event.key]
    if (handleTeclaEspecial) await handleTeclaEspecial()
  }, [])
  return (
    <div className={classNames(classes.root, className)}>
      <i className={classes.icon}>
        <SearchIcon />
      </i>
      <input
        className={classes.input}
        value={filtro.nameStartsWith || ''}
        type="search"
        data-search
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        placeholder={strings.procurePorHerois}
      />
    </div>
  )
}