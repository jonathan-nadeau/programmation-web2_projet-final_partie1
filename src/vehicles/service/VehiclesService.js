class VehiclesService {
  URL = 'https://swapi.dev/api/vehicles/';

  async getAllVehicles() {
    try {
      const response = await fetch(this.URL);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getVehicleById(id) {
    try {
      const response = await fetch(`${this.URL}${id}`);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      return data;
    } catch (error) {}
  }
}

export default VehiclesService;
