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
			`Hi I am {{name}}, I am your companion and am here to help you`,
			`Hi I am {{name}}, your companion and am here to help you`,
			`Welcome`
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
		['how old are you'],
		['who are you', 'are you bot', 'are you human or bot'],
		['who created you', 'who made you'],
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
		['Nothing much', 'I am here to help you', 'am not ready to go to sleep', 'Am still checking, not sure yet'],
		['well I was made on 2019'],
		['I am just a bot', 'I am your assitant'],
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
				_say = "I may not understand what you mean because I am just a robot. I can help you search for things if say e.g \"what is HNG\" or \"How to code\" ";
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
			this.user = prompt(this.replacer(this.greetings.knowUser[Math.floor(Math.random()*this.greetings.knowUser.length)]));
			this.say(`Hello ${this.user} how can I be of help to you`);
		}else{
			this.greet();
		}
	},
	say: function(e){
		e = this.replacer(e);
		// e = `<div class="chat chat-bot">${e}</div>`;
		botDisplay.innerHTML = e;
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
	}
}



/*(function(words){
	let links = [];
	words = words.split(" ");
	words.forEach((e)=>{
		if (e.startsWith("www.") || e.startsWith("http:\/\/") || e.startsWith("https:\/\/")) {
			links.push(e)
		}
	})
	for(let i=0; i<links.length; i++){
		// rmvSym(links[i].toString())
		// links.push()
		console.log(links[i])
	}
	console.log(links)
})("https://stackoverflow.com,")

function rmvSym(e){
	if (/[^\w]/g.test(e.charAt(e.length-1))) {
		e = e.split('')
		e.pop()
		console.log(e)
		e=e.join('')
		console.log(e)
		rmvSym(e);
	}else{
		console.log(e)
		return e;
	}
}*/