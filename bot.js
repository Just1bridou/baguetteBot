const Discord = require("discord.js");
var rgbaToHex   = require('hex-and-rgba').rgbaToHex;

const Client = new Discord.Client();
// const token = "MzgxODM2NTA2NTkyOTY4NzA1.WhGq9Q.pXMbcLxG4I3t1EcQubKRM-_IsQs";
const token = "NjE4NTA0Njg3MTc1MzM1OTM4.XW6pYA.5q2MM0f3kkIQRxTyj5AkO3MFjfs";
/* https://discord.com/oauth2/authorize?client_id=565499644528820236&scope=bot&permissions=9999 */

var RGB = true

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const axios = require('axios');

Client.on("ready", () => {
	console.log("• Connected •");
});

Client.on('message', message => {
	
	const PAS = 30

if (message.content.startsWith('.rgb')){
	message.guild.roles.fetch("767106374101631027").then((role) => {

		var state = 0
		var r=255
		var g=0
		var b=0
			
		setInterval(() => {

			if(state == 0){
				g= plus(g);
				if(g == 255)
					state = 1;
			}
			if(state == 1){
				r= minus(r);
				if(r == 0)
					state = 2;
			}
			if(state == 2){
				b= plus(b);
				if(b == 255)
					state = 3;
			}
			if(state == 3){
				g= minus(g);
				if(g == 0)
					state = 4;
			}
			if(state == 4){
				r= plus(r);
				if(r == 255)
					state = 5;
			}
			if(state == 5){
				b= minus(b);
				if(b == 0)
					state = 0;
			}
			let hexColor = rgbaToHex(r, g, b, 1)
			hexColor = hexColor.substring(0, hexColor.length - 2);
		/*	console.log(hexColor)
			console.log(role.color)*/
		//	console.log(hexColor)
			
			role.setColor(hexColor)


			
			  
		},1202)
		//	message.channel.send('**Team Phillippe:**')
	/*	message.channel.send(role.name)
		message.channel.send(role.hexColor)
		role.setColor("#0000FF")
		message.channel.send(role.hexColor)*/

	/*	role.setName('les loulous')

		for(let m of role.members) {
			message.channel.send(m[1].user.username)
			//console.log(m[1].user.username)
		}*/

	})

	function plus(nb) {
		nb += PAS
		if(nb > 255) {
			nb = 255
		}
		return nb
	}

	function minus(nb) {
		nb -= PAS
		if(nb < 0) {
			nb = 0
		}
		return nb
	}
}
/*
if(message.content.startsWith('.flag')) {
	/*let mbs = message.guild.roles.fetch('415665311828803584').members.map(m=>m.user.tag);
	console.log(mbs)
	let */

/*	message.guild.roles.fetch("845317411069624391").then((role) => { 
	//	console.log(role.members)
		for(let m of role.members) {
			//console.log(m.user.username)
			console.log(m)
		}
	})
}

if(message.content.startsWith('.tacos')) {
	axios.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true/')
	.then(response => {
		//console.log(response.data.recipe);
		
		const languageTranslator = new LanguageTranslatorV3({
		  version: '2018-05-01',
		  authenticator: new IamAuthenticator({
			apikey: 'No8T3tCIM4qBEya_BtdCyBZPtH07MNZQzMfKG67oXTZ5',
		  }),
		  serviceUrl: 'https://api.eu-gb.language-translator.watson.cloud.ibm.com',
		});
		
		const translateParams = {
		  text: response.data.recipe,
		  modelId: 'en-fr',
		};
		
		languageTranslator.translate(translateParams)
		.then(translationResult => {
			//console.log(JSON.stringify(translationResult, null, 2));
			//console.log(translationResult.result.translations[0].translation)
			message.channel.send(translationResult.result.translations[0].translation)
		})
		.catch(err => {
			console.log('error:', err);
		});


	})
	.catch(error => {
		console.log(error);
	});
}
*/
});

Client.login(token)

