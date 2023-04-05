import "../css/style.scss";

import Menu from "./menu";
import Scroll from "./scroll";
import NotificationBar from "./notification-bar";
import AdminBar from "./admin-bar";

window.addEventListener('DOMContentLoaded', () => {
    new Menu().init();
    new NotificationBar().init();
    new Scroll().init();
    new AdminBar().init();
});
