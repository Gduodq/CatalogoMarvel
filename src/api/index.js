import axios from 'axios'
import { routesAPI } from 'utils/routesAPI'

export const api = axios.create({
  baseURL: routesAPI.baseUrl(),
})
