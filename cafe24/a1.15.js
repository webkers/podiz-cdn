(async function (CAFE24API) {
    var podizAppElement = document.getElementById("podiz-app");
    
    if (!podizAppElement) {
        podizAppElement = document.createElement("div");
        podizAppElement.id = "podiz-app";
        document.body.appendChild(podizAppElement);
    }

    var link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/a1.15/index.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);

    var script = document.createElement("script");
    script.type = "module";
    script.onload = function () {
        console.log("podiz script start! // podiz.co.kr");
    };
    script.src = "https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/a1.15/index.js";

    document.head.appendChild(script);
})(
    CAFE24API.init({
        client_id: "OKIgBulXBlogAG4WeKsEhG", // 사용할 앱의 App Key를 설정해 주세요.
        version: "2023-03-01", // 적용할 버전을 설정해 주세요.
    })
);
