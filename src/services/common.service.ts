import http from "./http.service";
import cache from '../utils/cache';

export const getData = async (url: string) => {
   try {
      const response = await http.get(url);

      return response.data.data

   } catch (e) {
      return false;
   }
};

export const StoreData = async (url: string) => {
   try {
      const response = await http.get(url);

      if (response) {
         cache.store(url, response.data.data)
         return response.data.data
      }

      const data = await cache.get(url)

      return data ? data : response;

   } catch (e) {
      return false;
   }
};


export default {
   getData,
   StoreData
};
