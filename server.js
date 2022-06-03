const express = require('express')
const app = express()
const cors = require ('cors')
const PORT = 8000 

app.use(cors())

const garciaPets = {
    'petunia':{
        'species':'Bearded Dragon',
        'eater':'Omnivore',
        'climate':'Desert',
        'activeTime':'Daytime',
        'catchPhrase': 'Where the the chirps?!'
    },
    'zero':{
        'species':'Dog',
        'eater':'Omnivore',
        'climate':'anywhere warm',
        'activeTime':'24/7',
        'catchPhrase': 'Ruh-Roh! im rost!'
    },
    'moddy':{
        'species':'Gecko',
        'eater':'Insectivore',
        'climate':'Tropical',
        'activeTime':'Nocturnal',
        'catchPhrase':'Buuuug offff lemme sleeep'
    },
    'zilla':{
        'species':'Gecko',
        'eater':'Insectivore',
        'climate':'Tropical',
        'activeTime':'Nocturnal',
        'catchPhrase':'Hey kid, you wanna see a dead body?'
    },
    'chug':{
        'species':'Tortoise',
        'eater':'Herbivore',
        'climate':'Tropical ',
        'activeTime':'Daytime'
    },
    'paco':{
        'species':'Pacman Frog',
        'eater':'Insectivore',
        'climate':'Tropical',
        'activeTime':'Nocturnal',
        'catchPhrase':'I love it when you call me big PAWCO'
    },
    'fang':{
        'species':'Jumping spider',
        'eater':'Insectivore',
        'climate':'Humid',
        'activeTime':'All Day',
        'catchPhrase':'We were outside and so we inside'
    },
    'NOT MY BEBE!!':{
        'species':'',
        'eater':'',
        'climate':'',
        'activeTime':''
    }

}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name',(request, response)=>{
    const petName = request.params.name.toLowerCase()  // curious to see what comes out of .name

    if (garciaPets[petName]){
        response.json(garciaPets[petName])
    }else{
        response.json(garciaPets['NOT MY BEBE!!'])
    }
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`If you put your ear to a seashell and it whispers to you "pooooooort ${8000} is ruuuuunnnnnnnning, we gucci!"`)
})