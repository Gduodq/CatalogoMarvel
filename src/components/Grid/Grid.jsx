import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

const useClasses = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(13.5rem, 1fr))',
    gap: '1rem',
    placeItems: 'center',
  },
})

export const Grid = ({ instancias, Card, className = '', ...props }) => {
  const classes = useClasses()
  return (
    <div className={classNames(classes.grid, className)} data-testid={props['data-testid']}>
      {instancias.map((instancia, index) => (
        <Fragment key={typeof instancia === 'object' && instancia.id ? instancia.id : index}>
          <Card instancia={instancia} />
        </Fragment>
      ))}
    </div>
  )
}
