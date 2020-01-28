import axios from 'axios';
import { Film } from "./types";

export async function getFilm(param: string): Promise<Film> {
    const response = await axios.get(`https://swapi.co/api/films/${param}/`)

    return {
        title: response.data.title,
        episode_id: response.data.episode_id,
        director: response.data.director,
        producer: response.data.producer,
        release_date: response.data.release_date,
        opening_crawl: response.data.opening_crawl,
    }
}
