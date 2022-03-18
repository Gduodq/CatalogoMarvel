import React from 'react'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  rootCard: { display: 'flex', flexDirection: 'column', height: 200 },
  imagemPersonagem: { width: '100%', height: '80%' },
  stripe: { width: '100%', backgroundColor: '#d03816', height: '3px' },
  bottomCard: {
    width: '100%',
    maxWidth: '100%',
    height: 'calc(20% - 3px)',
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
  favorito: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' },
})

export const CardPersonagem = ({ instancia }) => {
  const classes = useClasses()
  return (
    <div className={classes.rootCard}>
      <img className={classes.imagemPersonagem} />
      <div className={classes.stripe} />
      <div className={classes.bottomCard}>
        <div className={classes.nomePersonagem}>
          <span>NomeNomeNOmeNome</span>
        </div>
        <div className={classes.favorito}>Fav</div>
      </div>
    </div>
  )
}
