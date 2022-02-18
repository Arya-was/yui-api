const got = require('got');
const cheerio = require('cheerio');


function scdl(argument) {
	let payload = {
		value: "https://soundcloud.com/ed-junianti/arvian-dwi-melepas-masa-lajang",
		afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a: "2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e"
	}
	return new Promise(async(resolve, reject) => {
		const req = await got.post("https://www.klickaud.co/download.php", {
			headers: {
				"cookie": "PHPSESSID=768ar97407109ddcn5ffkpn780",
				"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36"
			},
			form: payload
		}).text()
		const $ = cheerio.load(req)
		resolve({
			title: $('#dlMP3').attr('title').replace('Download ', '').replace('.mp3', '').trim(),
			thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
			dlink: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
		})
	})
}

module.exports = {
	scdl
}