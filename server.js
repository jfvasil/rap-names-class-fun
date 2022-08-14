const express = require('express')
const app = express()
const Port = 8000

const rappers = {
    '21 savage': {
        age: 29,
        birthname: 'Sheyaa Bin Abraham-Joeseph',
        birthLocation: 'London, England'
}, 'chance the rapper': {
        age: 29,
        birthname: 'Chancelor Bennet',
        birthLocation: 'Chicago, Illinois'
}, 'dylan': {
        age: 'dylan',
        birthname: 'dylan',
        birthLocation: 'dylan'
},

} 
    

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (req, res) => {
    console.log(req.params.rapperName)
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else{
        res.json(rappers['dylan'])
    }
    //res.json(rappers)
})
app.listen(Port, () =>{
    console.log(`Listening on port ${Port}`)
})
