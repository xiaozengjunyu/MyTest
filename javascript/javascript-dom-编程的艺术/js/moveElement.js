function moveMessage(){
    if( !document.getElementById) return false;
    if( !document.getElementById("message") ) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);

    console.log(ypos);
    var ypos = parseInt(elem.style.top);
    
    // if(!xpos ){
    //     xpos = 0;
    // }

    if(!ypos ){
        ypos = 0;
    }
   
    if(xpos == 200 && ypos == 100){
        return true;
    }

    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }

    if(ypos < 200 ){
        ypos++;
    }
    if(ypos > 200 ){
        ypos--;
    }
    
    elem.style.left = xpos + "px";
    elem.style.top = ypos +"px";
    movement = setTimeout( "moveMessage()", 10);
}
