const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const writeToFile = ((content, filePath)  => {
fs.writeFile(filePath, content, { flag: 'a' }, function (err) {
    if (err) throw err;
    console.log("It's saved!");
});
});

client.on('message', msg => {
    console.log(msg.author.username, " says ", msg.content);

    writeToFile(msg.author.username + " says " +msg.content, "/tmp/discord_history.txt")

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
