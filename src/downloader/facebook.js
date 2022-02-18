const got = require('got');
const cheerio = require('cheerio');
const result = []

const headers = {
	"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	"accept-encoding": "gzip, deflate, br",
	"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pl;q=0.6,fr;q=0.5",
	"content-type": "application/x-www-form-urlencoded",
	"cookie": "__cf_bm=3ToPyQw4RFUmm9C4NZ2NCZ_4wQa7m3tNeEoV_R0UKKI-1645178570-0-Ab6cV9ZkfM41eYLCHvvZOLQ6QWm66KQ51FT6svub20gTNKIWiNXGj1FLwM/VmE/3Cbvzr+Wb/7X/tN6JT8H6RFM=; XSRF-TOKEN=eyJpdiI6IlFiVG11RnV4TXJlSVJ2XC9mNjRcL0dLUT09IiwidmFsdWUiOiJpOWhUSGVhNDRzeW52NFwvcTFuRWZteGRWQk01R3RIenZWbVpSMTRMNjUrRkFQWnJCNGJcL1FBem96ZTAxT0k2SGpXaGFlQmVxVUZzTnhxNDJOdlRZSXpRPT0iLCJtYWMiOiJjMzMwMzA1NTI1ZGQzZmViY2NjZTM0YjM1NzZkMDJjNTM1Y2VjYzg1ZDg5MjUwYzBiNjZiNDkxMmY3ZWMyYjlmIn0=; laravel_session=eyJpdiI6Ijd2d1NiRUR0YkZ4R0lTdlwvUm5Dd1ZnPT0iLCJ2YWx1ZSI6IjVveitwanNDUEl3S2IzWXdYTDc5UUt5SkJ6Z0tKSHdFRGkwQUEwa0lNekFOcExlNkVBNE9vemNTdmMyZ2ZneXNqRkxUWmdPVEppd3BHbFZzK010aEFnPT0iLCJtYWMiOiJjMTg1ODkwYTM4M2ZiYjllNzMzMzU2OTMzOWJmN2RhYWU1NmFmOGY3N2ZmMjQzZDQ5ZGU4YjY4ZGVmOTIzMTRhIn0=",
	"origin": "https://www.getfvid.com",
	"referer": "https://www.getfvid.com/",
	"sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"`,
	"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36"
}


function fb(url) {
	let payload = {
		url: url
	}
	return new Promise(async(resolve, reject) => {
		const reqUrl = await got.post("https://www.getfvid.com/downloader", {
			headers: headers,
			form: payload
		}).text()
		const $ = cheerio.load(reqUrl)
		resolve({
			title: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a').text(),
			HD: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
			SD: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr('href'),
			audio: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a').attr('href')
		})
	})
}

module.exports = {
	fb
}