const { pinsearch } = require('./pinterest')

async function pinterestSearch(req, res) {
	const query = req.query.query
	if (!query) return res.json('Input Parameter query')
		let obj = await pinsearch(query)
		res.json(obj)
}

module.exports = {
	pinterestSearch
}
