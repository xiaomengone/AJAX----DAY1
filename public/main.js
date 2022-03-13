// 1:请求css
let getCss = document.querySelector('#getCss');
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style)
            }
            else {
                alert("加载失败");
            }
        }
    }
    request.send()
}
//2:请求js
let getJs = document.querySelector('#getJs')
getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/js.js');
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.body.appendChild(script);
            }
            else {
            alert("加载失败");
            }
        }
    }
    request.send();
}
//3:请求HTML
let getHTML = document.querySelector('#getHTML');
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','./fj.html');
    request.onreadystatechange = () => {
       if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const html = document.createElement('html');
                html.innerHTML = request.response;
                document.body.appendChild(html)
            }
            else {
                alert("加载失败");
            }
       }
    }
    request.send();
}
//4:请求xml
const getXml = document.querySelector("#getXml");
getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','./a.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
               const dom = request.responseXML;
               const text = dom.getElementsByTagName('warning')[0].textContent
               console.log(text.trim());
            }
            else {
                alert("加载失败");
            }
        }
    }
    request.send();
}
//5:加载 JSON               用JSON代替XML
const getJson = document.querySelector('#getJson');
getJson.onclick = () => {
    let request = new XMLHttpRequest();
    request.open('GET','./a5.json');
    request.onreadystatechange = () => {
       if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)           //将符合json的字符串，转化为对象或其他东西
                let myname = document.querySelector('#myname');
                myname.textContent = object.name;
            }
       }
    }
    request.send();
}
//6:请求下一页
let n=1;
let getPage = document.querySelector('#getPage');
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n + 1}.json`);
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    page.appendChild(li);
                });
                n+=1;
                console.log(n);
            }
            else {
                alert('加载失败');
            }
             
        }
        
    }
    request.send();
}
















