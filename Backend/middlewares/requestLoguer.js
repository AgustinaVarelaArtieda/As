module.exports=(req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // . Permite las solicitudes desde el origen 'http://localhost:3000' o *
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
};