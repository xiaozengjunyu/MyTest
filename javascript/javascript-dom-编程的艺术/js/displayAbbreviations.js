function displayAbbreviations(){
    if(document.getElementsByTagName || document.createElement ||document.createTextNode) return false;
    //获取 abbr 元素 赋值给 abbreviations
    var abbreviations = document.getElementsByName("abbr");
    //判断文档是否有 abbr 元素，如果没有就返回 false
    if( abbreviations.length < 1 ) return false;
    //创建一个数组
    var defs = new Array();
    //创建循环遍历这个文档中所有的 abbr 元素
    for(var i = 0 ;i <abbreviations.length; i++ ){
        var current_abbr = abbreviations[i];
        //获取文档中 abbr 元素中的 title 属性的赋值
        var definition = abbreviations[i].getAttribute("title");
        //获取所有文本节点的 nodeValue 属性
        var key = abbreviations[i].lastChild.nodeValue;
        //用于储存数组的下标
        defs[key] = definition;
    }

    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[i];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(key);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Niubi class");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}