# testFPS
A robust method for testing FPS in browser, using the requestAnimationFrame method

    calcFPS();
    
Only logs to console (you can remove the console log, making this call redundant)

    calcFPS({count: 30});
    
Manually set count (this test should take 500ms on a 60FPS monitor).

    calcFPS({callback: useFPS});
    
Specify a callback so you can use the FPS value

    var FPS = 0, err = calcFPS({count: 120, callback: fps => FPS = fps});
    if (err) FPS = 30;
