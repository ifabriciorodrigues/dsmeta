import { Button } from "./styles"
import notificationIcon from "../../assets/notification-icon.svg"

const NotificationButton = () => {
  return (
    <Button className="dsmeta-red-btn">
      <img src={notificationIcon} alt="Notificar" />
    </Button>
  )
}

export default NotificationButton 