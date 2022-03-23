import React from 'react'
import { strings } from 'utils/strings'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

const useClasses = makeStyles({
  root: {
    border: '2px solid #FF0000',
    backgroundColor: '#FF0000',
    textTransform: 'uppercase',
    padding: '0.5rem 1.1rem',
    borderRadius: '1rem',
    fontWeight: 500,
    color: 'white',
    cursor: 'pointer',
    '&:hover': { boxShadow: 'inset 0px 0px 0px 2px white;' },
  },
})

export const RecarregarButton = ({ onClick, className }) => {
  const classes = useClasses()
  return (
    <button className={classNames(classes.root, className)} onClick={onClick}>
      {strings.recarregar}
    </button>
  )
}
