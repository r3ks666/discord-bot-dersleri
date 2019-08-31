const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

////////////////      10 Saniyede 1 Değişen Oynuyor              ////////////////////////

var Games = [
  "Coded By r3ks",
  "On Beta ",
  "Coding %40",
  "R3KSMOD | " + ayarlar.prefix + "yardım ",
  "R3KSMOD | " + ayarlar.prefix +"öner "
];
  setInterval(function() {
    var random = Math.floor(Math.random()*(Games.length));
    client.user.setActivity(Games[random]);
    client.user.setStatus("idle")
  }, 10000);
};