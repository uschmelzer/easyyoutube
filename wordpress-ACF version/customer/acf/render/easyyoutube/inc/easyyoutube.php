<?php

// ———————————————————————————————————————————————————————————————————
// CHANGELOG
// ———————————————————————————————————————————————————————————————————
// Freitag, 10. August 2018
// ------------------------
// DSGVO fuer Youtube Videos
// https://www.blogmojo.de/youtube-videos-datenschutzkonform-einbetten/#1_einbetten_mit_erweitertem_datenschutzmodus
// ———————————————————————————————————————————————————————————————————



// ———————————————————————————————————————————————————————————————————
// https://wordpress.stackexchange.com/a/254586
// ———————————————————————————————————————————————————————————————————
// CSS - easygrid.css
// ———————————————————————————————————————————————————————————————————
// $name = 'acf-video2click';
// $path = '/customer/acf/render/video2click/styles.css';
// wp_enqueue_style(
// 	$handlePrefix .'-'. $name , // handle
// 	get_template_directory_uri() . $path, // URL
// 	array(), 	// handle names of dependant stylesheets
// 	'1.0',    	// version number
// 	'all' 		// Media type
// );


function easyyoutubeGetVideoHtml($youtubeVideoId = '', $youtubePosterImg = '') {

	// ———————————————————————————————————————————————————————————————————
	// Check params
	// ———————————————————————————————————————————————————————————————————
	if (empty($youtubeVideoId)) {

		$message = 'ACF - Video2Click: Youtube Video ID is missing';
		if (1) {
			$html = PHP_EOL .'<p>'. $message .'</p>'. PHP_EOL;
		} else {
			$html = PHP_EOL .'<!-- '. $message .' -->'. PHP_EOL;
		}
		return $html;

	}

	if (empty($youtubePosterImg)) {
			$youtubePosterImg = '/wp-content/themes/easytheme_bos/customer/acf/render/video2click/assets/img/placeholder.png';
	}

	// ———————————————————————————————————————————————————————————————————
	// DSGVO
	// ———————————————————————————————————————————————————————————————————
	// SEARCH : https://www.youtube.com
	// REPLACE: https://www.youtube-nocookie.com
	// ———————————————————————————————————————————————————————————————————
	// https://www.blogmojo.de/youtube-videos-datenschutzkonform-einbetten/#1_einbetten_mit_erweitertem_datenschutzmodus
	// ———————————————————————————————————————————————————————————————————
	// Es werden immer noch diverse Verbindungen zu Google-Servern hergestellt
	// (inkl. eines Cookies, das allerdings nur sehr wenige Informationen enthält),
	// bevor der Nutzer überhaupt auf das Video geklickt hat:
	// - Es werden weniger Nutzerdaten an YouTube gesendet
	// - Es werden keine Nutzerdaten an den Werbedienst DoubleClick gesendet
	// ———————————————————————————————————————————————————————————————————


	// ———————————————————————————————————————————————————————————————————
	// Create Youtube URL
	// ———————————————————————————————————————————————————————————————————
	// Youtube URL should look like $this
	// https://www.youtube.com/embed/y5Hk7DR_qp8
	// or even better
	// https://www.youtube-nocookie.com/embed/y5Hk7DR_qp8
	// ———————————————————————————————————————————————————————————————————
	$youtubeUrl = 'https://www.youtube-nocookie.com/embed/'. $youtubeVideoId.'';

	$html = '
<!-- easyyoutube via ACF -->
<div class="easyyoutubeIframeContainer addRoundedCorners addBorder">

	<!-- Hier wird spaeter das YT Video angezeigt -->
	<iframe  src="" data-src="'. $youtubeUrl .'" frameborder="0" allowfullscreen></iframe>

	<!-- Der Hinweistext vor dem Anzeigen des YT Videos -->
	<div style="background-image: url('. $youtubePosterImg .');" class="easyyoutubeOverlay">
		'. easyyoutubeGetSmallprintHtml() .'
	</div>

</div>
<!-- /easyyoutube via ACF -->

';

	// ———————————————————————————————————————————————————————————————————
	// Retval
	// ———————————————————————————————————————————————————————————————————
	return $html;
}



function easyyoutubeGetSmallprintHtml() {

	$html = '

<!-- easyyoutubeSmallprint -->

<div style="display:table; padding:20px;" class="easyyoutubeSmallprintContainer">
	<div style="display:table-cell; vertical-align:middle;">


		<div style="display:table; background-color: rgba(255, 255, 255, 0.5); padding:20px;" class="easyyoutubeContent easyyoutubeSmallfont">

			<div style="display:table-cell; vertical-align:top; width:40%;">
				<p class="easyyoutubeSmallprintHeadline easyyoutubeTextshadow">Datenschutzhinweis für Youtube-Videos</p>
				<p class="easyyoutubeSmallprintCopy easyyoutubeTextshadow">Beim Abspielen wird eine Verbindung zu den Servern von Youtube hergestellt. Dabei wird Youtube mitgeteilt, welche Seiten Sie besuchen.</p>
			</div>

			<div style="display:table-cell; vertical-align:middle; width:20%; text-align:center;">
				<!-- Via addEventListener -->
				<img class="easyyoutubePlayVideoButton" style="cursor:pointer;" src="'. EASYTEMPLATEURI .'/customer/acf/render/easyyoutube/assets/img/media48x48.png" alt="Video abspielen">
			</div>

			<div style="display:table-cell; vertical-align:top; width:40%;">
				<p class="easyyoutubeSmallprintHeadline easyyoutubeTextshadow">Weitere Informationen</p>
				<p class="easyyoutubeSmallprintCopy easyyoutubeTextshadow">Weitere Informationen haben wir in unserer <a href="/datenschutz/" target="_blank">Datenschutzerklärung</a> für Sie zusammengestellt.</p>
			</div>
		</div>

	</div>
</div>

<!-- /easyyoutubeSmallprint -->

';

	// ———————————————————————————————————————————————————————————————————
	// Retval
	// ———————————————————————————————————————————————————————————————————
	return $html;
}
