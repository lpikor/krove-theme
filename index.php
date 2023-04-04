<!DOCTYPE html>
<html lang="en">

<head>
    <?php wp_head(); ?>
</head>

<body>
    <div class="notification-bar">
        <div class="notification-bar__container">
            <p class="notification-bar__text">Free Shipping for all orders above $50</p>
            <button class="notification-bar__close">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4193 9.31456C10.8309 8.85702 9.98007 8.89861 9.43934 9.43934C8.85355 10.0251 8.85355 10.9749 9.43934 11.5607L21.8787 24L9.43934 36.4393L9.31456 36.5807C8.85702 37.1691 8.89861 38.0199 9.43934 38.5607C10.0251 39.1464 10.9749 39.1464 11.5607 38.5607L24 26.1213L36.4393 38.5607L36.5807 38.6854C37.1691 39.143 38.0199 39.1014 38.5607 38.5607C39.1464 37.9749 39.1464 37.0251 38.5607 36.4393L26.1213 24L38.5607 11.5607L38.6854 11.4193C39.143 10.8309 39.1014 9.98007 38.5607 9.43934C37.9749 8.85355 37.0251 8.85355 36.4393 9.43934L24 21.8787L11.5607 9.43934L11.4193 9.31456Z" fill="black" />
                </svg>
            </button>
        </div>
    </div>

    <header class="page-header is-visible">
        <div class="page-header__container">
            <a href="<?php echo get_home_url(); ?>" class="page-header__logo">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo@2x.svg'; ?>" alt="Krove">
            </a>
            <nav class="main-nav page-header__navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'krove_menu'
                ));
                ?>
            </nav>
            <a href="<?php echo get_home_url(); ?>" class="page-header__account">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.5C19.0294 4.5 15 8.52944 15 13.5C15 18.4706 19.0294 22.5 24 22.5C28.9706 22.5 33 18.4706 33 13.5C33 8.52944 28.9706 4.5 24 4.5ZM24 7.5C27.3137 7.5 30 10.1863 30 13.5C30 16.8137 27.3137 19.5 24 19.5C20.6863 19.5 18 16.8137 18 13.5C18 10.1863 20.6863 7.5 24 7.5ZM24 24C15.7604 24 9 29.8426 9 37.1673C9 45.6109 39 45.6109 39 37.1673C39 29.8426 32.2396 24 24 24ZM24 27C30.6721 27 36 31.6046 36 37.1673C36 38.8417 32.5923 39.8852 28.3451 40.2977L27.3512 40.3817C25.1706 40.5394 22.8294 40.5394 20.6488 40.3817L19.655 40.2977C15.4077 39.8852 12 38.8417 12 37.1673C12 31.6046 17.3279 27 24 27Z" fill="black" />
                </svg>
            </a>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero__container">
                <h1 class="hero__title">Lorem Ipsum</h1>
                <p class="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </section>
    </main>

    <?php wp_footer(); ?>
</body>

</html>