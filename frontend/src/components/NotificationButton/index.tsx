import { Button } from "./styles"
import notificationIcon from "../../assets/notification-icon.svg"
import { Sales } from "../../api/requests"
import { toast } from "react-toastify";

interface INotificationButton {
  id: string;
}

const NotificationButton = ({ id }: INotificationButton) => {

  const handleClick = (id: string) => {
    Sales.notify(id).then(() => {
      toast.info("SMS enviado com sucesso!")
    })
  }
  return (
    <Button className="dsmeta-red-btn" onClick={() => handleClick(id) }>
      <img src={notificationIcon} alt="Notificar" />
    </Button>
  )
}

export default NotificationButton 