export default class Hamburger {
    hamburger = document.querySelector('.hamburger');
    pageHeader = document.querySelector('.page-header');
    body = document.body;

    init = () => {
        this.hamburger.addEventListener('click', this.handleHamburgerToggle);
    }

    handleHamburgerToggle = () => {
        if (this.hamburger.classList.contains('active')) {
            this.hamburger.classList.remove('active');

            if (this.pageHeader.classList.contains('expanded')) {
                this.pageHeader.classList.remove('expanded');
            }

            if (this.body.classList.contains('scroll-lock')) {
                this.body.classList.remove('scroll-lock');
            }

        } else {
            this.hamburger.classList.add('active');

            if (!this.pageHeader.classList.contains('expanded')) {
                this.pageHeader.classList.add('expanded');
            }

            if (!this.body.classList.contains('scroll-lock')) {
                this.body.classList.add('scroll-lock');
            }
        }
    }
}
