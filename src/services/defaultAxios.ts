import axios from "axios";
import Toast from "react-native-toast-message";

const instance = axios.create();

export const setConfig = () => {
   instance.defaults.baseURL = "https://reqres.in/api/"
};

export const axiosSetup = (axiosInstance: any) => {
   axiosInstance.interceptors.request.use(
      (req: any) => {
         return req;
      },
      (error: any) => {
         Toast.show({ type: "error", text2: error })
         return error;
      }
   );

   axiosInstance.interceptors.response.use(
      (res: any) => {
         return res;
      },
      (error: any) => {
         Toast.show({ type: "error", text2: error })
         return error;
      }
   );
};

setConfig()
axiosSetup(instance);

const defaultAxios = {
   axiosSetup,
   instance,
};
export default defaultAxios;
