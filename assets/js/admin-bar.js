export default class AdminBar {
    adminBar = document.querySelector('#wpadminbar');
    notificationBar = document.querySelector('.notification-bar');
    pageHeader = document.querySelector('.page-header');

    init = () => {
        if (this.adminBar) {
            this.shiftElements();
        }
    }

    shiftElements = () => {
        this.adminBarHeight = this.adminBar.offsetHeight;

        if (this.notificationBar) {
            this.notificationBarStyles = window.getComputedStyle(this.notificationBar);
            this.notificationBar.style.top = parseInt(this.notificationBarStyles.getPropertyValue('top').replace('px', '')) + this.adminBarHeight + 'px';
        }

        if (this.pageHeader) {
            this.pageHeaderStyles = window.getComputedStyle(this.pageHeader);
            this.pageHeader.style.top = parseInt(this.pageHeaderStyles.getPropertyValue('top').replace('px', '')) + this.adminBarHeight + 'px';
        }
    }
}
