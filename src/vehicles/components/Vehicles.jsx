import VehiclesService from '../service/VehiclesService';
import { useState, useEffect } from 'react';

// components
import VehiclesList from './VehiclesList';
import Spinner from '../../components/Spinner';

const vehiclesService = new VehiclesService();

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = async () => {
    const data = await vehiclesService.getAllVehicles();
    if (data) {
      setVehicles(data);
    } else {
      setVehicles(null);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  if (vehicles) {
    return <VehiclesList vehicles={vehicles} />;
  } else {
    return <Spinner />;
  }
};

export default Vehicles;
