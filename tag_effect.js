function tag_effect(){
	let tag_ids = document.querySelectorAll("[id$='_checked']")
	console.log(tag_ids)
	// console.log(tag_ids.length)

	$("li").css('display', 'block')


	for (var i=0; i<tag_ids.length; i++){
		// console.log(tag_ids[i])

		var tag_name = tag_ids[i].getAttribute("name");
		// console.log(tag_name)

		tag_name = "." + tag_name;
		// console.log(tag_name);

		// console.log(tag_ids[i].checked)
		if(!(tag_ids[i].checked)) {
			$("li").not(tag_name).css('display', 'none')
		}

	}
}
