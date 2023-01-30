import { memo } from 'react'
import classNames from 'classnames'

import './btn.css'

const Btn = props => {
  return (
    <button
      ref={props.referral}
      type={props.type}
      className={classNames('btn', props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default memo(Btn)
