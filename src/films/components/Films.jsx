import FilmsService from '../service/FilmsService';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';

// Components
import FilmsList from './FilmsList';

const filmsService = new FilmsService();

const Films = () => {
  const [films, setFilms] = useState(null);

  const getFilms = async () => {
    const data = await filmsService.getAllFilms();
    if (data) {
      setFilms(data);
    } else {
      setFilms(null);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  if (films) {
    return <FilmsList films={films} />;
  } else {
    return <Spinner />;
  }
};

export default Films;
