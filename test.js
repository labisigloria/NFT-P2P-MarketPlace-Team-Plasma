require('dotenv').config();

const axios = require("axios");
export const testAuthentication = () => {
	const url = `https://api.pinata.cloud/data/testAuthentication`;
	return axios
		.get(url, {
			headers: {
				pinata_api_key: "your pinata api key",
				pinata_secret_api_key: "your pinata secret api key"
			}
		})
		.then(function (response) {
			//handle your response here
		})
		.catch(function (error) {
			//handle error here
		});
};
