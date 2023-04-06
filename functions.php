<?php

function theme_assets() {
    wp_enqueue_style('krove_styles', get_template_directory_uri() . '/build/style-index.css');
    wp_enqueue_script('krove_scripts', get_template_directory_uri() . '/build/index.js');
}

add_action('wp_enqueue_scripts', 'theme_assets');

function theme_nav_menu() {
    register_nav_menu('krove_menu', 'Main Navigation Menu');
}

add_action('after_setup_theme', 'theme_nav_menu');

add_action( 'wp_head', 'add_viewport_meta_tag' , '1' );

function add_viewport_meta_tag() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1" />';
}
