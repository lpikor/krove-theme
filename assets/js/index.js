import "../css/style.scss";

import menu from "./menu";
import scroll from "./scroll";
import NotificationBar from "./notification-bar";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    new NotificationBar().init();
    scroll();
});
