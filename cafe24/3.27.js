(async function (CAFE24API) {
    if (document.getElementById("podiz-app")) {
      var link = document.createElement("link");
      link.href =
        "https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/3.27/index.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";
      document.getElementsByTagName("head")[0].appendChild(link);

      var script = document.createElement("script");
      script.type = "module";
      script.onload = function () {
        console.log("podiz script start! // podiz.co.kr");
      };
      script.src =
        "https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/3.27/index.js";

      document.head.appendChild(script); //or something of the likes
    }  
})(
  CAFE24API.init({
    client_id: "OKIgBulXBlogAG4WeKsEhG", // 사용할 앱의 App Key를 설정해 주세요.
    version: "2023-03-01", // 적용할 버전을 설정해 주세요.
  })
);
