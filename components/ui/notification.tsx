import ReactDOM from "react-dom";

import { NotificationProps } from "@/lib/props";
import classes from "./notification.module.scss";

const Notification: React.FC<NotificationProps> = (props) => {
  const { title, message, status } = props;

  let statusClasses: string = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses: string = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")!
  );
};

export default Notification;
