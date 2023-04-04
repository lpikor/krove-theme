import "../css/style.scss";

import Menu from "./menu";
import scroll from "./scroll";
import NotificationBar from "./notification-bar";

window.addEventListener('DOMContentLoaded', () => {
    new Menu().init();
    new NotificationBar().init();
    scroll();
});
