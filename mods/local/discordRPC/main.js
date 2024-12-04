var lastCookiesPerSecond = 0;
var date = Date.now();
var smallImage;

async function setActivity() {
	if(Game.hasBuff('Frenzy')) {
		smallImage = 'frenzy';
	} else {
		smallImage = undefined;
	}
  window.api.send('discord', {
    details: Beautify(Game.cookiesPs)+' Cookies per Second',
    state: Beautify(Game.cookiesEarned) + ' Cookies earned',
    startTimestamp: date,
	smallImageKey: smallImage,
    largeImageKey: 'icon',
    largeImageText: 'Using Kesefon\'s rich presence',
  });
}

Game.registerMod("discordRPC",{
	init:function(){
        setInterval(() => {
            setActivity();
        }, 15e3);
	},
	save:function(){},
	load:function(str){},
});
