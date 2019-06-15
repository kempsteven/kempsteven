import axios from 'axios'

axios.defaults.baseURL = 'https://kempsteven-cms-backend.herokuapp.com'

export default async (method, url) => {
	try {

		return await axios[method](url)
		
	} catch (err) {

		return {
			message: err
		}

	}
}