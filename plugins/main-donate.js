
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *DANA*
• *Nomor :* 089687537657 

▢ *SUBSCRIBE*
• _Dengan subscribe dan tonton video saya, sudah cukup membantu berdonasi, Terima kasih_
`
let img = 'https://telegra.ph/file/8e206f3ac48cd39da0952.jpg
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
