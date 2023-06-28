(async function (CAFE24API) {
	console.log({ CAFE24API });
	var script = document.createElement('script');
	script.onload = function () {
			//do stuff with the script
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
