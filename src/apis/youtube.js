import axios from 'axios';
const KEY = 'AIzaSyCHtK96sS2LrPdSliGT-BAFGm81PL5NBwc';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type:'video',
        key: KEY
    }
});
