export default class Scroll {
    pageHeader = document.querySelector('.page-header');
    previousScrollPosition = 0;

    init = () => {
        this.handleScroll();
    }

    handleScroll = () => {
        document.addEventListener('scroll', () => {
            let newScrollPosition = window.scrollY;
    
            if (newScrollPosition < this.previousScrollPosition && !this.pageHeader.classList.contains('is-visible')) {
                this.pageHeader.classList.add('is-visible');
            } else if (newScrollPosition > this.previousScrollPosition && this.pageHeader.classList.contains('is-visible')) {
                this.pageHeader.classList.remove('is-visible');
            }
    
            this.previousScrollPosition = newScrollPosition;
        });
    }
}
