import axios from "axios";

class Photos {
  constructor() {
    this.API = axios.create({
      baseURL: "https://api.unsplash.com/",
    });
    this.apiKey = "1n6Heu7Ekoh6kSuhmOVsAkEFqZjjJZ_mBMJfBUCnMPU";
  }

  async getPhotoByKeywordsClick(str) {
    const { data } = await this.API.get(
      `photos/random?client_id=${this.apiKey}&query=${str}`
    );

    return data;
  }
}

export default Photos;
