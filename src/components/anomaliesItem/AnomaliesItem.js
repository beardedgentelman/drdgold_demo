import classNames from 'classnames'

import concIcon from './../../assets/icons/conc.svg'
import doneIcon from './../../assets/icons/done.svg'
import expirIcon from './../../assets/icons/expir.svg'
import infoIcon from './../../assets/icons/info.svg'
import pendIcon from './../../assets/icons/pend.svg'
import warnIcon from './../../assets/icons/warn.svg'

import './anomalies-item.css'

const AnomaliesItem = props => {
  const typeAnomaly = id => {
    if (id === 'done') {
      return doneIcon
    } else if (id === 'warn') {
      return warnIcon
    } else if (id === 'pend') {
      return pendIcon
    } else if (id === 'expir') {
      return expirIcon
    } else if (id === 'info') {
      return infoIcon
    } else if (id === 'conc') {
      return concIcon
    }
  }

  return (
    <div className={classNames('anomaly', props.className)} onClick={props.onClick}>
      <img src={typeAnomaly(props.id)} alt={props.id + ' icon'} />
      <span>{props.children}</span>
    </div>
  )
}

export default AnomaliesItem
