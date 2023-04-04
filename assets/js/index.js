import "../css/style.scss";

import menu from "./menu";
import scroll from "./scroll";
import notificationBar from "./notification-bar";

window.addEventListener('DOMContentLoaded', () => {
    menu();
    notificationBar();
    scroll();
});
