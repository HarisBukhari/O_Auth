
const express = require('express')
const shortid = require('shortid')
const app = express()
const db = {}

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.status(200).send("Done!")
})

app.get('/:any', (req, res) => {
    const {any} = req.params
    if(db[any]){
        res.redirect(db[any])
    }else{
        console.log("Please")
        res.status(404).send('URL not found');
    }
})


app.post('/hello', (req, res) => {
    const Surl = shortid.generate()
    const Rurl = req.url
    db[Surl] = req.url
    res.json({"Rurl": Rurl, "Surl": Surl})
})

app.listen(3000, (err, res) => {
    console.log('Listen on http://localhost:3000 ')
})
