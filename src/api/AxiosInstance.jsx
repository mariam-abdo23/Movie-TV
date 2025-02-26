import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGU2Y2FmMzQwYzRiYWYyZGM2NjQwNTJkODM1NTI4NiIsIm5iZiI6MTc0MDIzNjM3NS4yMzIsInN1YiI6IjY3YjllNjU3YTIzOTI5YWMyOGJlYjc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SSqdLmq9oKCSCaSr04ZNgv664FJxDNTz7G2Y_CEDSiw' ,
         Accept:'application/json'
    }
})

export default AxiosInstance;