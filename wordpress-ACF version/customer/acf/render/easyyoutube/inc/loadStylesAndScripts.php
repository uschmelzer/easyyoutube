<?php

// ———————————————————————————————————————————————————————————————————
// CSS
// ———————————————————————————————————————————————————————————————————
wp_enqueue_style('acf-easyyoutube-css',      EASYTEMPLATEURI .'/customer/acf/render/easyyoutube/assets/styles/easyyoutube.css');
wp_enqueue_style('acf-easyyoutubetheme-css', EASYTEMPLATEURI .'/customer/acf/render/easyyoutube/assets/styles/easyyoutubeTheme.css');

// ———————————————————————————————————————————————————————————————————
// JS
// ———————————————————————————————————————————————————————————————————
wp_enqueue_script('acf-easyyoutube-js', EASYTEMPLATEURI .'/customer/acf/render/easyyoutube/assets/js/easyyoutube.js', 1, 1.0, true);
