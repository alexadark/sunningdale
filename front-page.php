<?php
//Template name: Front page

$context   = Timber::get_context();
$templates = array('front-page.twig');
Timber::render($templates, $context);