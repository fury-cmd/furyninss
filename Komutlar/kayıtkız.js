const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === "emojiismi");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', 'Botunuzun襤smi Bot Komut | ????')) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmay覺 Unuttun!**");
  user.addRole('664506733108133888')
  user.removeRole('664506633702998032')
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user}, **Kayd覺n覺z Ba??ar覺yla Ger癟ekle??ti! 襤yi E??lenceler.**`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(ky)
        message.react(dogrulandi)
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'k覺z',
    description: 'k覺z',
    usage: 'k覺z'
}