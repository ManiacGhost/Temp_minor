import React from "react";

function Navbar(){
    return (
        <div>
            <section id="navabv">
			<nav>
				<ul>
					<li>Jaypee Institute of Infomation Technology</li>
				</ul>
				<ul>
					<li><a href="MainForm.html">Form</a></li>
					<li><a href="https://webportal.jiit.ac.in:6010/employeeportal/">Webportal</a></li>
					<li>
						<a href="#">Forms</a>
						<ul class="dropdown">
							<li><a href="#">Orientation</a></li>
							<li><a href="#">Teacher's Guidance</a></li>
							<li><a href="#">Reading Material</a></li>
							<li><a href="#">Examination Duties</a></li>
						</ul>
					</li>
					<ul class="dropdown"><li><a href="https://webportal.jiit.ac.in:6010/employeeportal/">creators</a></li></ul>
				</ul>
			</nav> 

			  
		</section>

        </div>
    );

}
export default Navbar;