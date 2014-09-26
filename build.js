/**
 * flash-audio build script
 *
 * Working command
 * node_modules/flex-sdk/bin/mxmlc src/FlashAudio.as -o flash-audio2.swf
 */
var spawn = require('child_process').spawn,
    mxmlc = 'node_modules/flex-sdk/bin/mxmlc',
    output = 'flash-audio.swf',
    args = [
        'src/FlashAudio.as',
        '-o', output
    ];

function test() {
    var http = spawn('http-server', ['-o']);

    setTimeout(function(){
        http.kill();
    }, 2000);
}

var compiler = spawn(mxmlc, args);

compiler.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
});

compiler.on('exit', function (code) {
    if(code == 0) {
        console.log('Wrote to ' + output);
        test();
    } else {
        console.error('Build failed');
    }
});
