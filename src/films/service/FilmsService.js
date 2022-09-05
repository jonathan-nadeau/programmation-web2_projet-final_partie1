class FilmsService {
  URL = 'https://swapi.dev/api/films/';

  async getAllFilms() {
    try {
      const response = await fetch(this.URL);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmById(id) {
    try {
      const response = await fetch(`${this.URL}${id}`);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default FilmsService;
