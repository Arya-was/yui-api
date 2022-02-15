const got = require('got');

function yt(Url, ftype = 'mp4', fquality = '360') {
	let payload = {
		url: Url
	}
	let result = {}
	return new Promise(async(resolve, reject) => {
		const req = await got.post('https://api.onlinevideoconverter.pro/api/convert', {
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-encoding": "gzip, deflate, br",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json",
				origin: "https://onlinevideoconverter.pro",
				referer: "https://onlinevideoconverter.pro/",
				'user-agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36',
			},
			body: JSON.stringify(payload),
		}).json()
		if(ftype === 'mp4') {
			let dlink = req.url.find(a => a.quality === fquality)
				result.dlink = dlink.url
		} else {
			result.dlink = req.mp3Converter
		}
		resolve({
			title: req.meta.title,
			thumbnail: req.thumb,
			duration: req.meta.duration,
			video_quality: req.video_quality,
			dlink: result.dlink
		})
	})
}
module.exports = {
	yt
}
