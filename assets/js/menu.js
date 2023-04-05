export default class Menu {
    pageHeader = document.querySelector('.page-header');
    menuTriggers = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item > a');
    menuItemParents = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item-has-children > a');
    subMenuChildren = document.querySelectorAll('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item > .sub-menu > .menu-item a');

    init = () => {
        this.handleParent();
        this.handleChildren();
        this.handleMenuTriggersMouseEnter();
        this.handlePageHeaderMouseLeave();
    }

    handleParent = () => {
        this.menuItemParents.forEach(parent => {
            const subMenu = parent.parentNode.querySelector('.sub-menu');

            parent.addEventListener('mouseenter', () => {
                subMenu.classList.add('active');
            });

            parent.addEventListener('focusin', (e) => {
                subMenu.classList.add('active');
            });

            parent.addEventListener('focusout', (e) => {
                subMenu.classList.add('active');
            });
        });
    }

    handleChildren = () => {
        this.subMenuChildren.forEach(child => {
            const subMenu = child.closest('.main-nav .menu-main-navigation-menu-container > .menu > .menu-item > .sub-menu');

            child.addEventListener('focusout', (e) => {
                if (subMenu.classList.contains('active') && Array.from(this.menuTriggers).includes(e.relatedTarget)) {
                    subMenu.classList.remove('active');
                }
            });
            
            child.addEventListener('focusin', (e) => {
                if (!subMenu.classList.contains('active') && Array.from(this.menuTriggers).includes(e.relatedTarget)) {
                    subMenu.classList.add('active');
                }
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
