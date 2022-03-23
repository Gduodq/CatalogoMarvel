import React from 'react'
import { makeStyles } from '@mui/styles'
import { useModalContext } from 'components/ProviderPaginaPersonagem/ProviderPaginaPersonagemComponent'

const useClasses = makeStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0,0.3)',
  },
})

const desabilitarScroll = () => {
  const scrollTop = window.pageYOffset
  const scrollLeft = window.pageXOffset
  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

const habilitarScroll = () => {
  window.onscroll = function () {}
}

export const Modal = ({ Component = null }) => {
  const classes = useClasses()
  const modalContext = useModalContext()
  React.useEffect(() => {
    if (modalContext.modalAberto) desabilitarScroll()
    else habilitarScroll()
  }, [modalContext.modalAberto])
  if (!modalContext.modalAberto) return null
  return (
    <div className={classes.root}>
      <Component />
    </div>
  )
}
