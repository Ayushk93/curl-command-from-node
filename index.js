var exec = require('child_process').exec,
    url = "https://google.com",

exec('curl ' + url, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
