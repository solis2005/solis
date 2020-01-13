const Discord = require('Discord.js');
const client = new Discord.Client();
var prefix = "€";

client.login("NjA2NDE3NDQ2NDI0ODA1Mzc2.XaoZbA.mh7zizZfIgML5X-ysYyR-91eCHM");

client.on('message', Message =>{
   if(Message.content === "J'vais t'enculer !"){
   if(Message.content === "je vais t'enculer !")
   if(Message.content === "jtencule")
   if(Message.content === "je vais t'enculer")
   if(Message.content === "je t'encule")
     Message.channels.send("ah ? tu est donc gay,  member.user  ?");
     console.log('repond à gay')
   }
});

client.on('guildMemberAdd', member =>{
     member.guild.channels.get('<#634501940469956608>').send('**comme on se retrouve...c est ironique, non ?**' + member.user + ':wink:' + member.guild.member.Count);
     console.log('+1')
})

client.on('guildMemberRemove', member=>{
  member.guild.channels.get('<#634501940469956608>').send('**on se reverra...**' + member.user + member.guild.member.Count);
  console.log('-1')
})

/*kick*/
client.on('message' ,Message =>{
if (!Message.guild) return
let args = message.content.trim().split(/ +/g)

if (args[0].toLocaleLowerCase() === prefix + 'kick'){
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande;(")
     let member = message.mentions.member.first()
     if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
     if (member.highestRole.calculatedPosition >= message.member.higntestRole.calculatedPostition && message.author.id !== message.guild.owner.id) return message.channel.send ("vous ne pouvez pas kick cet utilisateur")
     if (!member.kickable) return message.channel.send("je ne peux pas exclure cet utilisateur :end:")
     member.kick()
     message.channel.send(member.user.username + 'a été exclu :white_check_mark:')
     }
})

/*ban*/
lient.on('message' ,Message =>{
    if (!Message.guild) return
    let args = message.content.trim().split(/ +/g)
    
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
          if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande;(")
         let member = message.mentions.member.first()
         if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
         if (member.highestRole.calculatedPosition >= message.member.higntestRole.calculatedPostition && message.author.id !== message.guild.owner.id) return message.channel.send ("vous ne pouvez pas kick cet utilisateur")
         if (!member.bannissable) return message.channel.send("je ne peux pas bannir cet utilisateur :end:")
         member.ban()
         message.channel.send(member.user.username + 'a été banni :white_check_mark:')
         }
    })