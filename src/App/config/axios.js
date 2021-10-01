import axios from 'axios'
import { API_URL, TOKEN, TIME_OUT_API } from './constants'

export default axios.create({
  baseURL: API_URL,
  timeout: TIME_OUT_API,
  headers: { 'X-Access-Token': TOKEN }
});
