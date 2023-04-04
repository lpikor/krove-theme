const notificationBar = () => {
    const notification = document.querySelector('.notification-bar');
    const notifcationClose = document.querySelector('.notification-bar__close');

    const notificationCookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('notification='))
        ?.split('=')[1];

    if (notification) {
        document.body.classList.add('body--notification');
    }

    if (notificationCookieValue === 'closed') {
        if (document.body.classList.contains('body--notification')) {
            document.body.classList.remove('body--notification');
        }

        notification.remove();
    }

    notifcationClose.addEventListener('click', () => {
        if (document.body.classList.contains('body--notification')) {
            document.body.classList.remove('body--notification');
        }

        if (notificationCookieValue === undefined || notificationCookieValue !== 'closed') {
            const cookieExpirationDate = new Date();
            cookieExpirationDate.setUTCDate(cookieExpirationDate.getUTCDate() + 7);
            document.cookie = 'notification=closed; expires=' + cookieExpirationDate.toUTCString();
        }

        notification.remove();
    });
}

export default notificationBar;
