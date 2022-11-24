var countre = 1;
function add_morefield(){
	countre+= 1;
	html='<div class = "form-block">\
	<table>\
		<form class = "form-main" id="entry_form'+countre+'">\
		 <tr>\
			<th>S.no</th>\
			<th>Title</th>\
			<th>Weeks</th>\
			<th>Duration</th>\
			<th>Sponsoring agency and organization and place held</th>\
			<th>API score</th>\
			<th>HOD remarks</th>\
		 </tr>\
		 <tr>\
			<td>\
				<input type="text" name="t'+countre+'" value="1" placeholder=""/>\
			</td>\
			<td>\
				<input type="text" name="t'+countre+'" value="" placeholder=""/>\
			</td>\
			<td>\
				<input type="checkbox" name="c'+countre+'" value ="" placeholder="">weekOption1</input><br/>\
				<input type="checkbox" name="c'+countre+'" value ="" placeholder="">weekOption2</input><br/>\
				<input type="checkbox" name="c'+countre+'" value ="" placeholder="">weekOption3</input><br/>\
			</td>\
			<td>\
				<label>FROM</label>\
				<input type="date" name="d'+countre+'" value="date1" placeholder =""/><br/>\
				<label>TO</label>\
				<input type="date" name="d'+countre+'" value="date2" placeholder=""/>\
			 </td>\
			<td>\
				<input type="text" name="t'+countre+'" value="" size="100"/>\
			</td>\
			<td>\
				<input type="text" name="t'+countre+'" value=""/>\
			</td>\
			<td>\
				<input type="text" name="t'+countre+'" value="" size="100"/>\
			</td>\
			<br/>\
		 </tr>\
		</form>\
	</table>\
	<button class="button" onclick="add_morefield()">Add More</button>\
	</div>'
	var form = document.getElementById('entry_form1')
	form.innerHTML+=html
}