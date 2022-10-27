import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationsData = {
  data: (
    <>
      <AiFillCheckCircle className="success-notification" />
    </>
  ),
  data: (
    <>
      <RiErrorWarningFill className="error-notification" />
    </>
  ),
  data: (
    <>
      <MdWarning className="warning-notification" />
    </>
  ),
  data: (
    <>
      <MdInfo className="info-notification" />
    </>
  ),
}

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="alert-notifications-header">Alert Notifications</h1>
    <ul className="alert-notifications-list">
      {notificationsData.map(notificationsDataItem => (
        <Notification></Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
