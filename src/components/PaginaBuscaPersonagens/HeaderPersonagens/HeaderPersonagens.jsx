import React from 'react'
import { MarvelLogoIcon } from 'icons/MarvelLogoIcon'
import { makeStyles } from '@mui/styles'
import { strings } from 'utils/strings'

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: 'min(59rem, 95%)',
  },
  titulo: { fontSize: '1.8rem', fontWeight: 700, color: 'black', textTransform: 'uppercase', margin: 0 },
  subtitlo: { fontSize: '0.9rem', fontWeight: 500, color: '#80808085', margin: 0 },
})

export const HeaderPersonagens = () => {
  const classes = useClasses()
  return (
    <div className={classes.root}>
      <MarvelLogoIcon />
      <p className={classes.titulo}>{strings.exploreOUniverso}</p>
      <p className={classes.subtitlo}>{strings.subtituloHeaderPersonagens}</p>
    </div>
  )
}
