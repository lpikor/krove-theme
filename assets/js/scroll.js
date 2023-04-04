const scroll = () => {
    const pageHeader = document.querySelector('.page-header');
    let previousScrollPosition = 0;

    document.addEventListener('scroll', () => {
        let newScrollPosition = window.scrollY;

        if (newScrollPosition < previousScrollPosition && !pageHeader.classList.contains('is-visible')) {
            pageHeader.classList.add('is-visible');
        } else if (newScrollPosition > previousScrollPosition && pageHeader.classList.contains('is-visible')) {
            pageHeader.classList.remove('is-visible');
        }

        previousScrollPosition = newScrollPosition;
    });
}

export default scroll;
