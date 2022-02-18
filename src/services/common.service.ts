import http from "./http.service";

export const getData = async (url: string) => {
   try {
      const response = await http.get(url);
      return response
   } catch (e) {
      return false;
   }
};


export default {
   getData
};
