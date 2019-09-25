let userText = document.querySelector("#inp");
let dz = document.querySelector("#chatlog");
let botDisplay = document.querySelector("#botAsk");

window.onload = ()=>{
	userText.focus();
	bot.start();
}

userText.addEventListener("keypress", (e)=>{
	if ((e.which === 13 || e.keyCode === 13) && userText.value.length !== 0) {
		dz.innerHTML = userText.value;
		// dz.innerHTML += `<div class="chat chat-hu">${userText.value}</div>`;
		bot.listen(userText.value);
		userText.value = "";
		userText.focus();
	}
});

let bot = {
	name: "Eurus",
	user: null,
	asked: "",
	greetings: {
		intros: [
			`Hi {{user}}, my name is {{name}}, I am your assistant, and I am here to help you with your Eurus transaction`,
			`Hello {{user}} my name is {{name}}, your companion at Eurus wallet`,
			`Welcome {{user}}, it is another day with Eurus wallet`,
			`Hello {{user}} how can I be of help to you`
		],
		knowUser: [
			`Hello this is {{name}}. what is your name`,
			`Hello, I am {{name}}, what is your name.`,
			`Hello, my name is {{name}}, how about you.`,
			`Hi, I am {{name}}, whats the name?`
		],
	},
	talk:[
		['Hello', 'Hi', 'Hey'],
		['how are you', 'what is going on'],
		['how was your day'],
		['how old are you'],
		['who are you', 'what are you', 'are you bot', 'are you human or bot'],
		['who created you', 'who made you'],
		['what are you doing', 'what are you up to'],
		['your name please', 'your name', 'may i know your name', "what is your name"],
		['I love you', 'love you'],
		['I am happy', 'I am good', 'i\'m happy'],
		['bad', 'i am bored', 'i am tired'],
		['help me', 'tell me story', 'tell me a joke', 'help'],
		['ah', 'yes', 'ok', 'okay'],
		['Thank you', 'Thanks'],
		['bye', 'good bye', 'goodbye', 'see you later']
	],
	reply:[
		['Hello {{user}}', 'Hi {{user}}', 'Hey'],
		['Fine', 'Pretty well', 'Fantastic', 'I\'m fine {{user}}, thank you', 'I feel great today, thanks for asking {{user}}'],
		['working as an assistant, my day couldn\'t be much better', 'my day was wonderfull as I\'d set out to help many people having issues with their Eurus wallet' ],
		['well I was made on 2019'],
		['I am just a bot', 'I am your assistant'],
		['I was created by the Eurus team', 'I was made by the Eurus team'],
		['Nothing much', 'I am here to help you', 'am not ready to go to sleep', 'Am still checking, not sure yet'],
		[`I am {{name}}`, `my name is {{name}}`],
		['Well I didn\'t think of that as I don\'t have emotions', 'that is nice of you {{user}}'],
		['Have you ever felt bad', 'I am glad to here that', 'That is nice to here'],
		['Why? What happened', 'that\'s no good {{user}}', 'Try watching TV'],
		['I will in my own little way', 'about what actually?'],
		['Okay {{user}}', 'Tell me about yourself {{user}}', 'ah'],
		['You are wellcome', 'You\'re welcome {{user}}'],
		['Bye', 'goodbye {{user}}', 'It\' nice to know that I have been of help', 'see you later {{user}}']
	],
	brain: {
		// this.say("let's talk")
		compare: function(said, talk=bot.talk, response=bot.reply){
			let _say = ""
			let words = []
			for (var i = 0; i < talk.length; i++) {
				for (var g = 0; g < talk[i].length; g++) {
					if(said.toLowerCase() === talk[i][g].toLowerCase() ||said.toLowerCase().includes(talk[i][g].toLowerCase())){
						words = response[i]
						_say = words[Math.floor(Math.random()*words.length)]
						console.log(words)
						// "I may not understand what you mean because I am just a roboy"
					}
				}
			}
			console.log(_say)
			if (_say.length === 0) {
				_say = "I may not understand what you mean because I am just a robot. I can help you search for things if say \"what is HNG\" or \"How to code\" ";
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
		if (e.toLowerCase().startsWith("what is") || e.toLowerCase().startsWith("how to")) {
			e=e.replace("what is ", '')
			.replace("how to ", '')
			this.brain.open(e)
			this.say("Let's check the web");
			return;
		}
		this.say(this.brain.compare(userText.value));
	},
	start: function(e){
		if (this.user === null) {
			this.user = prompt(this.replacer(this.greetings.knowUser[Math.floor(Math.random()*this.greetings.knowUser.length)])) || "Boss";
			this.say(this.replacer(this.greetings.intros[Math.floor(Math.random()*this.greetings.intros.length)]));
		}else{
			this.greet();
		}
	},
	say: function(e){
		e = this.replacer(e);
		// e = `<div class="chat chat-bot">${e}</div>`;
		botDisplay.innerHTML = e;
		this.mouth(e)
	},
	greet: function(){
		let num = Math.random();
		console.log(Math.floor(num*this.greetings.intros.length));
		this.say(this.greetings.intros[Math.floor(num*this.greetings.intros.length)]);
		// this.brain();
	},
	introduce: function(){
		let num = Math.random();
		console.log(this.greetings.knowUser[Math.floor(num*this.greetings.knowUser.length)]);
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
	}
}