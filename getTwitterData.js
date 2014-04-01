requestNewData = function(){
	var searchTerm = document.getElementById("searchTerm").value
	var request = new XMLHttpRequest()
	var urlSearchTerm = encodeURIComponent(searchTerm)
	
    	var URL = "http://localhost:8000/cgi-bin/TwitterMapsCGI.py?searchTerms="+urlSearchTerm
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
		{
			var response = JSON.parse(request.responseText)
			console.log(response)
			addMarkers(response)
		}else{
            console.log("response flailed")
        }
	}	

	request.open("GET", URL, true)
	request.send()
}
