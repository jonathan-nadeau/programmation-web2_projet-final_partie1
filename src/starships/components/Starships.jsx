import StarshipsService from '../service/StarShipsService';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';

// components
import StarshipsList from './StarshipsList';

const starshipsService = new StarshipsService();

const Starships = () => {
  const [starships, setStarships] = useState([]);

  const getStarships = async () => {
    const data = await starshipsService.getAllStarships();
    if (data) {
      setStarships(data);
    } else {
      setStarships(null);
    }
  };

  useEffect(() => {
    getStarships();
  }, []);

  if (starships) {
    return <StarshipsList starships={starships} />;
  } else {
    <Spinner />;
  }
};

export default Starships;
