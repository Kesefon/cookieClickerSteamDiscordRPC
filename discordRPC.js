const DiscordRPC = require('discord-rpc');
const clientId = '885903500830183475';
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
rpc.login({ clientId }).catch(console.error);

module.exports.setActivity = (e,args) => {

    rpc.setActivity(args);
};
