// Libs
import { createServer, Model } from 'miragejs';

// Data
import { movies } from './data/movies';
import { shows } from './data/shows';

export const mockedServer = (environment) => createServer({
  models: {
    movie: Model,
    show: Model,
  },
  seeds(server) {
    for (let i = 0; i < movies.length; i++) {
      const element = movies[i];
      
      server.create(
        'movie',
        {
          ...element,
        }
      )
    }
    for (let i = 0; i < shows.length; i++) {
      const element = shows[i];
      
      server.create(
        'show',
        {
          ...element,
        }
      )
    }
  },
  routes() {
    this.get(`${process.env.REACT_APP_API}/movies`, (schema) => {
      return schema.db.movies;
    });

    this.get(`${process.env.REACT_APP_API}/shows`, (schema) => {
      return schema.db.shows;
    });
  },
});