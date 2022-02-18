# Free API

bug? request fitur? saran? bikin issues aja ya kak!

## Fitur yang tersedia
* [Youtube video](https://yui-api.herokuapp.com/api/youtube?URL=https://www.youtube.com/watch?v=1cdsbYuLahc&type=mp4&quality=360)
* [Youtube Audio](https://yui-api.herokuapp.com/api/youtube?URL=https://www.youtube.com/watch?v=1cdsbYuLahc&type=mp3&quality=128)
* [Instagram Downloader](https://yui-api.herokuapp.com/api/instagram?URL=https://www.instagram.com/p/CaEOUIXFHLZ/?utm_source=ig_web_copy_link)
* [Instagram Story Downloader](https://yui-api.herokuapp.com/api/instagramStory?URL=punipun7)
* [Tiktok Downloader](https://yui-api.herokuapp.com/api/tiktok?URL=https://vm.tiktok.com/ZSe7N1rps/)
* [Twitter Downloader](https://yui-api.herokuapp.com/api/twitter?URL=https://twitter.com/PassengersMovie/status/821025484150423557)
* [Facebook Downloader](https://yui-api.herokuapp.com/api/facebook?URL=https://fb.watch/8S1soLknDj/)
* [SoundCloud Downloader](https://yui-api.herokuapp.com/api/soundcloud?URL=https://soundcloud.com/oryza-sativa-922885232/bukan-sa-lagi)
* [Nhentai Reader](https://yui-api.herokuapp.com/api/nhread/388177)
* [Nhentai Detail](https://yui-api.herokuapp.com/api/nhdetail?code=388177)
* [Nhentai Artist](https://yui-api.herokuapp.com/api/nhartist?artist=crimson&page=1)
* [Nhentai Home](https://yui-api.herokuapp.com/api/nhhome?page=1)
* [Nhentai Search](https://yui-api.herokuapp.com/api/nhsearch?query=hutao&page=1)

## Example use
```
const axios = require('axios');
const result = await axios.get('https://yui-api.herokuapp.com/api/nhdetail?code=388177')
console.log(result.data)
```
