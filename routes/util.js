const got = require('got');
const pdfkit = require('pdfkit')


async function getFile(url) {
	const res = await got({
		url: url,
		method: 'get',
		responseType: 'buffer'
	})
	return res.rawBody
}


async function toPdf(images = [], size = 'A4') {
	return new Promise(async(resolve, reject) => {
		if (!Array.isArray(images)) throw new TypeError('images must be an array');
		let buffs = [];
		const doc = new pdfkit({ margin: 0, size: size });
		for (let img of images) {
			const data = await getFile(img)
			doc.image(data, 0, 0, {
				fit: [595.28, 841.89],
				align: 'center',
				valign: 'center',
			})
			doc.addPage();
		}
		doc.on('data', (chunk) => buffs.push(chunk));
		doc.on('end', () => resolve(Buffer.concat(buffs)));
		doc.on('error', (err) => reject(err));
		doc.end();
	})
}

module.exports = {
	getFile,
	toPdf
}