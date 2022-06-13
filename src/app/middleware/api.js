import axios from "axios";
import { fromApi, callApi } from "../../features/users/userSlice";
const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log(action.type, callApi.type, "check");
    if (action.type === callApi.type) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          console.log(response.data, "lll");
          dispatch(fromApi(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    next(action);
  };

export default api;
