function calcFPS(opts){
    var requestFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame;
    if (!requestFrame) return true; // Check if "true" is returned; 
                                    // pick default FPS, show error, etc...
    function checker(){
        if (index--) requestFrame(checker);
        else {
            // var result = 3*Math.round(count*1000/3/(performance.now()-start));
            var result = count*1000/(performance.now()- start);
            if (typeof opts.callback === "function") opts.callback(result);
            console.log("Calculated: "+result+" frames per second");
        }
    }
    if (!opts) opts = {};
    var count = opts.count||60, index = count, start = performance.now();
    checker();
}
