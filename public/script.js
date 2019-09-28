
/*Script added by @daaef*/

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
  console.log('updating scrollbar')
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
	sendText()
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    sendText()
    return false;
  }
})

/*Script added by @daaef*/

let userText = document.querySelector(".message-input.one");
let prompInp = document.querySelector(".message-input.two");

window.onload = ()=>{
	userText.focus();
	bot.start();
}

userText.addEventListener("keypress", (e)=>{
	if ((e.which === 13 || e.keyCode === 13) && userText.value.length !== 0) {
		sendText();
	}
});

function sendText(){
	if (userText.value.length<1 && prompInp.value.length>1) {
		/*Script modified by @daaef*/
		msg = $('.message-input.two').val();
		$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		$('.message-input').val(null);
		updateScrollbar();
		setTimeout(function() {
			bot.setUser(msg);
			bot.start();
		}, 1000 + (Math.random() * 20) * 100);
		/*Script modified by @daaef*/
		console.log(msg);
		prompInp.value = '';
		toggleInp();
		userText.focus();
		return;
	} else if(prompInp.value.length<1 && userText.value.length>1){
		
		/*Script modified by @daaef*/
		msg = $('.message-input.one').val();
		$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
		updateScrollbar();
		setDate();
		
		/*Script modified by @daaef*/
	}
	bot.listen(userText.value);
	console.log(userText.value)
	userText.value = "";
	updateScrollbar();
	userText.focus();
}

function toggleInp(){
	(prompInp.style.display == "none")?prompInp.style.display = "block": prompInp.style.display = "none";
	(userText.style.display == "none")?userText.style.display = "block": userText.style.display = "none";
}

prompInp.addEventListener("keypress", (e)=>{
	if ((e.which === 13 || e.keyCode === 13) && prompInp.value.length !== 0) {
		bot.setUser(prompInp.value);
		bot.start();
		console.log(prompInp.value);
		prompInp.value = '';
		toggleInp();
	}
});
function askName(n){
	toggleInp();
	prompInp.focus();
	// botDisplay.innerHTML = n;
	bot.say(n);
}

let bot = {
	name: "Eurus",
	user: null,
	asked: "",
	greetings: {
		intros: [
			`Hi {{user}}, my name is {{name}}, I am your assistant, and I am here to help you with questions you might have`,
			`Hello {{user}} my name is {{name}}, your companion at Eurus`,
			`Welcome {{user}}, it is another day with Eurus wallet`,
			`Hello {{user}} how can I be of help to you`,
			'Welcome {{user}} how may I help you today'
		],
		knowUser: [
			`Hello this is {{name}}. what is your name <i>(just your first name) </i>`,
			`Hello, I am {{name}}, what is your name <i>(just your first name) </i>.`,
			`Hello, my name is {{name}}, how about you <i>(just your first name) </i>.`,
			`Hi, I am {{name}}, whats the name? <i>(just your first name) </i>`,
			'Welcome to Eurus, what is your name? <i>(just your first name) </i>'
		],
	},
	talk:[
		['Hello', 'Hi', 'Hey'],
		['how are you', 'what is going on'],
		['how was your day', 'how has your day been'],
		['how old are you'],
		['who are you', 'what are you', 'are you a bot', 'are you human or bot'],
		['who created you', 'who made you'],
		['what are you doing', 'what are you up to'],
		['your name please', 'your name', 'may i know your name', "what is your name"],
		['I love you', 'love you'],
		['I am happy', 'I am good', 'i\'m happy'],
		['bad', 'i am bored', 'i am tired'],
		['help me', 'tell me story', 'tell me a joke', 'help'],
		['ah', 'yes', 'ok', 'okay'],
		['Thank you', 'Thanks'],
		['bye', 'good bye', 'goodbye', 'see you later', 'see you soon'],
		['finance','how to track finance', 'how to track my finance', 'how to track finances', 'how to track my finances'],
		['current conversion rate', 'conversion rate', 'currency conversion'],
		['receive money', 'transfer money']
	],
	reply:[
		['Hello {{user}}', 'Hi {{user}}', 'Hey'],
		['Fine', 'Pretty well', 'Fantastic', 'I\'m fine {{user}}, thank you', 'I feel great today, thanks for asking {{user}}'],
		['working as an assistant, my day couldn\'t be much better', 'my day was wonderfull as I\'d set out to help many people having issues with their Eurus wallet' ],
		['well I was made in 2019'],
		['I am just a bot', 'I am your assistant'],
		['I was created by the Eurus team', 'I was made by the Eurus team'],
		['Nothing much', 'I am here to help you', 'am not ready to go to sleep', 'Am still checking, not sure yet'],
		[`I am {{name}}`, `my name is {{name}}`],
		['Well I didn\'t think of that as I don\'t have emotions', 'that is nice of you {{user}}'],
		['Have you ever felt bad', 'I am glad to hear that', 'That is nice to hear'],
		['Why? What happened', 'that\'s no good {{user}}', 'Try watching TV'],
		['I will in my own little way', 'about what actually?'],
		['Okay {{user}}', 'Tell me about yourself {{user}}', 'ah'],
		['You are wellcome', 'You\'re welcome {{user}}'],
		['Bye', 'goodbye {{user}}', 'It\' nice to know that I have been of help', 'see you later {{user}}'],
		['I have just the best app for you <b>Eurus Wallet</b>', 'I could recommend <b>Eurus Wallet<b> for your finances'],
		['the current rate is $1 = ₦360'],
		['use the Flutterwave Barter App, you can do so much with it']
	],
	brain: {
		compare: function(said, talk=bot.talk, response=bot.reply){
			let _say = ""
			let words = []
			for (var i = 0; i < talk.length; i++) {
				for (var g = 0; g < talk[i].length; g++) {
					if(said.toLowerCase() === talk[i][g].toLowerCase() ||said.toLowerCase().includes(talk[i][g].toLowerCase())){
						words = response[i]
						_say = words[Math.floor(Math.random()*words.length)]
						console.log(words)
					}
				}
			}
			if (_say.length === 0) {
				// _say = "I may not understand what you mean because I am just a robot. I can help you search for things if yiu say \"what is HNG\" or \"How to code\" ";
				_say = null;
			}
			return _say;
		},
		open: function(e){
			window.open("https://www.google.com/search?q="+encodeURIComponent(e));
		}
	},
	listen: function(e){
		if (e.toLowerCase() == 'what is your name') {
			this.say(this.brain.compare(e));
			return;
		}
		if ((e.toLowerCase().startsWith("what is") || e.toLowerCase().startsWith("how to")) && this.brain.compare(e) == null) {
			e=e.replace("what is ", '')
			.replace("how to ", '')
			this.brain.open(e)
			this.say("Let's check the web");
			return;
		}
		if (this.brain.compare(e) != null) {
			this.say(this.brain.compare(e));
			return;
		}else{
			this.say("I'm really trying here but you don't seem to understand the fact that I am just a robot. Really though, I can help you search for things if you say \"what is HNG\" or \"How to code\" ");
		}
	},
	start: function(e){
		if (this.user === null) {
			askName(this.replacer(this.greetings.knowUser[Math.floor(Math.random()*this.greetings.knowUser.length)]));
		}else{
			this.greet();
		}
	},
	say: function(e){
		e = this.replacer(e);
		this.mouth(e);
		
		/*Script modified by @daaef*/
		  $('<div class="message loading new"><figure class="avatar"><img src="apegg3.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
		  updateScrollbar();
		
		  setTimeout(function() {
			$('.message.loading').remove();
			$('<div class="message new">' +
				'<figure class="avatar">' +
				'<img src="apegg3.png" />' +
				'</figure>' + e + '</div>').appendTo($('.mCSB_container')).addClass('new');
			setDate();
			updateScrollbar();
			i++;
		  }, 1000 + (Math.random() * 20) * 100);
		  
		/*Script modified by @daaef*/
		
	},
	greet: function(){
		let num = Math.random();
		// console.log(Math.floor(num*this.greetings.intros.length));
		this.say(this.greetings.intros[Math.floor(num*this.greetings.intros.length)]);
	},
	introduce: function(){
		let num = Math.random();
		// console.log(this.greetings.knowUser[Math.floor(num*this.greetings.knowUser.length)]);
		this.say(this.greetings.knowUser[Math.floor(num*this.greetings.knowUser.length)]);
	},
	replacer: function(e){
		return (e
			.replace("{{name}}", this.name)
			.replace("{{user}}", this.user)
		)
	},
	mouth: function(word){
		let speechAbility = new SpeechSynthesisUtterance();
		speechAbility.text = word;
		speechAbility.rate = .7;
		speechAbility.voice = speechSynthesis.getVoices()[0];
		return speechSynthesis.speak(speechAbility);
	},
	setUser: function(e){
		if (e.toLowerCase().includes('my name is') || e.toLowerCase().includes('i am')) {
			e = e.replace('My name is', '').replace('I am', '').replace('my name is', '').replace('i am', '');
		}
		if(e.includes(' ')) {
			e=e.replace(/\s/g, '');
		}

		if (e.length < 3) {
			this.start()
		} else {
			this.user = e;
		}
	}
}

