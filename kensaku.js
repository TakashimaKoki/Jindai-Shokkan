//店名一覧
var tenmei = {
	/*
		千円を、超えない・超える
		ジャンルは、ご飯・麺・パン・カフェ
	*/

	11:'cafedoudou',
	12:'katou',
	13:'rupan',
	14:'g2cafe',
	21:'sarisari',
	22:'nakaya',
	24:'coffeebunmei'
};

//ラジオボタンの判定　と　一覧からの取得
function kensaku(){
	let a1 = document.getElementsByName('q1');
	let A1 = '';
	let a2 = document.getElementsByName('q2');
	let A2 = '';
	
	for (let i=0; i<a1.length; i++){
		if (a1.item(i).checked) A1 = a1.item(i).value;
	}
	for (let i=0; i<a2.length; i++){
		if (a2.item(i).checked) A2 = a2.item(i).value;
	}

	var ans = A1 + A2;
	console.log(ans + ":" + tenmei[ans]);
	
	if (ans in tenmei){
		window.location.href = "omise/" + tenmei[ans] + "/" + tenmei[ans] + '.html';
	}else{
		window.location.href = 'JUNBICHU.html';
	}
}



//本棚検索の作りかけ
function book_button(tag_name){
	window.location.href = "OMISELIST.html";

	console.log(tag_name);
	const tag = document.getElementsByName(tag_name);
	console.log(tag);

	tag[0].checked = true;
}