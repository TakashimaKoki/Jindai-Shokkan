function time_cb(obj) {
	let that = obj;
	if (document.getElementById(that.id).checked == true) {
		let boxes = document.querySelectorAll('input[name="time"]');

		for (let i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		document.getElementById(that.id).checked = true;
	}
}

function yosan_cb(obj) {
	let that = obj;
	if (document.getElementById(that.id).checked == true) {
		let boxes = document.querySelectorAll('input[name="yosan"]');

		for (let i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		document.getElementById(that.id).checked = true;
	}
}

function genre1_cb(obj) {
	let that = obj;
	if (document.getElementById(that.id).checked == true) {
		let boxes = document.querySelectorAll('input[name="genre1"]');

		for (let i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		document.getElementById(that.id).checked = true;
	}
}

function genre2_cb(obj) {
	let that = obj;
	if (document.getElementById(that.id).checked == true) {
		let boxes = document.querySelectorAll('input[name="genre2"]');

		for (let i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		document.getElementById(that.id).checked = true;
	}
}

function point_cb(obj) {
	let that = obj;
	if (document.getElementById(that.id).checked == true) {
		let boxes = document.querySelectorAll('input[name="point"]');

		for (let i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		document.getElementById(that.id).checked = true;
	}
}