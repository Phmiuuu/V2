function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:NANS OFFC\nitem1.TEL;waid=6289687537657:62895324601397\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://Phmifz.me\nEMAIL;Email Owner:phmifz@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler