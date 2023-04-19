import axiosClient from '../configs/axiosConfig';

const PRODUCT_API_URL = '/product';

const productApi = {

  getAllProducts: () => {
    const url = PRODUCT_API_URL + '/all';
    return axiosClient.get(url)
  }

};

export default productApi;
