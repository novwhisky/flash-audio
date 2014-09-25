/**
 * flash-audio build script
 *
 * Working command
 * node_modules/flex-sdk/bin/mxmlc src/FlashAudio.as -o flash-audio2.swf
 */
var exec = require('child_process').exec;

exec('mxmlc', function(err, stdout, stderr) {
    if(err) throw err;
    else console.log(stdout);
});