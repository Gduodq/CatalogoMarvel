import React from 'react'
import { usePersonagemAtual } from 'components/ProviderPaginaPersonagem'
import { PersonagemFavoritoIconButton } from 'components/PersonagemFavoritoIconButton'
import { strings } from 'utils/strings'
import { QuadrinhosIcon } from 'icons/QuadrinhosIcon'
import { TrailerIcon } from 'icons/TrailerIcon'
import { makeStyles } from '@mui/styles'
import { Rating } from './Rating'

const useClasses = makeStyles({
  root: ({ nome }) => ({
    display: 'flex',
    alignItems: 'center',
    width: 'min(1000px, 100%)',
    overflowX: 'hidden',
    '&:before': {
      position: 'relative',
      content: `"${nome}"`,
      left: '0',
      top: '0',
      width: '0',
      fontSize: '10rem',
      fontWeight: 800,
      color: 'lightgray',
      textTransform: 'uppercase',
      letterSpacing: '1.5rem',
      whiteSpace: 'nowrap',
      zIndex: -1,
    },
    '@media (max-width: 680px)': { flexDirection: 'column', gap: '2rem', justifyContent: 'center', '&:before:': {} },
  }),
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '38%',
    '@media (max-width: 720px)': { width: '100%' },
  },
  tituloFavorito: { display: 'flex', justifyContent: 'space-between' },
  nomePersonagem: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: 7,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '2rem',
  },
  descricao: { lineHeight: '1.6rem', color: 'gray' },
  infoComIcones: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  infoComIcone: { display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: 500 },
  iconeEValor: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem', minHeight: '2rem' },
  containerImagem: {
    width: '62%',
    padding: 'min(10%, 8rem) 0 min(10%, 8rem) min(10%, 8rem)',
    alignItems: 'flex-end',
    '@media (max-width: 720px)': { width: '100%' },
  },
  imagem: { width: '90%' },
})

export const InfoPersonagemAtual = () => {
  const personagemAtual = usePersonagemAtual()
  const classes = useClasses({ nome: personagemAtual.name })
  return (
    <div className={classes.root}>
      <InfoPersonagem />
      <ImagemPersonagem />
    </div>
  )
}

const InfoPersonagem = () => {
  const personagemAtual = usePersonagemAtual()
  const classes = useClasses()
  return (
    <div className={classes.info}>
      <div className={classes.tituloFavorito}>
        <div className={classes.nomePersonagem}>{personagemAtual.name}</div>
        <PersonagemFavoritoIconButton personagem={personagemAtual} />
      </div>
      <div className={classes.descricao}>{personagemAtual.description || strings.naoHaDescricaoParaPersonagem}</div>
      <div className={classes.infoComIcones}>
        <InfoComIcone string={strings.quadrinhos} valor={personagemAtual.quadrinhosDisponiveis} Icon={QuadrinhosIcon} />
        <InfoComIcone string={strings.eventos} valor={personagemAtual.eventosDisponiveis} Icon={TrailerIcon} />
      </div>
      <Rating />
    </div>
  )
}

const ImagemPersonagem = () => {
  const classes = useClasses()
  const personagemAtual = usePersonagemAtual()
  return (
    <div className={classes.containerImagem}>
      <img className={classes.imagem} src={personagemAtual.imageURL} alt="" />
    </div>
  )
}

const InfoComIcone = ({ Icon, string, valor }) => {
  const classes = useClasses()
  return (
    <div className={classes.infoComIcone}>
      {string}
      <div className={classes.iconeEValor}>
        <Icon />
        {valor}
      </div>
    </div>
  )
}
