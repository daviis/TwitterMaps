requestNewData = function(){
	var searchTerm = document.getElementById("searchTerm").value
	var request = new XMLHttpRequest()
	var urlSearchTerm = encodeURIComponent(searchTerm)
<<<<<<< HEAD
	var url = "http://localhost:8000/cgi-bin/TwitterMapsCGI.py?searchTerms="+ urlSearchTerm
	
=======
    var URL = "http://localhost:8000/cgi-bin/TwitterMapsCGI.py?searchTerms="+urlSearchTerm
    console.log("passed URL")
>>>>>>> 5d63df30a54e732f85fc359d42a817696d6993c9
	request.onreadystatechange = function(){
        console.log("7 | 8")
		if(request.readyState == 4 && request.status == 200)
		{
			var response = JSON.parse(request.responseText)
			console.log(response)
			addMarkers(response)
		}else{
            console.log("response flailed")
        }
	}	

	request.open("GET", url, true)
	request.send()
}
