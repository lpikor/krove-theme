export default class Menu {
    pageHeader = document.querySelector('.page-header');
    menuTriggers = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item > a');
    menuItemParent = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item-has-children > a');

    init = () => {
        this.handleParentMouseEnter();
        this.handleMenuTriggersMouseEnter();
        this.handlePageHeaderMouseLeave();
    }

    handleParentMouseEnter = () => {
        this.menuItemParent.forEach(parent => {
            const subMenu = parent.parentNode.querySelector('.sub-menu');

            parent.addEventListener('mouseenter', () => {
                subMenu.classList.add('active');
            });
        });
    }

    handleMenuTriggersMouseEnter = () => {
        this.menuTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', (e) => {
                const subMenuActive = document.querySelector('.sub-menu.active');
                if (!e.target.parentNode.querySelector('.sub-menu.active') && subMenuActive) {
                    subMenuActive.classList.remove('active');
                }
            });
        });
    }

    handlePageHeaderMouseLeave = () => {
        this.pageHeader.addEventListener('mouseleave', () => {
            const subMenuActive = document.querySelector('.sub-menu.active');
            if (subMenuActive) {
                subMenuActive.classList.remove('active');
            }
        });
    }
}
