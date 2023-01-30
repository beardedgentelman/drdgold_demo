import classNames from 'classnames'

import './paginationPageNum.css'

const PaginationPageNum = props => {
  return (
    <div
      key={props.keyKey}
      className={classNames('pagination__page-number', props.active ? 'active' : '', props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default PaginationPageNum
