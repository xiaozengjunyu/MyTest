function addLoadEvent(func){
    var oldonlad = window.onload ;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else{
        window.onload = function(){
            oldonlad();
            func();
        }
    }
}
