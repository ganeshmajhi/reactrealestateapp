import axios from 'axios';

export const baseUrl='https://bayut.p.rapidapi.com/'




export const fetchApi = async (url) => {
const {data} = await axios.get((url),{
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '882974517fmsh946397c9a21f7afp13d593jsnb1cdf416dd96'
      }
});
return data;
}