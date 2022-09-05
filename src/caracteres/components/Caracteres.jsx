import CaracteresService from '../service/CaracteresService';
import { useState, useEffect } from 'react';

// components
import CaracteresList from './CaracteresList';
import Spinner from '../../components/Spinner';

const caracteresService = new CaracteresService();

const Caracteres = () => {
  const [caracteres, setCaracteres] = useState(null);

  const getCaracteres = async () => {
    const data = await caracteresService.getAllPeople();
    if (data) {
      setCaracteres(data);
    } else {
      setCaracteres(null);
    }
  };

  useEffect(() => {
    getCaracteres();
  }, []);

  if (caracteres) {
    return <CaracteresList caracteres={caracteres} />;
  } else {
    return <Spinner />;
  }
};

export default Caracteres;
