const express = require('express')
const path = require('node:path')
const fs = require('node:fs')
let database = require('./database.json')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let numToFilter
let filteredArray
let date = new Date().getFullYear()
database.sort((child1, child2) => child1.shoeNumber - child2.shoeNumber)


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

app.post('/delete', (req, res) => {
    const idToDelete = +req.body.delete
    const deletedChildArray = database.filter((child) => {
        return child.childID !== idToDelete
    })
    database = deletedChildArray
    fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(database), (err) => {
        if(err){
            console.log(err.message)
        }
    } )
    res.redirect('/overview')
})

app.post('/toFilter', (req, res) => {
    numToFilter = +req.body.numberToFilter
    const filtering = database.filter(child => {
        return child.shoeNumber === numToFilter
    })
    filteredArray = filtering
    res.redirect('/filtragem')
    numToFilter = null
})

app.post('/sucess', (req, res) => {
    const childID = Math.round(Math.random() * 99999)
    const childName = (req.body.name).toUpperCase()
    const shoeNumber = +req.body.number
    const childAge =  date - new Date(req.body.birthdate).getFullYear()
    const gender = req.body.gender
    const clothing = +req.body.clothing
    const motherName = (req.body.motherName).toUpperCase()

    database.push({ childID, childName, shoeNumber, childAge, gender, clothing, motherName })
    fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(database), (err) => {
        if(err){
            console.log(err.message)
        }
    } )
    database.sort((child1, child2) => child1.shoeNumber - child2.shoeNumber)

    res.redirect('/register')
})

const port = 3000

app.listen(port, () => console.log('servidor aberto'))