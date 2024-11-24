import axios from   'axios';

const axiosConfig = { withCredentials: false };

// http generic function to call backend

const sqHttpCommon = axios.create({
    baseURL: "http://192.168.12.12:15060/mockterview/",
    headers: {
        "Content-type": "application/json",
        //"rejectUnauthorized": "false",
        "mode": "cors","crossDomain": "true"
    }
});



export {
    sqHttpCommon, axiosConfig
}