<?php
/*
 * Template name: Flexi-template
 */


$context   = Timber::get_context();

//used on old course page
$args = array(
    'post_type'         =>  'course',
    'show_posts'        =>-1
);
$context['number'] = array('', 'st', 'nd', 'rd');
$context['course'] = new Timber\PostQuery($args);
//--used on old course page

$templates = array('flexi-template.twig');
Timber::render($templates, $context);