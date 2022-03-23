import React from 'react'
import { makeStyles } from '@mui/styles'
import { usePaginaPersonagemControl } from 'components/ProviderPaginaPersonagem'
import { PersonagemFavoritoIconButton } from 'components/PersonagemFavoritoIconButton'

const useClasses = makeStyles({
  rootCard: { display: 'flex', flexDirection: 'column', height: '14rem', width: '14rem' },
  imagemPersonagem: { width: '100%', height: '77%', cursor: 'pointer', '&:hover': { filter: 'brightness(0.75)' } },
  stripe: { width: '100%', backgroundColor: '#FF0000', height: '5px' },
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
})

export const CardPersonagem = ({ instancia }) => {
  const classes = useClasses()
  const paginaPersonagemControl = usePaginaPersonagemControl()
  const onClickImagem = React.useCallback(() => {
    paginaPersonagemControl.setPersonagemAtual(instancia)
    paginaPersonagemControl.abrirPaginaPersonagem()
  }, [])
  return (
    <div className={classes.rootCard} data-testid="card-personagem">
      <img src={instancia.imageURL} className={classes.imagemPersonagem} onClick={onClickImagem} alt="" />
      <div className={classes.stripe} />
      <div className={classes.bottomCard}>
        <div className={classes.nomePersonagem}>
          <span className={classes.fonteNome}>{instancia.name}</span>
        </div>
        <PersonagemFavoritoIconButton personagem={instancia} />
      </div>
    </div>
  )
}
