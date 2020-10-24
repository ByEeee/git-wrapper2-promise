var Git = require('git-wrapper2-promise')

var dir = "D:\\workspace\\git_test"
var repo = 'https://github.com/ByEeee/nodegit.git'
var git = new Git({'git-dir': dir});
var filename =['D:\\workspace\\git_test\\git.js','D:\\workspace\\git_test\\commands.js','D:\\workspace\\git_test\\index.js']
var remote = 'origin' 
var branch = 'master'
// git.isRepo().then(function(isRepo) {
// 	console.log('isRepo:', isRepo);
// }).catch(function(err) {
// 	console.error(err);
// });

// git.status().then(function(childProcess) {
// 	console.log(childProcess.stdout.toString());
// }).catch(function(err) {
// 	console.error(err);
// });

git.add(filename).then(function(childProcess) {
	console.log(childProcess.stdout.toString());
}).catch(function(err) {
	console.error(err);
});

// var msg = "\"测试\""
// git.commit(msg).then(function(childProcess) {
// 	console.log(childProcess.stdout.toString());
// }).catch(function(err) {
// 	console.error(err);
// });

// git.clone(repo, dir).then(function(childProcess) {
// 	console.log(childProcess.stdout.toString());
// }).catch(function(err) {
// 	console.error(err);
// });

// git.isRepo().then(function(isRepo) {
// 	console.log('isRepo:', isRepo);
// }).catch(function(err) {
// 	console.error(err);
// });

// git.push(remote, branch).then(function(childProcess) {
// 	console.log(childProcess.stdout.toString());
// }).catch(function(err) {
// 	console.error(err);
// });

git.pull(remote, branch).then(function(childProcess) {
	console.log(childProcess.stdout.toString());
}).catch(function(err) {
	console.error(err);
});
// var spawn = require('child_process').spawn

// ls = spawn('cmd.exe', ['/c','D:\\workspace\\test_demo\\dir.bat']);

// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

// ls.on('exit', function (code) {
//   console.log('child process exited with code ' + code);
// });