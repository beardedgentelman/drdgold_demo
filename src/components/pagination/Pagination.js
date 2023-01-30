import React from 'react'
import classNames from 'classnames'

import './pagination.css'

const Pagination = props => {
  return (
    <div className={classNames('pagination', props.className)}>
      <button
        className={classNames('pagination__btn', 'prev', props.classNamePrev)}
        onClick={props.onClickPrev}
        disabled={props.disabledPrev}
      >
        &#171; prev {props.btnText}
      </button>
      {props.children}
      <button
        className={classNames('pagination__btn', 'next', props.classNameNext)}
        onClick={props.onClickNext}
        disabled={props.disabledNext}
      >
        next &#187; {props.btnText}
      </button>
    </div>
  )
}

export default Pagination
