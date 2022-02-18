const { yt } = require('./yt')
const { tt } = require('./tiktok')
const { ig, igS } = require('./instagram')
const { twt } = require('./twitter')
const { fb } = require('./facebook')
const { scdl } = require('./soundcloud')

async function youtube(req, res) {
	const URL = req.query.URL,
		  type = req.query.type,
		  quality = req.query.quality
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL type quality'
	})
		const result = await yt(URL, type, quality)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function tiktok(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL type quality'
	})
		const result = await tt(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function instagram(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL'
	})
		const result = await ig(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function instagramStory(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL'
	})
		const result = await igS(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function twitter(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL'
	})
		const result = await twt(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function facebook(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL'
	})
		const result = await fb(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}


async function soundcloud(req, res) {
	const URL = req.query.URL
	if (!URL) return res.status(404).json({
		status: 404,
		message: 'Input Parameter URL'
	})
		const result = await scdl(URL)
		res.status(200).json({
			status: 200, 
			result: result
		});
}

module.exports = {
	youtube,
	tiktok,
	instagram,
	instagramStory,
	twitter,
	facebook,
	soundcloud
}
