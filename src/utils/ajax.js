import { ajax } from 'rxjs/ajax'

export const get = url =>
  ajax({
    url,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
  })
