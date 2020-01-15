<?php

/**
 * Adds a css class to the body element
 *
 * @param  array $classes the current body classes
 * @return array $classes modified classes
 */
function wst_add_slug_body_class($class)
{
    global $post;
    $class[] = $post->post_name . '-page';
    return $class;
}
add_filter('body_class', 'wst_add_slug_body_class');

function print_menu($menu){
    $args = ['menu'=>$menu];
    wp_nav_menu($args);
}

function get_course(){
    $args = array(
        'post_type'         =>  'course',
        'show_posts'        =>-1
    );
    return new Timber\PostQuery($args);
}