import { API_URL } from 'react-native-dotenv';

//max, min or none
const LOG_LEVEL = 'max';

class Ajax {
	headers() {
		return {
			'Content-Type': 'application/json',
		};
	}

	get(uri, body) {
		return this._fetch(uri, 'GET', JSON.stringify(body));
	}

	post(uri, payload = {}, files) {
		let body = JSON.stringify(payload);
		if (files) {
			body = new FormData();
			Object.keys(files).forEach((key) => {
				body.append(key, files[key]);
			});
			Object.keys(payload).forEach((key) => {
				body.append(key, payload[key]);
			});
		}
		return this._fetch(uri, 'POST', body);
	}

	delete(uri, body = {}) {
		return this._fetch(uri, 'DELETE', JSON.stringify(body));
	}

	patch(uri, body = {}) {
		return this._fetch(uri, 'PATCH', JSON.stringify(body));
	}

	put(uri, body = {}) {
		return this._fetch(uri, 'PUT', JSON.stringify(body));
	}

	async _fetch(uri, method, body) {
		const url = API_URL + uri;
		const headers = this.headers();
		const options = { method, body, headers };
		this.logRequest(method, url, headers, body);

		try {
			const response = await fetch(url, options);
			const data = await response.json();
			if (data.error) {
				// TODO: handle errors in ui
			}
			this.logResponse(
				method,
				url,
				headers,
				body,
				JSON.stringify(data),
				response.status
			);
			return data;
		} catch (e) {
			// TODO: handle errors in ui
			this.logResponse(method, url, headers, body, e);
		}
	}

	static getParams(body, request) {
		return body
			? '\n' +
					(request ? '---->' : '<----') +
					' Body Param: ' +
					JSON.stringify(body)
			: '';
	}

	logRequest(method, url, headers, payload = '') {
		if (LOG_LEVEL === 'max' || LOG_LEVEL === 'min')
			console.log(
				'%c--------------->\n' +
					'----> Headers: ' +
					JSON.stringify(headers) +
					'\n' +
					'----> ' +
					method +
					' ' +
					url +
					Ajax.getParams(payload, true) +
					'\n' +
					'--------------->',
				'color:#89614A;'
			);
	}

	logResponse(method, url, headers, body = '', response, status) {
		if (LOG_LEVEL === 'max' || LOG_LEVEL === 'min')
			console.log(
				'%c<---------------\n' +
					'<---- Headers: ' +
					JSON.stringify(headers) +
					'\n' +
					'<---- ' +
					method +
					' ' +
					url +
					Ajax.getParams(body, false) +
					'\n' +
					(LOG_LEVEL === 'max' ? '<---- ' + response + '\n' : '') +
					'<---- ' +
					'Status: ' +
					status +
					'\n' +
					'<---------------',
				'color:#89614A;'
			);
	}
}

export default new Ajax();
