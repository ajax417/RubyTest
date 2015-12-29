var sys = require('sys');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
startRails(3000);

function puts(error, stdout, stderr) {sys.puts(stdout)}
function startRails(port) {
	var out = fs.openSync('./out_' + 'rails lamp app' + '.log', 'a');
	var err = fs.openSync('./out_' + 'rails lamp app' + '.log', 'a');
	console.log("Stopping and starting rail app");
		var child = spawn("ruby", ["/home/ajax/github_ruby_test/bin/rails", "server", "-p", port], {//, "server -p " + port], {
		detached: true,
		stdio: ['ignore', out, err]
	});
	child.unref();
}