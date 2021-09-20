import Photos from "../models/Photos";

class ClickController {
  constructor() {
    this.photos = new Photos();
  }

  async onGetPhotoByKeywordsClick(str) {
    if (str === "") {
      str = "error";
    }

    const res = await this.photos.getPhotoByKeywordsClick(str);

    return res.urls.small;
  }
}

export default new ClickController();
