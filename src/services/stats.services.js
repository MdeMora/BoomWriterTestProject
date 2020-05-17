import axios from 'axios';



const getStats = () => axios.get('https://sand-schools.boomwriter.com/home/ping').then(response => response.data).catch(err => console.log(err))

export default {
    getStats
}