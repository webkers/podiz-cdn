(async function (CAFE24API) {
	console.log({ CAFE24API });
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
