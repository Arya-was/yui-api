const got = require('got');
const cheerio = require('cheerio');

function yt(Url, ftype = 'mp4', fquality = '360') {
	let data = {
		url: Url,
		q_auto: 0,
		ajax: 1
	}
	return new Promise(async(resolve, reject) => {
		const reqData = await got.post('https://www.y2mate.com/mates/en203/analyze/ajax', {
			headers: {
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			},
			form: data
		}).json()
		const $ = cheerio.load(reqData.result);
		const _id = (/var k__id = "(.*?)"/.exec($.html()) || ["", ""])[1];
		const v_id = (/var k_data_vid = "(.*?)"/.exec($.html()) || ["", ""])[1];
		const qualityf = [];
		$("#mp4 > table > tbody > tr").each(function(a, b) {
			let td = $(this).find("td");
			let quality = $(td).find('a').text().split("(")?.[0]?.trim()?.toLowerCase();
			let size = $(td).eq(1).text();
			qualityf.push({ quality, size })
		})
		const result = {}
		result.title = $('div').find('.thumbnail.cover > div > b').text()
		result.thumbnail = $('div').find('.thumbnail.cover > a > img').attr('src')
		result.quality = qualityf
		let payload = {
			type: "youtube",
			_id,
			v_id,
			ajax: "1",
			token: "",
			ftype,
			fquality,
		}
		const reqConvert = await got('https://www.y2mate.com/mates/en203/convert', {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				cookie: "_ga=GA1.2.1405332118.1641699259; _gid=GA1.2.1117783105.1641699259; MarketGidStorage=%7B%220%22%3A%7B%7D%2C%22C702514%22%3A%7B%22page%22%3A2%2C%22time%22%3A1641701743540%7D%7D; _PN_SBSCRBR_FALLBACK_DENIED=1641701744162",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
			},
			form: payload
		}).json()
		const $ch = cheerio.load(reqConvert.result)
		result.dlink = $ch("a[href]").attr("href");
		resolve(result)
	})
}

module.exports = {
	yt
}