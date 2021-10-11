var lastCookiesPerSecond = 0;
var date = Date.now();

async function setActivity() {
  window.api.send('discord', {
    details: Beautify(lastCookiesPerSecond)+' Cookies per Second',
    state: Beautify(Game.cookiesEarned) + ' Cookies earned',
    startTimestamp: date,
    largeImageKey: 'icon',
    largeImageText: 'Using Kesefon\'s rich presence',
  });
}

Game.registerMod("discordRPC",{
	init:function(){
        Game.registerHook('cps', (value) => {
            lastCookiesPerSecond = value;
            return value;
        })
        setActivity();

        // activity can only be set every 15 seconds
        setInterval(() => {
            setActivity();
        }, 15e3);
	},
	save:function(){},
	load:function(str){},
});
