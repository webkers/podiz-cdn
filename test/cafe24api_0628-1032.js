(async function (CAFE24API) {

	var script = document.createElement('script');
	script.type = 'module';
	script.onload = function () {
			console.log('podiz script start! // podiz.co.kr')
	};
	script.src = 'https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/test/0628-1013/index.js';
	
	document.head.appendChild(script); //or something of the likes

})(CAFE24API.init({
	 client_id : 'OKIgBulXBlogAG4WeKsEhG',  // 사용할 앱의 App Key를 설정해 주세요.
	 version : '2023-03-01'   // 적용할 버전을 설정해 주세요.
}));
