import "../css/style.scss";

import Menu from "./menu";
import Scroll from "./scroll";
import NotificationBar from "./notification-bar";
import AdminBar from "./admin-bar";
import Hamburger from "./hamburger";

window.addEventListener('DOMContentLoaded', () => {
    new Menu().init();
    new NotificationBar().init();
    new Scroll().init();
    new AdminBar().init();
    new Hamburger().init();
});
