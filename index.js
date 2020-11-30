const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg.author.username, " says ", msg.content);
    if (msg.content === 'bonjour') {
        msg.reply('Salut ' + msg.author.username);
    }
});
console.log("Starting the bot using the token : ", process.env.token)
if(process.env.token === undefined)
{
    console.error("No token found. make sure you set the 'token' env value");
}

else
{
    client.login(process.env.token);
}