const Player = require('../api/models/player.model');
const mongoose = require('mongoose');

const players= [
    {
     
      "name": "Michael Jordan",
      "characteristics": {
        "position": "Shooting Guard",
        "team": "Chicago Bulls",
        "championships": 6,
        "MVPs": 5
      },
      "image": "../assets/MJ.jpg"
    },
    {
      "name": "LeBron James",
      "image": "../assets/LeBron.jpg",
      "characteristics": {
        "position": "Small Forward",
        "MVPs": "3",
        "championships": "4",
        "team": "Los Angeles Lakers"
      },
      
    },
    {
      "name": "Kareem Abdul-Jabbar",
      "image": "../assets/kareem.jpg",
      "characteristics": {
        "position": "Center",
        "MVPs": "4",
        "championships": 6,
        "team": "Los Angeles Lakers"
      },
      
    },
    {
      "name": "Magic Johnson",
      "image": "../assets/Magic.jpg",
      "characteristics": {
        "position": "Point Guard",
        "MVPs": "4",
        "championships": 5,
        "team": "Los Angeles Lakers"
      },
      
    },
    {
      "name": "Larry Bird",
      "image": "../assets/Larry.jpg",
      "characteristics": {
        "position": "Small Forward",
        "MVPs": 3,
        "championships": "4",
        "team": "Boston Celtics"
      },
     
    },
    {
      
      "name": "Shaquille O'Neal",
      "characteristics": {
        "position": "Center",
        "team": "Los Angeles Lakers",
        "championships": 4,
        "MVPs": 1
      },
      "image": "../assets/shaq.jpg"
    },
    {
      
      "name": "Kobe Bryant",
      "characteristics": {
        "position": "Shooting Guard",
        "team": "Los Angeles Lakers",
        "championships": 5,
        "MVPs": 1
      },
      "image": "../assets/Kobe.jpg"
    },
    {
      
      "name": "Wilt Chamberlain",
      "characteristics": {
        "position": "Center",
        "team": "Los Angeles Lakers",
        "championships": 2,
        "MVPs": 4
      },
      "image": "../assets/Wilt.jpeg"
    },
    {
     
      "name": "Bill Russell",
      "characteristics": {
        "position": "Center",
        "team": "Boston Celtics",
        "championships": 11,
        "MVPs": 5
      },
      "image": "../assets/Bill.jpg"
    },
    {
      
      "name": "Hakeem Olajuwon",
      "characteristics": {
        "position": "Center",
        "team": "Houston Rockets",
        "championships": 2,
        "MVPs": 1
      },
      "image": "../assets/hakeem.jpeg"
    },
    {
      
      "name": "Tim Duncan",
      "image": "../assets/tim.jpg",
      "characteristics": {
        "position": "Power Forward",
        "team": "San Antonio Spurs",
        "championships": 5,
        "MVPs": 2
      },
      
    },
    {
      
      "name": "Oscar Robertson",
      "image": "../assets/oscar.png",
      "characteristics": {
        "position": "Point Guard",
        "team": "Milwaukee Bucks",
        "championships": 1,
        "MVPs": 1
      },
      
    },
    {
      
      "name": "Jerry West",
      "image": "../assets/jerry.jpg",
      "characteristics": {
        "position": "Point Guard",
        "team": "Los Angeles Lakers",
        "championships": 1,
        "MVPs": 1
      },
      
    },
    {
      "name": "Pau Gasol",
      "image": "https://www.diariodeburgos.es/media/IMG/2023/9628A67B-9CB8-36DC-81249CBB45EF0CDF.JPG",
      "characteristics": {
        "position": "Center",
        "MVPs": "1",
        "championships": "1",
        "team": "Los Angeles Lakers"
      },
     
    }
    
]



mongoose.connect('mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/MyAPI?retryWrites=true&w=majority')
.then(async () => {
    const allplayers = await Player.find()
    if(allplayers.length > 0){
        await Player.collection.drop()
        console.log('jugadores borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const jugadoresMap = players.map((jugador) => new Player(jugador))
    await Player.insertMany(jugadoresMap)
    console.log('jugadores añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());