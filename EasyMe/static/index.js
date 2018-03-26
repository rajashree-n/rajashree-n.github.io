$(document).ready(() => {
	$('#memosubmit').on('click', () => {
		let memoStr = $('#memofield').val();
		$.post(
			'http://localhost:8080/addmemo',
			{ memo: memoStr },
			(data, status) => {
				if(data) {
					console.log(data);
				}
			}
		);
	});

	$('#contactsubmit').on('click', () => {
		let name = $('#contactname').val();
		let email = $('#contactemail').val();
		let phone = $('#contactphone').val();
		console.log('submitted');
		$.post(
			'http://localhost:8080/addcontact',
			{ name: name, email: email, phone: phone },
			(data, status) => {
				if(data) {
					console.log(data);
				}
			}
		);
	});

	$.ajax({
		url: 'http://localhost:8080/getcontacts',
		success: (result) => {
			for(let i=0; i<result['data'].length; i++) {
				$('#contactresult').append('<tr><th style="text-align:left;">' + result["data"][i]["name"]+ '</th><th style="text-align:left;">' + result["data"][i]["email"] + '</th><th style="text-align:left;">' + result["data"][i]["phone"] + '<th></tr>'); 
			}
		}
	});

	$.ajax({
		url: 'http://localhost:8080/getmemos',
		success: (result) => {
			for(let i=0; i<result['data'].length; i++) {
				//console.log(result['data']);
				$('#memoresult').append('<tr><th>' + i + ':<th style="text-align: center;">' + result["data"][i]["memo"] + '</th></th></tr>'); 
			}

		}
	});
});
