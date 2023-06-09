<!DOCTYPE html>
<html lang="en">

<head>
    <?php wp_head(); ?>
</head>

<body>
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