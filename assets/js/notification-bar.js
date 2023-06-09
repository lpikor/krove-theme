export default class NotificationBar {

    init = () => {
        if (this.getNotificationCookie() !== 'closed') {
            this.createNotificationBar();
        }

        if (this.notificationClose) {
            this.notificationClose.addEventListener('click', () => {
                this.removeNotification();
                this.addCookie();
            });
        }
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

        if (this.notification) {
            this.notification.remove();
        }
    }

    addCookie = () => {
        const cookieExpirationDate = new Date();
        cookieExpirationDate.setUTCDate(cookieExpirationDate.getUTCDate() + 7);

        document.cookie = 'notification=closed; expires=' + cookieExpirationDate.toUTCString();
    }

    createNotificationBar = () => {
        const notificationBar = document.createElement('div');
        notificationBar.className = 'notification-bar';

        const container = document.createElement('div');
        container.className = 'notification-bar__container';

        const paragraph = document.createElement('p');
        paragraph.className = 'notification-bar__text';
        paragraph.textContent = 'Free Shipping for all orders above $50';

        const closeButton = document.createElement('button');
        closeButton.className = 'notification-bar__close';
        closeButton.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4193 9.31456C10.8309 8.85702 9.98007 8.89861 9.43934 9.43934C8.85355 10.0251 8.85355 10.9749 9.43934 11.5607L21.8787 24L9.43934 36.4393L9.31456 36.5807C8.85702 37.1691 8.89861 38.0199 9.43934 38.5607C10.0251 39.1464 10.9749 39.1464 11.5607 38.5607L24 26.1213L36.4393 38.5607L36.5807 38.6854C37.1691 39.143 38.0199 39.1014 38.5607 38.5607C39.1464 37.9749 39.1464 37.0251 38.5607 36.4393L26.1213 24L38.5607 11.5607L38.6854 11.4193C39.143 10.8309 39.1014 9.98007 38.5607 9.43934C37.9749 8.85355 37.0251 8.85355 36.4393 9.43934L24 21.8787L11.5607 9.43934L11.4193 9.31456Z" fill="black" />
            </svg>
        `;

        container.append(paragraph, closeButton);

        notificationBar.append(container);

        document.body.append(notificationBar);

        document.body.classList.add('body--notification');

        this.notification = document.querySelector('.notification-bar');
        this.notificationClose = document.querySelector('.notification-bar__close')
    }
}
