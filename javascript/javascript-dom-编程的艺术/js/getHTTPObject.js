function getHTTPObject(){
    if( typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try{
                return new ActiveXObject("Mxxml2.XMLHTTP.6.0");}
                catch (e){}
            try{
                return new ActiveXObject("Mxxml2.XMLHTTP.3.0");}
                catch (e){}
            try{
                return new ActiveXObject("Mxxml2.XMLHTTP.1.0");}
                catch (e){}
                return false;
        }
        return new XMLHttpRequest();
    }  
}