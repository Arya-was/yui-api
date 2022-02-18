const got = require('got');
const cheerio = require('cheerio');
const result = []


function ig(url) {
	return new Promise(async(resolve, reject) => {
		const req = await got.post("https://snapinsta.app/action.php", {
			form: {
				url,
				action: "post",
			},
			headers: {
				origin: "https://snapinsta.app",
				referer: "https://snapinsta.app/",
				"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36",
				"cookie": "PHPSESSID=g35tdub8ko7vgtu00kqfkr3r3u"
			},
		}).text();
		const $ = cheerio.load(req)
		$('.row.download-box > div').each(function() {
			let url = $(this).find(".download-items__btn > a[href]").attr("href");
			result.push(url)
		})
		resolve(result)
	})
}



function igS(username) {
	return new Promise(async(resolve, reject) => {
		const reqUrl = await got.get("https://www.instagramsave.com/instagram-story-downloader.php", {
			headers: {
				'cookie': 'PHPSESSID=mokpnu09ofun2kohic8tshm3nh',
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			}
		}).text();
		const $ = cheerio.load(reqUrl)
		let payload = {
			url: "https://www.instagram.com/" + username,
			action: 'story',
			token: $('#token').attr('value'),
			json: ""
		}
		const req = await got.post("https://www.instagramsave.com/system/action.php", {
			headers: {
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				origin: "https://www.instagramsave.com",
				referer: "https://www.instagramsave.com/instagram-story-downloader.php",
				'cookie': 'PHPSESSID=mokpnu09ofun2kohic8tshm3nh',
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			},
			form: payload
		}).json()
		resolve(req)
	})
}


module.exports = {
	ig,
	igS
}