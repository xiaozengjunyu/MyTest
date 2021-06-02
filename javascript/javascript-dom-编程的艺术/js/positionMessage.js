function postionMessage(){
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.right = "100px";
    movement = setTimeout("moveMessage()",200,100,10);
}
addLoadEvent(postionMessage);