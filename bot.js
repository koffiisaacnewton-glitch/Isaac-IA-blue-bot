const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  console.log('--- QR CODE ISAAC BOT ---');
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Isaac-IA-bot bleu connecté ! 🔵');
});

client.on('message', async msg => {
  if(msg.body.toLowerCase() === 'ping'){
    msg.reply('pong 🔵 Isaac-IA-bot bleu actif !');
  }
  if(msg.body.toLowerCase() === 'isaac'){
    msg.reply('Oui boss ? 🔵 Je suis ton bot bleu !');
  }
});

client.initialize();
