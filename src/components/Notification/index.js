import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <li className="notification-item">
      <div className="notification-content-container">{children}</div>
      <button type="button" className="notification-close-button">
        <GrFormClose className="notification-close-button-icon" />
      </button>
    </li>
  )
}

export default Notification
