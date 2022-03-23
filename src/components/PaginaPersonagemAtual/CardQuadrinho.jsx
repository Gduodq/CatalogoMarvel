import React from 'react'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25em',
    height: '15rem',
    width: '11rem',
  },
  imagemQuadrinho: { maxWidth: '100%', height: 'calc(100% - 3rem)' },
  containerTitulo: {
    width: '100%',
    height: '3rem',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  titulo: { margin: 0, fontSize: '1rem' },
})

export const CardQuadrinho = ({ instancia }) => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <img src={instancia.imageURL} className={classes.imagemQuadrinho} alt="" />
      <div className={classes.containerTitulo}>
        <h3 className={classes.titulo}>{instancia.title}</h3>
      </div>
    </div>
  )
}
