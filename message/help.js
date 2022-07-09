const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}
exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `
✦══✿══╡${setting.botName}╞══✿══✦
${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
✦Library : *Baileys-MD*.
✦Prefix : ( ${prefix} )
✦Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
✦Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

✦Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
✦Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
✦Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
✦Balance : $${toCommas(getBalance(sender, balance))}
  
 Ada Bug? Ketik ${prefix}report Bug
 ${readmore}
┌──────────────
│▹ ${prefix}groupriku
│▹ ${prefix}menu
│▹ ${prefix}owner
│▹ ${prefix}donasi
│▹ ${prefix}speed
│▹ ${prefix}runtime
│▹ ${prefix}cekprem
│▹ ${prefix}listprem
│▹ ${prefix}jo <Text>
│▹ ${prefix}simi <Text>
│▹ ${prefix}delete
│─── ( ✏️ )  Converter/Tools
│▹ ${prefix}stiker <ReplyGambar/Caption>
│▹ ${prefix}toimg <ReplyStiker>
│▹ ${prefix}tovid <ReplyStiker>
│─── ( ⌛ )  Downloader
│▹ ${prefix}play <Querry>
│▹ ${prefix}tiktok <LinkTt>
│▹ ${prefix}tiktokaudio <LinkTt>
│▹ ${prefix}ytmp4 <LinkYt>
│▹ ${prefix}ytmp3 <LinkYt>
│▹ ${prefix}getvideo
│▹ ${prefix}getmusic
│▹ ${prefix}instagram <LinkIg>
│▹ ${prefix}facebook <LinkFb>
│─── ( ♻️ )  Random Menu
│▹ ${prefix}cecan
│▹ ${prefix}cogan
│▹ ${prefix}naruto
│▹ ${prefix}loli
│▹ ${prefix}waifu
│▹ ${prefix}husbu
│▹ ${prefix}yaoi
│─── ( 🔎 )  Search Menu
│▹ ${prefix}ytsearch <Pencarian>
│▹ ${prefix}pinterest <Querry>
│▹ ${prefix}jadwaltv <Querry>
│▹ ${prefix}brainly <Querry>
│▹ ${prefix}jadwaltv <Channel>
│▹ ${prefix}wiki <Querry>
│▹ ${prefix}pinterest <Querry>
│─── ( 🔈 )Edit Vokal
│▹ ${prefix}halah
│▹ ${prefix}hilih
│▹ ${prefix}huluh
│▹ ${prefix}heleh
│▹ ${prefix}holoh
│─── ( 🎮 )Fun Menu
│▹ ${prefix}tictactoe (non-aktif)
│▹ ${prefix}delttc
│▹ ${prefix}suit
│▹ ${prefix}slot
│▹ ${prefix}tebakgambar
│▹ ${prefix}kuis
│▹ ${prefix}tebakkimia
│▹ ${prefix}tekateki
│▹ ${prefix}tebakkata
│▹ ${prefix}apakah <Query>
│▹ ${prefix}kapankah <Query>
│▹ ${prefix}rate <Query>
│▹ ${prefix}gantecek <Nama>
│▹ ${prefix}cantikcek <Nama>
│▹ ${prefix}sangecek <Nama>
│▹ ${prefix}gaycek <Nama>
│▹ ${prefix}lesbicek <Nama>
│▹ ${prefix}gimana <Query>
│▹ ${prefix}bisakah <Query>
│▹ ${prefix}cekme
│▹ ${prefix}dadu
│▹ ${prefix}truth
│▹ ${prefix}dare
│▹ ${prefix}react <Emoji>
│───( ⚠️ ) Premium User
│▹ ${prefix}daftarprem
│▹ ${prefix}masuk <Link>
│▹ ${prefix}leave <Link>
│▹ ${prefix}cersex
│▹ ${prefix}asupan
│▹ ${prefix}xnxx
│▹ ${prefix}hentai
│▹ ${prefix}ahegao
│▹ ${prefix}masturbation
│▹ ${prefix}bloewjob
│▹ ${prefix}pussy
│▹ ${prefix}ass
│▹ ${prefix}bdsm
│───( 🛐 ) Islam Menu
│▹ ${prefix}listsurah
│▹ ${prefix}kisahnabi
│▹ ${prefix}jadwalsholat
│───( 🌐 ) Menu Lainnya
│▹ ${prefix}shortlink <Link>
│▹ ${prefix}kbbi <Kata>
│▹ ${prefix}faktaunik
│▹ ${prefix}ppcp
│▹ ${prefix}darkjokes
│▹ ${prefix}meme
│▹ ${prefix}covid19
│▹ ${prefix}say <Text>
│▹ ${prefix}readmore <Text>|<Text>
│▹ ${prefix}hitungmundur 12 10 2022
│▹ ${prefix}lirik <Judul>
│▹ ${prefix}grupwa <Pencarian>
│▹ ${prefix}getpp
│───( 🎨 ) TextPro
│▹ ${prefix}blackpink
│▹ ${prefix}greenneon
│▹ ${prefix}bokeh
│▹ ${prefix}advancedglow
│▹ ${prefix}futureneon
│▹ ${prefix}sandwriting
│▹ ${prefix}sandsummer
│▹ ${prefix}sandengraved
│▹ ${prefix}metaldark
│▹ ${prefix}neonlight
│▹ ${prefix}holographic
│▹ ${prefix}text1917
│▹ ${prefix}minion
│▹ ${prefix}deluxesilver
│▹ ${prefix}newyearcard
│▹ ${prefix}bloodfrosted
│▹ ${prefix}halloween
│▹ ${prefix}jokerlogo
│▹ ${prefix}fireworksparkle
│▹ ${prefix}natureleaves
│▹ ${prefix}toxic
│▹ ${prefix}strawberry
│▹ ${prefix}box3d
│▹ ${prefix}roadwarning
│▹ ${prefix}breakwall
│▹ ${prefix}icecold
│▹ ${prefix}luxury
│▹ ${prefix}cloud
│▹ ${prefix}summersand
│▹ ${prefix}horrorblood
│▹ ${prefix}thunder
│───( 📄 ) Random Text
│▹ ${prefix}pantun
│▹ ${prefix}quotes
│▹ ${prefix}gombalan
│▹ ${prefix}katagalau
│───( 🃏 ) Primbon Menu
│▹ ${prefix}nomorhoki
│▹ ${prefix}artimimpi
│▹ ${prefix}artinama
│▹ ${prefix}ramaljodoh
│▹ ${prefix}ramaljodohbali
│▹ ${prefix}suamiistri
│▹ ${prefix}ramalcinta
│▹ ${prefix}cocoknama
│▹ ${prefix}pasangan
│▹ ${prefix}jadiannikah
│▹ ${prefix}sifatusaha
│▹ ${prefix}rezeki
│▹ ${prefix}pekerjaan
│▹ ${prefix}nasib
│▹ ${prefix}penyakit
│▹ ${prefix}tarot
│▹ ${prefix}fengshui
│▹ ${prefix}haribaik
│▹ ${prefix}harisangar
│▹ ${prefix}harisial
│▹ ${prefix}nagahari
│▹ ${prefix}arahrezeki
│▹ ${prefix}peruntungan
│▹ ${prefix}weton
│▹ ${prefix}karakter
│▹ ${prefix}keberuntungan
│▹ ${prefix}memancing
│▹ ${prefix}masasubur
│▹ ${prefix}zodiak
│▹ ${prefix}shio
│───( 🏦 ) Payment & Bank
│▹ ${prefix}buylimit <Jumlah>
│▹ ${prefix}buyglimit <Jumlah>
│▹ ${prefix}transfer @tag <jumlah>
│▹ ${prefix}limit
│▹ ${prefix}balance
│▹ ${prefix}topbalance
│───( 👥 ) Group Menu*l
│▹ ${prefix}linkgrup
│▹ ${prefix}setppgrup
│▹ ${prefix}setnamegc
│▹ ${prefix}setdesc
│▹ ${prefix}group <Open/Close>
│▹ ${prefix}revoke
│▹ ${prefix}hidetag <Text>
│▹ ${prefix}tagall <Text>
│▹ ${prefix}promote
│▹ ${prefix}demote
│▹ ${prefix}kick <@tag>
│▹ ${prefix}add <@tag>  
│▹ ${prefix}antilink <on/off>
│───( 🧑🏻‍💻 ) Owner Menu
│> evalcode
│x evalcode-2
│$ executor
│▹ ${prefix}sendvirtex
│▹ ${prefix}setppbot
│▹ ${prefix}exif
│▹ ${prefix}leave
│▹ ${prefix}addprem
│▹ ${prefix}delprem
│▹ ${prefix}broadcast
│▹ ${prefix}masuk
└───────「 RIKUBOTZ 」
Sewa Bot / Jadi Premium? 
ketik .daftarprem

𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼
∆Arasya
∆Febri
∆Dika Ardnt
  `
}
