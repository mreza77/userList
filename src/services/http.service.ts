import defaultAxios from "./defaultAxios";

const generateRequest = async (func: any, args: any) => {
   return defaultAxios.instance[func](...args);
};

const http = {
   get: (url: string) => {
      return generateRequest("get", [url]);
   }
};

export default http;
