<?php
/*
 * Template name: Competition results
 */


$context   = Timber::get_context();

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args = array(
    'post_type'         =>  'competition_result',
    'posts_per_page'    =>  3,
    'paged'             =>  $paged,
    'show_posts'        =>-1
);
$context['results'] = new Timber\PostQuery($args);

$templates = array('competition-result.twig');
Timber::render($templates, $context);