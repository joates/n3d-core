var http        = require('http')
	, join        = require('path').join
	, ecstatic    = require('ecstatic')

exports.start = function(opts, cb) {

	var config	  = opts || {}
		, docroot 	= config.docroot || __dirname
		, port 			= config.port || 8000
		, server		= ecstatic({ root: join(docroot, 'public') })

	function handler(req, res) {
		if (!req.url || req.url === '/') req.url = '/index.html'
	  server(req, res)
	}

	staticServer = http.createServer()
	staticServer.on('request', handler)
	staticServer.listen(port, function(err) {
	  if (err) cb(err)

	  // else..
	  cb(null, 'server listening on port '+ port)			//'serving files from '+ join(docroot, 'public'))
	})

  // handle errors..
  process.on('uncaughtException', function (err) {
    console.log('*****************************')
    console.error('Error at:', new Date)
    console.error(err.stack)
    console.log('*****************************')
  })

}
