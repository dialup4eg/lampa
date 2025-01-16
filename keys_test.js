(function() {
    'use strict';

    let time = 0;

    const noHoverStyle = document.createElement("style");
    noHoverStyle.innerHTML = "* { pointer-events: none !important; }";
    document.head.appendChild(noHoverStyle);

    // document.addEventListener("keydown", function (e) {
    //     var code = e.code;
    //     Lampa.Noty.show('keydown code: '+ code);        
    // });
    
    document.addEventListener("mouseup", function (e) {    
        e.preventDefault();
        
        Lampa.Controller.enter();
    });


    
    // https://github.com/yumata/lampa-source/blob/main/src/interaction/keypad.js
    document.addEventListener("mousemove", function (e) {
    	e.preventDefault();
        
        if (time > Date.now() - 100) return
    	time = Date.now();
        
        var button = e.button;
        var movementX = e.movementX;
        var movementY = e.movementY;
        if (movementX < 0) {
            Lampa.Controller.move('left');            
        } else if (movementX > 0) {
            Lampa.Controller.move('right');
        } else if (movementY < 0) {
            Lampa.Controller.move('up');
        } else if (movementY > 0) {
            Lampa.Controller.move('down');
        }

        // Lampa.Noty.show('mouse move, button: ' + button + ', movementX: ' + movementX);
    });
 
})();
