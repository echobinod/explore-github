import { API_URL } from "../.env";
import axios from "axios";

export class RepoService {
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

  static async sortRepos(sortBy, query) {
    try {
      const response = await axios.get(
        `${API_URL}/search/repositories?sort=created&order=${sortBy}&q=${query}`
      );
      return response.data;
    } catch (error) {
      throw error();
    }
  }

//   single repo
static async getRepo(owner, repo) {
    try {
        const response = await axios.get(`${API_URL}/repos/${owner}/${repo}`);
        return response.data;
    } catch (error) {
        throw error();
    }
}
}
