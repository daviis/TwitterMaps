var requestNewData = function(){
	var searchTerm = document.getElementById("searchTerm").value
	var request = new XMLHttpRequest()
	var url = "http://localhost:8000/cgi-bin/TwitterMapsCGI.py?searchTerms="+searchTerm
	
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
		{
			var response = JSON.parse(request.responseText)
			console.log(response)
			addMarkers(response)
		}
	}	

	request.open("GET", URL, true)
	request.send()
}
