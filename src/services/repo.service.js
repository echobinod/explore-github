import { API_URL } from "../.env";
import axios from "axios";
export class RepoService {

  // get repos by search query
  static async getRepos(query) {
    try {
      const response = await axios.get(
        `${API_URL}/search/repositories?q=${query}`
      );
      return response.data;
    } catch (error) {
      throw error();
    }
  }

  // sort repos by: stars, forks, updated
  static async sortRepos(sortBy, query) {
    try {
      const response = await axios.get(
        `${API_URL}/search/repositories?sort=${sortBy}&order=desc&q=${query}`
      );
      return response.data;
    } catch (error) {
      throw error();
    }
  }

  //   get selected repo
  static async getRepo(owner, repo) {
    try {
      const response = await axios.get(`${API_URL}/repos/${owner}/${repo}`);
      return response.data;
    } catch (error) {
      throw error();
    }
  }
}
