var _options = process.argv.slice(2);
var _xliff = _options[0];
var _xfile = null;
fs = require('fs');
fs.readFile(_xliff, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	_xfile = data;
	console.log("searching in...", _xliff);
	console.log(_xfile);
	var _regex = /id=".*"/gim;
	var _index = 0;
	_xfile = _xfile.replace(_regex, function () {
			++_index;
			return 'id="' + _index + '"';
		});
	console.log("replaced " + _index + " occurrences");
	if (_index > 0) {
		fs.writeFile(_xliff, _xfile, function (err) {
			if (err) {
				console.log(err);
			}
		});
	};
});
