import * as config from "./conf";
import * as axios from "axios";

class Provider {

  getArticles(query, limit = 4) {
    const url = config.API_PATH +
                config.LIST_OF_ARTICLES +
                query +
                config.LIMIT +
                limit;

    return axios.get(url)
  }

  getArticle(itemsId) {
    const url = config.API_PATH +
                config.GET_ARTICLE +
                itemsId;

    return axios.get(url)
  }

  getArticleDescription(itemsId) {
    const url = config.API_PATH +
                config.GET_ARTICLE +
                itemsId +
                config.GET_DESCRIPTION;

    return axios.get(url)
  }

  getCategories(categoryId) {
    const url = config.API_PATH +
      config.GET_CATEGORIES +
      categoryId;

return axios.get(url)
  }
}

const provider = new Provider();
export { provider };
