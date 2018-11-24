const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();

var prefix = "1";
var prefix2 = "2";
var prefix3 = "3";
var prefix4 = "4";
var prefix5 = "5";
var prefix6 = "6";
var prefix7 = "7";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
  client.user.setGame(`SPAM ? (1)`,"http://twitch.tv/Dream")

});

client.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + 'say')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


 client2.on('ready', () => {
  console.log(`Logged in as ${client2.user.tag}!`);  
  client2.user.setGame(`SPAM ? (2)`,"http://twitch.tv/Dream")

});


client2.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix2)) return;

  let command2 = message.content.split(" ")[0];
  command2 = command2.slice(prefix2.length);

  let args = message.content.split(" ").slice(1);

  if (command2 == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 client3.on('ready', () => {
  console.log(`Logged in as ${client3.user.tag}!`);  
  client3.user.setGame(`SPAM ? (3)`,"http://twitch.tv/Dream")

});

client3.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix3)) return;

  let command3 = message.content.split(" ")[0];
  command3 = command3.slice(prefix3.length);

  let args = message.content.split(" ").slice(1);

  if (command3 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




 client4.on('ready', () => {
  console.log(`Logged in as ${client4.user.tag}!`);  
  client4.user.setGame(`SPAM ? (4)`,"http://twitch.tv/Dream")

});

client4.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client4.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix4)) return;

  let command4 = message.content.split(" ")[0];
  command4 = command4.slice(prefix4.length);

  let args = message.content.split(" ").slice(1);

  if (command4 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




 client5.on('ready', () => {
  console.log(`Logged in as ${client5.user.tag}!`);  
  client5.user.setGame(`SPAM ? (5)`,"http://twitch.tv/Dream")

});

client5.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client5.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix5)) return;

  let command5 = message.content.split(" ")[0];
  command5 = command5.slice(prefix5.length);

  let args = message.content.split(" ").slice(1);

  if (command5 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });











 client6.on('ready', () => {
  console.log(`Logged in as ${client6.user.tag}!`);  
  client6.user.setGame(`SPAM ? (6)`,"http://twitch.tv/Dream")

});

client6.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client6.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix6)) return;

  let command6 = message.content.split(" ")[0];
  command6 = command6.slice(prefix6.length);

  let args = message.content.split(" ").slice(1);

  if (command6 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 



 client7.on('ready', () => {
  console.log(`Logged in as ${client7.user.tag}!`);  
  client7.user.setGame(`SPAM ? (7)`,"http://twitch.tv/Dream")

});

client7.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client7.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix7)) return;

  let command7 = message.content.split(" ")[0];
  command7 = command7.slice(prefix7.length);

  let args = message.content.split(" ").slice(1);

  if (command7 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




client.login("NTEyMzE5MDIxNTIyMDkyMDMz.Ds3uGA.-lQ6vWi5WZ64j8DQWvKvl3YOhUo");
client2.login("NTEyMzE5ODI3OTQ4MzM5MjEw.Ds3uqQ.qhzbe1wevn310-LwX28DXWvFiIU");
client3.login("NDg4NDQ2NDk5MTEwMzg3NzEz.Ds3tig.ncRjbLON45f64SgiTgVl3iYa3WY");
client4.login("NTEyMzIwOTgxMDY3NjI4NTY1.Ds3v6Q.fvKqnSUxyRU6Lqr5GX0Oz9TRjZk");
client5.login("NTEyMzIyMDgyNTI5NjA3Njgw.Ds3w3g.nCZr0bdokETElScrXvNuyCvjUp4");
client6.login("NTEyMzIyNzE1NDIwNDU5MDA4.Ds3xkw.6iW8x-iOhvf1KGjLRi-BgCPoKdQ");
client7.login("NTEyMzIzODUzNTk1MzEyMTQ4.Ds3yZg.LsZE-M0fxlU_q09CJ_8yokhdRcQ");
