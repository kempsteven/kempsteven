import axios from 'axios'

axios.defaults.baseURL = 'https://kempsteven-cms-backend.herokuapp.com'

export default async (method, url, payload) => {
	try {

		return await axios[method](url, payload)
		
	} catch (err) {

		return {
			message: err
		}

	}
}