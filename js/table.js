$(function(){

	//////////////Market Report Table//////////////

	function Property(street, city, state, price, posted){

		this.constructor.all.push(this);

		this.street = street;
		this.city = city;
		this.state = state;
		this.price = price;
		this.posted = new Date(posted);

		var self = this;
		
		function isNew(){
			var currentDate = new Date(),
			    daysListed = (((((currentDate - self.posted)/1000)/60)/60)/24);
			if (daysListed < Property.maxDays){
				return '<span class="new">&#9733;</span> ';
			} else{
				return'';
			}
		} //closes isNew()

		this.el = 	"<tr>"+
						"<td>"+isNew()+this.street+"</td>"+
						"<td>"+this.city+"</td>"+
						"<td>"+this.state+"</td>"+
						"<td>"+this.price+"</td>"+
					"</tr>";
	} //closes function Property()

	Property.all = [];
	Property.maxDays = 10;
	Property.displayContent = function(){
		$(".property-count").text(Property.all.length);
		$(".max-days").text(Property.maxDays);
		$.each(Property.all, function(i, property){
			 	$('table').find('tbody').append(property.el);
		});//closes .each
		$('table').stupidtable();//table sort
	}; //closes Property.displayContent



	//create properties

	var property1 = new Property("323 Eldert street", "Brooklyn", "NY", 1200000, "2015 May 01");
	var property2 = new Property("22 West 27th Street", "New York", "NY", 3400000, "2015 April 08");
	var property3 = new Property("11 Broadway", "New York", "NY", 7632000, "2015 April 30");
	var property4 = new Property("545 Prospect Place", "Brooklyn", "NY", 555000, "2014 April 30");


	Property.displayContent();

	
});


