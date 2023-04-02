<?php

function theme_assets() {
    wp_enqueue_style('krove_styles', get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_script('krove_scripts', get_template_directory_uri() . '/assets/js/index.js');
}

add_action('wp_enqueue_scripts', 'theme_assets');
