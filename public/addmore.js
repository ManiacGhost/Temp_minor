var count=1;
function add_morefield1()
{
    count+=1
    html='<table>\
        <form class = "form-main" id="entry_form1 '+count+'">\
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
                <input type="text" class="form-control" name="t1 '+count+'" value="1" placeholder=""/>\
            </td>\
            <td>\
                <input type="text" name="t2" class="form-control '+count+'" value="" placeholder=""/>\
            </td>\
            <td>\
                <input type="checkbox" name="c1'+count+'" value ="" placeholder="">Week < 1</input><br>\
                <input type="checkbox" name="c2 '+count+'" value ="" placeholder="">Week < 2 </input><br>\
                <input type="checkbox" name="c3 '+count+'" value ="" placeholder="">Week > 2</input><br>\
            </td>\
            <td>\
                <label>From</label>\
                <input type="date" name="d1 '+count+'" value="date1" placeholder =""/><br>\
                <label>To</label>\
                <input type="date" name="d2 '+count+'" value="date2" placeholder=""/><br>\
            </td>\
            <td>\
                <input type="text" name="t3 '+count+'" class="form-control" value="" size="40"/>\
            </td>\
            <td>\
                <input type="text" name="t4 '+count+'" class="form-control" value=""/>\
            </td>\
            <td>\
                <input type="text" name="t5 '+count+'" class="form-control" value="" size="40"/>\
            </td>\
            <br/>\
        </tr>\
        </form>\
    </table>'
    var form = document.getElementById('item_11')
    form.innerHTML+=html
}

function add_morefield2()
{
    count+=1
    html='<table>\
					 <tr>\
						<th>S.no</th>\
						<th>Course Code</th>\
						<th>Couse Title</th>\
						<th>Contact Hours/week</th>\
						<th>Total no. of scheduled classes in semester</th>\
						<th>Total no. of engaged classes in semester</th>\
						<th>API score</th>\
						<th>HOD remarks</th>\
					 </tr>\
					 <tr>\
						<td>\
							<input type="text" value="1" name="a1'+count+'" class="form-control" placeholder=""/>\
						</td>\
						<td>\
							<input type="text" value="" name="a2 '+count+'" class="form-control " placeholder=""/>\
						</td>\
						<td>\
							<input type="text" value ="" name="a3'+count+'" class="form-control " placeholder=""/>\
						</td>\
						<td>\
							<input type="text" value="" name="a4'+count+'" class="form-control " placeholder=""/>\
						 </td>\
						<td>\
							<input type="text" name="a5'+count+'" class="form-control" value=""/>\
						</td>\
						<td>\
							<input type="text" name="a6'+count+'" class="form-control " value=""/>\
						</td>\
						<td>\
							<input type="text" name="a7'+count+'" class="form-control " value=""/>\
						</td>\
						<td>\
							<input type="text" name="a8'+count+'" class="form-control " value=""/>	\
						</td>\
						<br/>\
					 </tr>\
				</table>'
                
    var form = document.getElementById('item12')
    form.innerHTML+=html
				
}
function add_morefield3()
{
    count+=1
    html='<form class = "form-main">\
					<div class = "form-block">\
					<table>\
						 <tr>\
							<th>S.no</th>\
							<th>Course Code</th>\
							<th>Couse Title</th>\
							<th>Contact Hours/week</th>\
							<th>Total no. of scheduled classes in semester</th>\
							<th>Total no. of engaged classes in semester</th>\
							<th>API score</th>\
							<th>HOD remarks</th>\
						 </tr>\
						 <tr>\
							<td>\
								<input type="text" value="1 '+count+'" placeholder=""/>\
							</td>\
							<td>\
								<input type="text" value="'+count+'" placeholder=""/>\
							</td>\
							<td>\
								<input type="text" value ="'+count+'" placeholder=""/>\
							</td>\
							<td>\
								<input type="text" value="'+count+'" placeholder=""/>\
							 </td>\
							<td>\
								<input type="text" value="'+count+'"/>\
							</td>\
							<td>\
								<input type="text" value="'+count+'"/>\
							</td>\
							<td>\
								<input type="text" value="'+count+'"/>\
							</td>\
							<td>\
								<input type="text" value="'+count+'"/>\
							</td>\
							<br/>\
						 </tr>\
					</table>\
				</form>'
                
    var form = document.getElementById('item13')
    form.innerHTML+=html
				
}
function add_morefield4()
{
    count+=1
    html='<div class = "form-block">\
           <table>\
                            <form class = "form-main" id="entry_form1 '+count+'">\
							 <tr>\
								<th>S.no</th>\
								<th>Course Code</th>\
								<th>Knowledge resource consulted</th>\
								<th>Knowledge resource prescribed</th>\
								<th>Additional resources provided</th>\
								<th>API score</th>\
								<th>HOD remarks</th>\
							 </tr>\
							 <tr>\
								<td>\
									<input type="text" name="t1 '+count+'" value="1" placeholder=""/>\
								</td>\
								<td>\
									<input type="text" name="t2 '+count+'" value="" placeholder=""/>\
								</td>\
								<td>\
									<input type="text" name="c1'+count+'" value ="" placeholder=""/>\
								</td>\
								<td>\
									<input type="text" name="z2'+count+'" value=""/>\
								 </td>\
								<td>\
									<input type="text" name="t3 '+count+'" value="" size="40"/>\
								</td>\
								<td>\
									<input type="text" name="t4 '+count+'" value=""/>\
								</td>\
								<td>\
									<input type="text" name="t5 '+count+'" value="" size="40"/>\
								</td>\
								<br/>\
							 </tr>\
							</form>\
						</table>'
     var form = document.getElementById('item14')
     form.innerHTML+=html
}
function add_morefield5()
{
    count+=1
    html='<form id="item15">\
									<div class = "form-block">\
									<table>\
										<form class = "form-main" id="entry_form1">\
										 <tr>\
											<th>S.no</th>\
											<th>No. of Projects guided</th>\
											<th>HOD remarks</th>\
										 </tr>\
										 <tr>\
											<td>\
												<input type="text" name="t1 '+count+'" value="1" placeholder=""/>\
											</td>\
											<td>\
												<input type="text" name="t2 '+count+'" value="" placeholder=""/>\
											</td>\
											<td>\
												<input type="text" name="t3 '+count+'" value=""/>\
											</td>\
										</form>\
									</table>\
								</form>'
                                var form = document.getElementById('item15')
                                form.innerHTML+=html
}
function add_morefield6()
{
    count+=1
    html='<form id="item16">\
    <div class = "form-block">\
    <table>\
        <form class = "form-main" id="entry_form1 '+count+'">\
         <tr>\
            <th>S.no</th>\
            <th>Activity</th>\
            <th colspan="3">UG</th>\
            <th colspan="3">PG</th>\
            <th>API Score</th>\
         </tr>\
         <tr>\
            <td colspan ="2">&nbsp</td>	\
            <td style="width: 20px;">T1</td>\
            <td style="width: 20px;">T2</td>\
            <td style="width: 20px;">T3</td>\
            <td style="width: 20px;">T1</td>\
            <td style="width: 20px;">T2</td>\
            <td style="width: 20px;">T3</td>\
        </tr>\
        <tr>\
            <td>\
                <input type="text '+count+'" value=""/>\
            </td>\
        <td>\
            <input type="text '+count+'" value=""/>\
        </td>\
        </tr>\
        </form>\
    </table>\
</form>'
var form = document.getElementById('item16')
form.innerHTML+=html
}