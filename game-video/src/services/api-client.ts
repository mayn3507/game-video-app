import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api" , // http://localhost:3001/api 
    params: {
        key: 'c1a4a67b22c74ed08aa04b493aad9d45'
    }

} )
// export const API = "http://api.openweathermap.org/data/2.5/"