/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6289687537657', 'X-FAZ V2', true],
  ['62895324601397'], 
  ['62895623530099'],
  ['6289687537657']
] // Nomor Owner

global.mods = ['6289687537657'] 
global.prems = ['6289687537657', '62895623530099', '62895324601397']

// Harus di isi
global.btc = 'p5EPduET' // https://api.botcahx.live
global.lann = 'SesMXgVh' // https://api.betabotz.org

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'SesMXgVh'
}

// Sticker WM
global.nans = 'X-FAZ V2 BY PHMIFZ'
global.packname = 'X-FAZ V2┃ᴮᴼᵀ' 
global.author = '@phmifz' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/Basrenggood\n' 
global.dygp = 'https://chat.whatsapp.com/KBK0T3qepGn4F0wbJKlRca'
global.fgsc = 'https://github.com/Phmiuuu' 
global.fgyt = 'http://PhmiFz.me/'
global.fgpyp = 'https://i.ibb.co/R0L0SDW/20230730-212638.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})