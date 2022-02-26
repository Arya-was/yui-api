const got = require('got');
const cheerio = require('cheerio');
const { pin } = require('../downloader/pinterest')

async function getRandom(arr) {
	if (!Array.isArray(arr))
		throw TypeError("Parameter 'arr' must be an 'Array' got: " + typeof arr);
	return arr[Math.floor(Math.random() * arr.length)]
}


function pinsearch(query) {
	return new Promise(async(resolve, reject) => {
		let q = encodeURIComponent(query)
		let input = encodeURIComponent(q)
		let url = `https://id.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${input}&data=%7B%22options%22%3A%7B%22article%22%3A%22%22%2C%22appliedProductFilters%22%3A%22---%22%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22top_pin_id%22%3A%22%22%2C%22filters%22%3A%22%22%2C%22bookmarks%22%3A%5B%22Y2JVSG81V2sxcmNHRlpWM1J5VFVad1ZsWlVRbXhpVmtreVZXMHhSMkZIU2xkVGJuQlhUVlp3VkZreU1WZFdhekZaVW14a1YxSlZjRkpXYlhCRFkyc3hSMXBJU2xaaE1IQnlWRlZTVTA1V1duTmhSemxXVW14c05Ga3dhRXRXVmxsNlVXeE9ZVlpXVlhoV2JGcExaRWRHU0ZKc1RrNVNSbG8yVm10a2QxTXhWWGxTYmtwUFZsZG9XRlpyV21GVU1WcHlWMjFHYVUxV1NuaFZNbmhyWVVkR05sWnVhRlppUjJoMlZrY3hSMk14VG5WVWJHaHBWMFZLVlZkV1pIcE5WazVIVm14c2FGSlVWbTlaYkdoU1RXeFplRnBJWkZwV01IQlhWRlphVjFkck1IcFJibEpXWWtaS1dGVnFSbUZqVmxKeFZHeEdWbFpFUVRWYWExcFhVMWRLTmxWdGVGZE5XRUpLVm10amVHSXhiRmRUV0dob1RUSlNXVmxVUmt0VU1WSlhWbGhvYWxZd2NFbFpWVlUxWVVkRmVGZFljRmRTTTFKeVZqSXhWMk15VGtkV2JFcFlVakpvYUZadGRHRlpWMDVYVlc1S1ZtSnJOVzlVVm1RMFpVWldjMVZzVGxWaVJYQkpXWHBPYzFaV1dsZFRia1poVmpOTmVGVnNXbE5YVjBwR1QxWmtVMDFFUWpOV2FrbDRaREZrZEZac1pHbFRSa3BXVm10Vk1XRkdiRmhOVjNCc1lrWktlbGRyV21GVWJFcDFVVzVvVmxac1NraFdSRVpMVWpKS1JWZHNhRmRpUlhCRVYyeGFWbVZIVWtkVGJrWm9VbXhhYjFSV1duZFhiR1IwWkVWYVVGWnJTbE5WUmxGNFQwVXhObUZIZEU1U1JYQnpWRmh3V2swd01IbFZXR1JhVFd4S2NWUldVbTVOUm14eFZsaHdXazFyTVRaWFZsSkNUVlp3V0ZkdGVFOVNSVlkyVkZSS1ZrNUZOVWhWVkZaUFpXeEZkMVJYY0ZKbGF6bEZVbTB4VDFaSFRqTlVWV1JPVGxVeE5sUlVWazlOYTFWNVYxY3hVazFXY0ZsbFJUbFRWbTFSTkdaRVFUUlpNa1pwV2tSak1VMXRSbXhQUjBWNVRVUlpNazVYVG10WlYwa3hXbFJOTlUxNldtbE5SMDV0VFVkTmQxcEhWbXRaZWtrMVdtcE9hVTR5VFRCT1ZGVjZUbnBHYTAxWFNURk5SRlY1VDFSU2FrMUVaRGhVYTFaWVprRTlQUT09fFVIbzVUMkl5Tld4bVJFNXJUMVJOTUZwVVFUSlBSR3MxVFRKUmVFNHlWVFZhUkVVelQwZE9iRmxVU1RSWlYxcHRUbFJuTlU1NlNYaGFhbHBvVG5wc2JFNUVRWGhhVkVGNVdrZFpNazR5UlRSTmVtaHFXVlJhYTA5WFVYaGFSRm80Vkd0V1dHWkJQVDA9fDJiNGMzNzA5YzJjNTA5MWZmM2VjNGY1NDJkMWUyMjRmYWY0ZmI4MDc0MzgxZjkzODViZmQ4YmZhMDYxY2ZmNzV8TkVXfA%3D%3D%22%5D%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1613548994389`
		//let url = `https://id.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?autologin=true&q=${q}&data={%22options%22:{%22article%22:%22%22,%22appliedProductFilters%22:%22---%22,%22query%22:%22${q}%22,%22scope%22:%22pins%22,%22top_pin_id%22:%22%22,%22filters%22:%22%22},%22context%22:{}}&_=1645340424298`
		const req = await got.get(url, {
			headers: {
				'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36'
			}
		}).json()
		req.resource_response.data.results.map(v => {
			v.url = 'https://id.pinterest.com/pin/' + v.id
		})
		let result = await getRandom(req.resource_response.data.results)
		let dl = await pin(result.url)
		resolve({
			length: req.resource_response.data.results.length,
			results: dl[0],
			url: result.url
		})
	})
}

module.exports = {
	pinsearch
}