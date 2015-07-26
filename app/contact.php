<?php

require_once 'includes/htmlpurifier/HTMLPurifier.auto.php';
require_once 'includes/mandrill/Mandrill.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	header("Location: /");
	die();
}

$config = HTMLPurifier_Config::createDefault();
$purifier = new HTMLPurifier($config);

try {
	if (isset($_POST['name']))
		$name = $purifier->purify($_POST['name']);
	else {
		throw new Exception('Invalid name value.');
	}

	if (isset($_POST['email']))
		$email = $purifier->purify($_POST['email']);
	else {
		throw new Exception('Invalid email value.');
	}

	if (isset($_POST['phone']))
		$phone = $purifier->purify($_POST['phone']);
	else {
		throw new Exception('Invalid phone number value.');
	}

	if (isset($_POST['project']))
		$project = $purifier->purify($_POST['project']);
	else {
		throw new Exception('Invalid project type value.');
	}

	if (isset($_POST['ideas']))
		$ideas = $purifier->purify($_POST['ideas']);
	else {
		throw new Exception('Invalid ideas value.');
	}

	$mandrill = new Mandrill('jiPgrAPfVDlqQFv_bPRx-g');

	$html = <<<HTML
<h1>Visitor Message</h1>
<h2>Name</h2><p>$name</p>
<h2>Email</h2><p>$email</p>
<h2>Contact Number</h2><p>$phone</p>
<h2>Type of Project</h2><p>$project</p>
<h2>Ideas</h2><p>$ideas</p>
HTML;

	$message = [
		'html' => $html,
		'subject' => 'Visitor Message from Website',
		'from_email' => 'web@vakansivisual.com',
		'from_name' => 'Vakansi Visual Website',
		'to' => [[
			'email' => 'hello@vakansivisual.com'
		]]
	];

	$mandrill->messages->send($message);

	header("Location: /#contact?sent");
	die();
} catch(Mandrill_Error $e) {
	$log = 'mandrill_log.txt';

	$temp = file_get_contents($log);
	file_put_contents($log, $temp . 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage() . '\n');
	throw $e;
} catch (Exception $e) {
	$email = '&#104;&#101;&#108;&#108;&#111;&#064;&#118;&#097;&#107;&#097;&#110;&#115;&#105;&#118;&#105;&#115;&#117;&#097;&#108;&#046;&#099;&#111;&#109;';

	echo "<h2>There is something wrong with your message. Please try again or contact us through <a href=\"$email\">$email</a></p>";
}
