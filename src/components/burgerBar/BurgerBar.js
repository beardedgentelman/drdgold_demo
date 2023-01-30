import classNames from 'classnames'

import './burger-bat.css'

const BurgerBar = props => {
  return (
    <div className={classNames('burger-bar', props.className)} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerBar
