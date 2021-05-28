function getNewContent(){
    var request = getHTTPObject();
    if(request){
//当浏览器加载完成时候，发送一个 GET 请求，请求与 ajax.html 文件位于同一目录的 example.txt 文件
        request.open("GET","example.txt",true);
// onreadystatechange 事件处理函数，在服务器给 XMLHttpRequest 送回响应的时候被触发
        request.onreadystatechange = function(){    //函数后面加括号表示立即调用函数
    //readyState 属性访问服务器发送回来数据
            if(request.readyState == 4){    //当 readyState 值变成4时
                var para = document.createElement("p");    // 创建新元素节点
                var txt = document.createTextNode(request.responseText);    //从 responseText 属性获取文本数据
                para.appendChild(txt);  //将数据存放段落中
                document.getElementById('new').appendChild(para);   //将段落添加到 DOM 里
            }
        };
        request.send(null);
    }else{
        alert('Sorry, your browser doesn\'t support XMLHttpRequest');
    }
    alert("Function Done");
}
addLoadEvent(getNewContent);