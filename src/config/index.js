import axios from "axios";

export const instance = axios.create({
    baseURL: "http://43.201.89.47",
    headers: {
        Authorization: localStorage?.getItem("accessToken"),
    },
});
