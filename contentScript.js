
// 1. Create the button
var btn = document.createElement("button");
btn.setAttribute("class", "TimeButton")
btn.innerHTML = "⏱️";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(btn);

// 3. Add event handler
btn.addEventListener ("click", myFunction);

function myFunction(){
  var d = document;
	//alert("START");
	//Get all time tag in Array
  //document.body.innerHTML = "red";
	var TimeArray = d.getElementsByTagName("time");
  var i;

	// Create Loop for all Array
	for (i = 0; i < TimeArray.length; i++) {
		//TimeArray[i].style.backgroundColor = "red";

		//Get ISO time from instagram
		var ISO_Date = TimeArray[i].dateTime;
		//convert to UTC standard time with moment.js extension
		var NEW_Date = moment(ISO_Date).format('MMMM Do YYYY, h:mm:ss a');
		//Change old date to NEW date
		TimeArray[i].innerHTML = NEW_Date;
  	}
}
