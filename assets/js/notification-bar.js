export default class NotificationBar {
    notification = document.querySelector('.notification-bar');
    notificationClose = document.querySelector('.notification-bar__close');

    init = () => {
        if (this.notification) {
            document.body.classList.add('body--notification');
        }

        if (this.getNotificationCookie() === 'closed') {
            this.removeNotification();
        }

        this.notificationClose.addEventListener('click', () => {
            this.removeNotification();
            this.addCookie();
        });
    }

    getNotificationCookie = () => {
        return document.cookie
            .split('; ')
            .find((row) => row.startsWith('notification='))
            ?.split('=')[1];
    }
    
    removeNotification = () => {
        if (document.body.classList.contains('body--notification')) {
            document.body.classList.remove('body--notification');
        }
    
        this.notification.remove();
    }
    
    addCookie = () => {
        const cookieExpirationDate = new Date();
        cookieExpirationDate.setUTCDate(cookieExpirationDate.getUTCDate() + 7);
        document.cookie = 'notification=closed; expires=' + cookieExpirationDate.toUTCString();
    }
}
