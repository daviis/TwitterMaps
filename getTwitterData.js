var requestNewData = function(){
	var searchTerm = document.getElementById("searchTerm").value
	var request = new XMLHttpRequest()
	var urlSearchTerm = encodeURIComponent(searchTerm)
	var url = "http://localhost:8000/cgi-bin/TwitterMapsCGI.py?searchTerms="+ urlSearchTerm
	
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
		{
			var response = JSON.parse(request.responseText)
			console.log(response)
			addMarkers(response)
		}
	}	

	request.open("GET", url, true)
	request.send()
}
