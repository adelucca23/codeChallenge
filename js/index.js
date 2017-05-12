$(document).ready(function(){

	//central location for all valiable definitions and funtion inits for easy reference and tracking
	var initialize = function(){

		const modal = $('#loginModal'),
			  close = $(".close"),
		 	  loginBtn = $(".loginBtn"),
		 	  table = $(".gridTable"),
		 	  newsTab = $("#newsTab"),
		 	  archiveTab = $("#archiveTab"),
		 	  newsContent = $("#news"),
		 	  archiveContent = $("#archive");

		const tableData = {
			 "products": [
			  {
			    "name": "Big Guy Financial",
			    "apy": 0.75,
			    "earnings": 376.41
			  },
			  {
			    "name": "URBank",
			    "apy": 0.87,
			    "earnings": 436.89
			  },
			  {
			    "name": "Dewey, Cheatam & Howe",
			    "apy": 0.01,
			    "earnings": 5.00
			  },
			  {
			    "name": "First Onion",
			    "apy": 0.01,
			    "earnings": 5.00
			  },
			  {
			    "name": "Bank of Everywhere",
			    "apy": 0.01,
			    "earnings": 5.00
			  }
			]
		};

		populateTable(tableData, table);
		loginModal(modal, close, loginBtn);
		tabToggle(newsTab, archiveTab, newsContent, archiveContent);
	}();

	//function that loops through JSON data object and populates a data table with the information
	function populateTable(data, table){
		//append table headers first
		table.append("<tr class='dataHead'><th></th><th class='light'>Annual Percentage Yield</th><th class='light'>Est. Earnings for 1 Year*</th></tr>");
		for(var x = 0; x < data.products.length; x++){
			var row = data.products[x];
			var earningsFormatted = row.earnings.toFixed(2);
			table.append("<tr class='dataRow'><td class='name'>" + row.name + "</td><td class='apy'>" + row.apy + " %</td><td class='earnings'>$" + earningsFormatted + "</td></tr>");
		}
	};

	//function that listens for login click events and shows/hides modal screen based on whats clicked 
	function loginModal(modal, close, loginBtn){
		loginBtn.on("click", function(){
			modal.css("display", "block");
		});

		close.on("click", function(){
    		modal.css("display", "none");
		});
	};

	function tabToggle(newsTab, archiveTab, newsContent, archiveContent){
		newsTab.click(function(){
			newsContent.show();
			archiveContent.hide();
			newsTab.css("background-color", "#f5f4f9");
			archiveTab.css("background-color", "#dbece4");
		});	

		archiveTab.click(function(){
			newsContent.hide();
			archiveContent.show();
			archiveTab.css("background-color", "#f5f4f9");
			newsTab.css("background-color", "#dbece4");
		});	
	}

});