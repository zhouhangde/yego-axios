import axios from 'axios'

const instance = axios.create({
  baseURL:"https://wd2782900809lhvzxe.wilddogio.com/"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance