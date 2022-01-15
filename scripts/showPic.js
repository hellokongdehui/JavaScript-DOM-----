function showPic(whichpic) {
    // 切换显示图片
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");  // 获取href属性
    var placeholder = document.getElementById("placeholder");  // 获取元素
    if (placeholder.nodeName != "IMG") return false;  //检查placeholder是否存在 p87
    placeholder.setAttribute("src", source);  // 设置元素src属性

    // 切换描述文字
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";  // ?(三元操作符)，问号后面是变量text的两种可取值 p87
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {  // 检查是否为文本节点 p87
            description.firstChild.nodeValue = text;
        }
    }
    return false;
}

// 计算body元素下的子元素数量
function countBodyChildren(){
    var body_elements = document.getElementsByTagName("body")[0];
    // alert("body元素共有"+ body_elements.childNodes.length + "个子元素");
}

// 在页面加载时调用countBodyChildre元素
window.onload = countBodyChildren;

// 6.3.1 添加事件处理函数
function preparaGallery() {
    if (!document.getElementsByTagName) return false;  //  如果getElementsByTagNmae未定义，请现在离开
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++ ) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        }   
    }
}

// 6.3.2 共享onload事件
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            onload();
            func();
        }
    }
}
addLoadEvent(preparaGallery);