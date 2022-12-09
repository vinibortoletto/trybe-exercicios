const express = require('express');
const { read } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const fileContent = await fs.readFile(moviesPath);
    return JSON.parse(fileContent);
  } catch (error) {
    console.log(`Arquivo não pode ser lido. Error: ${error}`);
  }
};

app.get('/movies/search', async (req, res) => {
  try {
    const movies = await readFile();
    const { q } = req.query;

    if (q) {
      const searchedMovies = movies.filter(({ movie }) =>
        movie.toLowerCase().includes(q)
      );
      return res.status(200).json(searchedMovies);
    }

    return res.status(200).end();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movies = await readFile();
    const selectedMovie = movies.find((movie) => movie.id === Number(id));

    if (!selectedMovie) {
      return res.status(401).json({ message: 'Filme não encontrado.' });
    }

    return res.status(200).json(selectedMovie);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();

    const newMovieId = movies[movies.length - 1].id + 1;
    const newMovie = {
      id: newMovieId,
      ...req.body,
    };

    const newMovies = [...movies, newMovie];

    return res.status(200).json(newMovies);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const updatedMovie = { ...req.body };

    const newMovies = movies.map((movie) => {
      if (movie.id !== Number(id)) return movie;

      return {
        id: movie.id,
        ...updatedMovie,
      };
    });

    await fs.writeFile(moviesPath, JSON.stringify(newMovies, null, 2));
    return res.status(200).json(newMovies);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const newMovies = movies.filter((movie) => movie.id !== Number(id));

    await fs.writeFile(moviesPath, JSON.stringify(newMovies, null, 2));
    return res.status(200).end();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = { app };
