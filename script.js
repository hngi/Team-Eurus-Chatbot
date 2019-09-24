let userText = document.querySelector("#inp");
let dz = document.querySelector("#dz");

window.onload = ()=>{
	// dz.innerHTML = userText.value;
	/*dz.innerHTML = */bot.greet();
	userText.focus();
}

userText.addEventListener("change", (e)=>{
	if (userText.value.length !== 0) {
		dz.innerHTML += `<div class="chat chat-hu">${userText.value}</div>`;
		bot.listen(userText.value);
	}
});

let bot = {
	name: "Eurus",
	user: null,
	asked: "",
	listen: function(e){
		console.log(e);
		this.brain(e)
	},
	brain: function(e){
		this.introduce();
	},
	say: function(e){
		e = `<div class="chat chat-bot">${e}</div>`;
		dz.innerHTML += e;	
	},
	greet: function(){
		let num = Math.random();
		console.log(Math.floor(num*this.greetings.intros.length));
		this.say(this.replacer(this.greetings.intros[Math.floor(num*this.greetings.intros.length)]));
	},
	introduce: function(){
		let num = Math.random();
		console.log(this.replacer(this.greetings.knowUser[Math.floor(num*this.greetings.knowUser.length)]));
		this.say(this.replacer(this.greetings.knowUser[Math.floor(num*this.greetings.knowUser.length)]));
	},
	greetings: {
		intros: [
			`Hi I am {{name}}, I am your companion and am here to help you`,
			`Hi I am {{name}}, your companion and am here to help you`
		],
		knowUser: [
			`Hello this is {{name}}. what is your name`,
			`Hello, I am {{name}}, what is your name.`
		]
	},
	replacer: function(e){
		return (e
			.replace("{{name}}", this.name)
			// .replace("{{name}}", this.name)
		)
	}
}



// (function(words){
// 	// let words = [];
// 	let links = [];
// 	words = words.split(" ");
// 	words.forEach((e)=>{
// 		if (e.startsWith("www.") || e.startsWith("http:\/\/") || e.startsWith("https:\/\/")) {
// 			links.push(e)
// 		}
// 	})
// 	console.log(links)
// })("https://stackoverflow.com, ww.goog.com")

// (function(){

// })(" ,")