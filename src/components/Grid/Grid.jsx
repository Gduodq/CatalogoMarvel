import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

const useClasses = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
    gap: '1rem',
  },
})

export const Grid = ({ instancias, Card, className = '' }) => {
  const classes = useClasses()
  return (
    <div className={classNames(classes.grid, className)}>
      {instancias.map((instancia, index) => (
        <Fragment key={typeof instancia === 'object' && instancia.id ? instancia.id : index}>
          <Card instancia={instancia} />
        </Fragment>
      ))}
    </div>
  )
}
