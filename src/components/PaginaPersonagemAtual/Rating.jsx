import React from 'react'
import { makeStyles } from '@mui/styles'
import { AvaliacaoOnIcon } from 'icons/AvaliacaoOnIcon'
import { AvaliacaoOffIcon } from 'icons/AvaliacaoOffIcon'
import { strings } from 'utils/strings'

const useClasses = makeStyles({
  rating: { display: 'flex', alignItems: 'center', fontWeight: 500 },
})

export const Rating = () => {
  const quantidadeEstrelas = React.useMemo(() => Math.round(Math.random() * 5), [])
  const classes = useClasses()
  return (
    <div className={classes.rating}>
      {strings.rating}:
      {Array(quantidadeEstrelas)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <AvaliacaoOnIcon />
          </div>
        ))}
      {Array(5 - quantidadeEstrelas)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <AvaliacaoOffIcon />
          </div>
        ))}
    </div>
  )
}
