const menu = () => {
    const pageHeader = document.querySelector('.page-header');
    const menuTriggers = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item > a');
    const menuItemParent = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item-has-children > a');

    menuItemParent.forEach(parent => {
        const subMenu = parent.parentNode.querySelector('.sub-menu');

        parent.addEventListener('mouseenter', () => {
            subMenu.classList.add('active');
        });
    });

    menuTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', (e) => {
            const subMenuActive = document.querySelector('.sub-menu.active');
            if (!e.target.parentNode.querySelector('.sub-menu.active') && subMenuActive) {
                subMenuActive.classList.remove('active');
            }
        });
    });

    pageHeader.addEventListener('mouseleave', () => {
        const subMenuActive = document.querySelector('.sub-menu.active');
        if (subMenuActive) {
            subMenuActive.classList.remove('active');
        }
    });
}

export default menu;
