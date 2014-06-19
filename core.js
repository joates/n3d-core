var server = require('./lib/server')

/* modular usage:
exports.startServer = function(opts, cb) {
	server.start(opts, cb)
}
*/

var opts = {}

opts.docroot 	= '/home/joates/code/nodejs/n3d/n3d-app'			//process.cwd()
opts.port 		= 8000

server.start(opts, function(err, msg) {
	if (err) console.error(err)

	// server running.
  console.log(msg)
})
