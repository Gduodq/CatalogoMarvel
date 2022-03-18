import React from 'react'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  rootCard: { display: 'flex', flexDirection: 'column', height: 200 },
  imagemPersonagem: { width: '100%', height: '77%' },
  stripe: { width: '100%', backgroundColor: '#d03816', height: '3px' },
  bottomCard: {
    width: '100%',
    maxWidth: '100%',
    height: 'calc(23% - 3px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomePersonagem: {
    textAlign: 'start',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: 7,
  },
  fonteNome: { fontSize: '1.1rem', fontWeight: 500 },
  favorito: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' },
})

export const CardPersonagem = ({ instancia }) => {
  const classes = useClasses()
  return (
    <div className={classes.rootCard}>
      <img src={instancia.imageURL} className={classes.imagemPersonagem} />
      <div className={classes.stripe} />
      <div className={classes.bottomCard}>
        <div className={classes.nomePersonagem}>
          <span className={classes.fonteNome}>{instancia.name}</span>
        </div>
        <div className={classes.favorito}>Fav</div>
      </div>
    </div>
  )
}
