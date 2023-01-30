import classNames from 'classnames'

import './pageTitle.css'

function PageTitle(props) {
  return <h1 className={classNames('page__title', props.className)}>{props.children}</h1>
}

export default PageTitle
