import { API_URL } from "../.env";
import axios from "axios";

export class RepoService {
  static async getRepo(query) {
    try {
      const response = await axios.get(
        `${API_URL}/search/repositories?q=${query}`
      );
      return response.data;
    } catch (error) {
      throw error();
    }
  }

  static async sortRepo(sortBy, query) {
    try {
      const response = await axios.get(
        `${API_URL}/search/repositories?sort=created&order=${sortBy}&q=${query}`
      );
      return response.data;
    } catch (error) {
      throw error();
    }
  }
}
