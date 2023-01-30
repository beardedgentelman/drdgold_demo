import Popup from 'reactjs-popup'
import classNames from 'classnames'

import Btn from 'components/btn/Btn'

import './modal.css'

const Modal = props => {
  return (
    <Popup
      className={classNames('modal', props.classNamePopup)}
      open={props.openModal}
      lockScroll
      closeOnDocumentClick
      onClose={props.closeModal}
    >
      <div className={classNames('modal', props.classNameModal)}>
        {props.modalChildren}
        <div className={classNames('info', props.classNameInfo)}>
          <nav>
            <ul>
              <li className={classNames('modal_nav', props.classNameModalNav)}>{props.navChildrenFirst}</li>
              <li className='modal_nav'>{props.navChildrenSecond}</li>
              <li className='modal_nav'>{props.navChildrenThird}</li>
            </ul>
          </nav>
          <div className={classNames('modal_data', props.classNameModalData)}>{props.modalChildrenData}</div>
        </div>
      </div>
      <Btn className={classNames('close_modal', props.classNameCloseModalBtn)} onClick={props.closeModal}>
        Close
      </Btn>
    </Popup>
  )
}

export default Modal
