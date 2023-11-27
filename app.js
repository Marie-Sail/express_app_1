const express = require('express');
const app = express();
const port = 5000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        color: true,
        duration: 180,
    },
];

app.get("/", (req, res) => { res.send("Welcome to my favourite movie list"); });

app.get("/api/movies", (req, res) => { res.status(200).json(movies) })

app.get("/api/movies/:id", (req, res) => {
    /* const film = movies.find((movie) => movie.id === parseInt(req.params.id))
 
     if (film) {
         res.status(200).json(film)
     }
 
     else { res.status(404).send('Not Found') }*/

    for (let i = 0; i < movies.length; i++) {
        req.params.id <= (movies.length + 1) ? res.status(200).json(movies[req.params.id]) :
            res.status(404).send('Not Found');

    }
}
)

app.listen(port, (err) => {
    if (err) {
        console.error('Someting bad happened');
    }
    else { console.log(`Server is listening on ${port}`); }
});



/*     for (let i=0; i<movies.length;i++){
req.params.id === movies[i].id ? res.status(200).json(movies[req.params.id]): 
  res.status(404).send('Not Found');*/
