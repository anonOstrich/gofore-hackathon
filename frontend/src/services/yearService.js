import axios from 'axios'

const baseUrl = '/api/years'


const yearService = {
  
  getByYear: async (year) => {
    const result = axios.get(`${baseUrl}/${year}`)
    return result.data
  }

}


export default yearService