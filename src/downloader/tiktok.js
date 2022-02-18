const got = require('got');

function tt(url) {
	return new Promise(async(resolve, reject) => {
		let getUrl = await got(url)
		let videoKey = await got(`https://api.snaptik.site/video-key?video_url=${getUrl.url}`).json()
		let metaData = await got(`https://api.snaptik.site/video-details-by-key?key=${videoKey.data.key}`).json()
		resolve({
			author: metaData.data.author,
			description: metaData.data.description,
			video: {
				with_watermark: `https://api.snaptik.site/download?key=${metaData.data.video.with_watermark}&type=video`,
				no_watermark: `https://api.snaptik.site/download?key=${metaData.data.video.no_watermark}&type=video`,
				no_watermark_raw: metaData.data.video.no_watermark_raw,
			},
			music: `https://api.snaptik.site/download?key=${metaData.data.music}&type=music`
		})
	})
}


module.exports = {
	tt
}