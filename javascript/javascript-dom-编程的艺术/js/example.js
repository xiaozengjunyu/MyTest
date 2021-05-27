function insertParagraph(text){
    var str = "<p>";
    str += text;
    str += " </p>"
    document.write(str);
};

window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserter <em> this</em> content. </p>"
    var para = document.createElement("p");
    var info = "nodeName: ";
    info +=para.nodeName;
    info += " nodeType:";
    info += para.nodeType;
    alert(info);

    
}

