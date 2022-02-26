const got = require('got');
const cheerio = require('cheerio');
const result = []
const hasil = []


function pin(url) {
	let payload = {
		url: url
	}
	return new Promise(async(resolve, reject) => {
		const req = await got.post('https://pinterestvideodownloader.com/', {
			headers: {
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			},
			form: payload
		}).text()
		const $ = cheerio.load(req)
		$('#content > center > div:nth-child(8) > table > tbody > tr').each(function() {
			let url = $(this).find('td > a').attr('href')
			result.push(url)
		})
		result.forEach(v => {
			if(v == null) return
				hasil.push(v)
		})
		hasil.shift()
		resolve(hasil)
	})
}

module.exports = {
	pin
}