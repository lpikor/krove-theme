<?php

function theme_assets() {
    wp_enqueue_style('krove_styles', get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_script('krove_scripts', get_template_directory_uri() . '/assets/js/index.js');
}

add_action('wp_enqueue_scripts', 'theme_assets');

function theme_nav_menu() {
    register_nav_menu('mainNavMenu', 'Main Navigation Menu');
}

add_action('after_setup_theme', 'theme_nav_menu');
