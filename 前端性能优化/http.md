# HTTP
 * HTTP
   *  一、基础概念
      *  1.（HTTP 请求报文格式）
      *  2.（HTTP 响应报文格式）
   * HTTP 方法
   * GET

## 一、基础概念 

### 1.HTTP 请求报文格式
 HTTP 的请求报文分为三个部分：请求行、请求头、请求体

 #### 1.1（请求行）
 请求行分为三个部分：请求方法、请求地址、协议及版本。  
 HTTP 定义的请求方法有八种：GET、POST、PUT、DELETE、PATCH、HEAD、OPTLONS、TRACE最为常见的为 GET、POST。  
 <img src=./前端性能优化小知识/images/02.jpg   width="80%"></img>

## HTTP 方法

### GET
通常用于请求服务器发送某个资源，并且请求资源不会影响资源的状态

### POST
用于向服务器提交数据，有四种提交数据的方式

### PUT
用于传输文件，但是由于 PUT 本身不带任何验证，所有安全性会有问题

### PATCH
用于更新修改资源，允许使用部分修改

### DELETE
用于删除文件，同样不具备验证机制

### HEAD
用于确认 URL 的有效性以及资源更新的日期时间

### OPTIONS
用于查询指定的 URL 能够支持的方法

### TRACE
用于服务器将通信路径返回给客户端

## HTTP 状态码
<span>当一个用户访问浏览器，浏览器就会向该页面的服务器发送请求，当浏览器接收并显示网页前，此服务器会返回一个 HTTP 的状态码的信息头，用于响应浏览器的请求。</span>

|状态码|类别|含义|
| :-  | :- | :- |
| 1XX | Informational（信息状态码） | 请求接收正在处理中 |
| 2XX | Success（成功状态码） | 请求正常处理完毕 |
| 3XX | Redirection（重定向状态码） | 需要进行附加操作以完成请求 |
| 4XX | Client Error（客户端错误状态码） | 服务器无法处理请求 |
| 5XX | Server Error（服务器错误状态码） | 服务器处理请求出错 |
 
#### 1XX 状态码
 * 100：Continue 表明到现在为止都正常，客户端可继续发送请求
 * 101：Switching Protocols 服务器根据客户端的请求切换协议，只可低改高
  
#### 2xx 状态码
 * 200：ok 请求成功。
 * 201：Created 已创建。成功请求并创建了新的资源。
 * 202：Accepted 已接受。已经接受请求，并未处理完成。
 * 203：Non-Authoritative Information 请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本
 * 204：No Content 无内容。服务器成功处理，但未返回内容。
 * 205：Reset Content 重置内容。服务器处理成功，终端重新加载文档视图。
 * 206：Partial Content 部分内容。服务器已经处理部分 GET 请求。

#### 3xx 状态码
* 300：Multiple Choices	多种选择。请求资源可包括多个，相应返回一个资源特征与地址的列表用于终端选择。
* 301：Moved Permanently 永久移动。请求资源永久移动新到 URL，浏览器自动重定向。
* 302：Found 临时移动。资源被临时移动，客户端继续使用原有 URL 。
* 303：See Other	查看其它地址。使用 GET、PUST 请求查看。
* 304：Not Modified 未修改。请求报文首页包含条件，不满足条件则返回 304 状态码。
* 305：Use Proxy：使用代理。所请求的资源必须通过代理访问。
* 307：Temporary Redirect	临时重定向。使用 GET 重定向。

#### 4xx 状态码
* 400：Bad Request 服务端请求的语法错误。
* 401：Unauthorized 请求需要认证信息。
* 402：Payment Required	保留将来使用。
* 403：Forbidden 服务器理解客户端请求，但是拒绝执行。
* 404：Not Found 无法通过请求查找到资源。
* 405：Method Not Allowed 客户端请求中的方法被禁止。
* 406：Not Acceptable 服务器无法通过客户端请求的内容特性完成请求。
* 407：Proxy Authentication Required 请求要求代理的身份认证。 
* 408：Request Time-out 服务器等待客户端发生请求超时。
* 409：Conflict 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突。
* 410：Gone 客户端请求的资源已经不存在。如果资源以前有现在被永久删除了可使用410代码，然后通过301代码指定资源的新位置。
* 411：Length Required 服务器无法处理客户端发送的不带 Content-Length （HTTP 消息长度）的请求信息。
* 412：Precondition Failed	客户端请求信息的先决条件错误。
* 413：Request Entity Too Large 由于请求的实体过大，服务器无法处理，因此拒绝请求。
* 414：Request-URI Too Large 请求的 URL 过长。
* 415：Unsupported Media Type 服务器无法处理请求附带的媒体格式。
* 416：Requested range not satisfiable 客户端请求的范围无效。
* 417：Expectation Failed 服务器无法满足Expect的请求头信息

#### 5XX 状态码
* 500：Internal Server Error 服务器正在执行请求时发生错误。
* 501：Not Implemented 服务器不支持请求的功能。
* 502：Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。
* 503：Service Unavailable 服务器处于超负荷停机维护状态，无法处理请求。
* 504：Gateway Time-out	充当网关或代理的服务器，未及时从远端服务器获取请求。
* 505：HTTP Version not supported 服务器不支持请求的版本。





