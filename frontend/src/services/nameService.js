import axios from 'axios'

const baseUrl = '/api/names'


const nameService = {

  getAll:  async () => {
  const result = await axios.get()
  return result.data
},

  getByName: async (name) => {
  const result = await axios.get(`${baseUrl}/${name}`)
  return result.data
}
}

export default nameService


