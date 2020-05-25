import axios from 'axios'

const client = axios.create({
  baseURL: 'http://afracode.com/api/v1',
})

export default {
  index () {
    return client.get('sample')
  },
  show (id) {
    return client.get(`sample/${id}`)
  },
  profile () {
    return client.get(`sample/current`)
  },
  update (id, data) {
    return client.put(`sample/${id}`, data)
  },
  delete (id) {
    return client.delete(`sample/${id}`)
  },
  store (data) {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }

    return client.page('sample', data, config)
  },
  updateProfile (data) {
    return client.put(`sample/current`, data)
  },
}
