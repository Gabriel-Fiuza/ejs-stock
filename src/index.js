const express = require('express')
const path = require('node:path')
const fs = require('node:fs')
const database = require('./database.json')

const app = express()
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let numToFilter = []

const children = database
let filteredArray

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('form')
})

app.get('/overview', (req, res) => {
    res.render('overview', { database: database })
})

app.get('/filtragem', (req,res) => {
    res.render('filter', { filteredArray: filteredArray })
})

app.post('/toFilter', (req, res) => {
    numToFilter.push(+req.body.numberToFilter)
    const filtering = database.filter(child => {
        return child.shoeNumber === numToFilter[0]
    })
    filteredArray = filtering
    console.log(filteredArray)
    res.redirect('/filtragem')
    numToFilter = []
})

app.post('/sucess', (req, res) => {
    const childName = req.body.name
    const shoeNumber = +req.body.number
    const childAge = +req.body.age
    const gender = req.body.gender
    const clothing = +req.body.clothing
    const motherName = req.body.motherName

    children.push({ childName, shoeNumber, childAge, gender, clothing, motherName })
    fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(children), (err) => {
        if(err){
            console.log(err.message)
        }
    } )

    res.redirect('/register')
})

const port = 3000

app.listen(port, () => console.log('servidor aberto'))