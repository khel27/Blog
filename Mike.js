 
		function postBlog(){
				var title = document.getElementById("TITLE").value;
				var Firstname = document.getElementById("fname").value;
				var Middlename = document.getElementById("mname").value;
				var Lastname = document.getElementById("lname").value;
				var Content = document.getElementById("Content").value;

				document.getElementById("submit-title").innerHTML = title;
				document.getElementById("author").innerHTML = Firstname + " " + Middlename + " " + Lastname;
				document.getElementById("submit-content").innerHTML = Content;




		}

