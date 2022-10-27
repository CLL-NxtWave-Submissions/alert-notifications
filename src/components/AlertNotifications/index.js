import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationsData = [
  <>
    <AiFillCheckCircle className="success-notification" />
  </>,
  <>
    <RiErrorWarningFill className="error-notification" />
  </>,
  <>
    <MdWarning className="warning-notification" />
  </>,
  <>
    <MdInfo className="info-notification" />
  </>,
]

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="alert-notifications-header">Alert Notifications</h1>
    <ul className="alert-notifications-list">
      {notificationsData.map(notificationsDataItem => (
        <Notification key={Math.floor(Math.random() * 1000)}>
          {notificationsDataItem}
        </Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
