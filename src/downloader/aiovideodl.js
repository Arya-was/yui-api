const got = require('got');
const cheerio = require('cheerio');


function aiovid(url) {
	return new Promise(async(resolve, reject) => {
		const reqUrl = await got.get('https://aiovideodl.ml/', {
			headers: {
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			}
		}).text()
		const $token = cheerio.load(reqUrl)
		const token = $token('#token').attr('value')
		let payload = {
			url: url,
			token: token
		}
		const req = await got.post('https://aiovideodl.ml/wp-json/aio-dl/video-data/', {
			headers: {
				accept: '*/*',
				'accept-encoding': 'gzip, deflate, br',
				'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pl;q=0.6,fr;q=0.5',
				'content-type': 'application/x-www-form-urlencoded',
				'cookie': 'cookieconsent_status=dismiss; PHPSESSID=a5b6e0a5976a7ef19f3e8eda4474c85c; pll_language=en',
				origin: 'https://www.aiovideodl.com',
				referer: 'https://www.aiovideodl.com',
				'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			},
			form: payload
		}).json()
		resolve(req)
	})
}

module.exports = {
	aiovid
}
