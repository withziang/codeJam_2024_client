import axios from   'axios';

const axiosConfig = { withCredentials: false };

// http generic function to call backend

const sqHttpCommon = axios.create({
    baseURL: "http://192.168.35.117:15020/app_api/",
    headers: {
        "Content-type": "application/json",
        //"rejectUnauthorized": "false",
        "mode": "cors","crossDomain": "true"
    }
});



export {
    sqHttpCommon, axiosConfig
}