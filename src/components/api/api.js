/* eslint-disable no-undef */
const ApiPath = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}`;
const getproducts = axios.create({
  baseURL: ApiPath,
});

const GetProductsApi = (page) => getproducts.get(`/products?page=${page}`);
export default {
  GetProductsApi,
};
