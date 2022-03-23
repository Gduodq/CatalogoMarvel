import React from 'react'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  root: { display: 'flex' },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '25px',
  },
  switchInput: { display: 'none' },
  slider: ({ isToggled, alterarCor }) => ({
    position: 'absolute',
    cursor: 'pointer',
    backgroundColor: alterarCor && isToggled ? '#336699' : '#ccc',
    borderRadius: '25px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transition: 'background-color 0.2s ease',
    '&:before': {
      position: 'absolute',
      content: '""',
      left: '4px',
      top: '4px',
      width: '17px',
      height: '17px',
      backgroundColor: alterarCor && isToggled ? '#6699cc' : '#FF0000',
      borderRadius: '50%',
      transition: 'transform 0.3s ease',
      transform: isToggled ? 'translateX(24px)' : '',
    },
  }),
})

export const ToggleSwitch = ({ alterarCor = true, onChange, ...props }) => {
  const [isToggled, setIsToggled] = React.useState(false)
  const classes = useClasses({ isToggled, alterarCor })
  const onToggle = () => {
    onChange && onChange(!isToggled)
    setIsToggled(!isToggled)
  }
  return (
    <div className={classes.root} data-testid={props['data-testid']}>
      <label className={classes.switch}>
        <input className={classes.switchInput} type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={classes.slider} />
      </label>
    </div>
  )
}
