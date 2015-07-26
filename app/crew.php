<?php

require_once 'includes/data.php';

if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$person;

	$exists = false;

	foreach ($crews as $crew) {
		if ($id === $crew['image']) {
			$person = $crew;
			$exists = true;
		}
	}

	if ($exists) {
		$name = strtoupper($person['name']);

		$html = <<<HTML
<img src="images/crews/$person[image].jpg" alt="$person[name]">
<h3 class="modal-title">$name</h3>
<p>$person[description]</p>
<a class="close-reveal-modal" aria-label="Close">&#215;</a>
HTML;

		echo $html;
		die();
	} else {
		echo 'Invalid Request.';
		die();
	}
} else {
	echo 'Invalid Request.';
	die();
}
