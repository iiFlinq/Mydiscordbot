const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA3MjY4NjM2OTIxOTU0Mzg0.XrGWUw.Q3alttPqqkdErrKePs3j9FC6rCA';

const PREFIX = '!';

var verison = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!')
})  

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!')
            break;
        case 'youtube':
            message.channel.send('youtube.com/iiFlinq')
            break;
        case 'info':
            if(args[1] = 'verison'){
                message.channel.send('Verison ' + verison);
            }else{
                message.channel.send('Invalid Args')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username, true)
            .addField('Verison', verison, true)
            .addField('Current Server', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail(message.author.displayAvatarURL());
            message.channel.send(embed);
        break;


    }
})

bot.login(token);