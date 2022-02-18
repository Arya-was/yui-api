const got = require('got');
const cheerio = require('cheerio');
const result = []


function twt(url) {
	const payload = {
		url: url
	}
	return new Promise(async(resolve, reject) => {
		const req = await got.post('https://www.expertsphp.com/instagram-reels-downloader.php', {
			form: payload,
			headers: {
			'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			}
		}).text()
		const $ = cheerio.load(req)
		$('#showdata > div.col-md-4.col-md-offset-4 > table > tbody > tr').each(function() {
			let url = $(this).find('a').attr('href')
			let quality = $(this).find('strong').text().replace('video/mp4', '')
			result.push({ url, quality })
		})
		resolve(result)
	})
}

module.exports = {
	twt
}