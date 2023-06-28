(async function (CAFE24API) {
	var script = document.createElement('script');
	script.type = 'module';
	script.onload = function () {
			console.log('podiz script start! // podiz.co.kr')
	};
	script.src = 'https://cdn.jsdelivr.net/gh/webkers/podiz-cdn@main/test/0627-1834/index.js';
	
	document.head.appendChild(script); //or something of the likes

	const getCartList = async (err, res) => {
		if (err) {
			console.log({ err });
		} else {
				console.log({ res });
		}
	}
})(CAFE24API.init({
	 client_id : 'OKIgBulXBlogAG4WeKsEhG',  // 사용할 앱의 App Key를 설정해 주세요.
	 version : '2023-03-01'   // 적용할 버전을 설정해 주세요.
}));
