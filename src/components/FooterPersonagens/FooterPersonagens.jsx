import React from 'react'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  root: { width: '100%', height: '50px', backgroundColor: '#FF0000', marginTop: 'auto' },
})

export const FooterPersonagens = () => {
  const classes = useClasses()
  return <div className={classes.root} />
}
