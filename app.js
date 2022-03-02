const express = require("express");
var app = express();
const indexApi = require('./routes/api')
process.on('uncaughtException', console.log)

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.set("json spaces",2)

app.use('/api', indexApi);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})
app.get('/nhentai', (req, res) => {
	res.sendFile(__dirname + '/public/nhentai.html')
})
app.get('/static/style.css', (req, res) => {
	res.sendFile(__dirname + '/public/style.css')
})
app.get('/static/background.jpg', (req, res) => {
	res.sendFile(__dirname + '/public/background.jpg')
})
app.get('/static/profile.jpg', (req, res) => {
	res.sendFile(__dirname + '/public/profile.jpg')
})

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
