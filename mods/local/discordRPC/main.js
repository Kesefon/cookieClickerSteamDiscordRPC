async function setActivity() {
  window.api.send('discord', {
    details: parseFloat(Game.cookies).toString()+' Cookies',
    state: parseFloat(Game.cookiesEarned).toString() + ' Cookies earned',
    largeImageKey: 'icon',
    largeImageText: 'Using Kesefon\'s rich presence',
  });
}

Game.registerMod("discordRPC",{
	init:function(){
        setActivity();

        // activity can only be set every 15 seconds
        setInterval(() => {
            setActivity();
        }, 15e3);
	},
	save:function(){},
	load:function(str){},
});
