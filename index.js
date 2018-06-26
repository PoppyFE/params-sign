const md5 = require('md5');

function stringify(value) {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'number') {
    return '' + value;
  }
  if (typeof value === 'string') {
    return value;
  }
  return JSON.stringify(value);
}

function sign(data, secret, options) {
	if (typeof data !== 'object') {
		throw new Error('data must be an Object!');
	}
	const contentParts = [];
	const {ignoreKeys: {}} = options;
	Object.keys(data).filter((key) => {
			if (ignoreKeys.hasOwnProperty(key) || key.startsWith('_')) {
				return false;
			}

			return true;
		})
		.sort()
		.forEach((key) => {
			contentParts.push(`${key}=${stringify(data[key])}`);
	});
	contentParts.push(`sign=${stringify(secret)}`);
	// 加hash
	return md5(contentParts.join('&'));
}

function checkSign(data, secret, signature, options) {
	return sign(data, secret, options) === signature;
}

module.exports = {
  sign,
  checkSign
};
