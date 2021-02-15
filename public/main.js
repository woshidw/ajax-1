let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML; //responseXML自动把信息变成对象。这是一个dom对象，dom对象不只是用于html还可以用于xml。
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //创建div
    const div = document.createElement("div");
    //填写div内容
    div.innerHTML = request.response;
    //把它插到body里
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

//用AJAX请求JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建 script 标签
    const script = document.createElement("script");
    // 填写 script 内容
    script.innerHTML = request.response;
    // 插到身体里
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

//用AJAX请求CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyState = 1
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS失败");
      }
    }
  };
  request.open("GET", "/style.css"); //readyState = 1
  request.send(); //readyState = 2
};
