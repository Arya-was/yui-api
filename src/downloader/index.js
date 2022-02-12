const { yt } = require('./yt')

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

module.exports = {
	youtube
}