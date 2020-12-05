(function() {
        
				// format val to the n number of decimal places
				function formatDecimal(val, n) {
					n = n || 2;
					var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
					while (str.length <= n) {
						str = "0" + str;
					}
					var pt = str.length - n;
					return str.slice(0,pt) + "." + str.slice(pt);
				}
				//gets values from radio buttons 
				function getRadioVal(form, name) {
					var radios = form.elements[name];
					var val;
					
					for (var i=0, len=radios.length; i<len; i++) {
						if ( radios[i].checked == true ) {
							val = radios[i].value;
							break;
						}
						
            	
					}
					return val;
				}

				
				

                  $(":checkbox").change(function() {
                    var notChecked = [], checked = [];
                    $(":checkbox").map(function() {
                        this.checked ? checked.push(this.id) : notChecked.push(this.id);
                    });
                    localStorage.setItem("names " + checked[]);
                    
                
                });
// get total price for toppings by add all checked toppings
				function getToppingsTotal(e) {
					var form = this.form;
					var val = parseFloat( form.elements['topping_total'].value );
					
					if ( this.checked == true ) {
						val += parseFloat(this.value);
					} else {
						val -= parseFloat(this.value);
					}
					
					form.elements['topping_total'].value = formatDecimal(val);
					updatePizzaTotal(form);
				}
				// get the price for the pizza size selected
				function getSizePrice(e) {
					this.form.elements['p_size_total'].value = parseFloat( this.value );
					updatePizzaTotal(this.form);
				}
	//calculates and stores all the details entered into localstorage
				function updatePizzaTotal(form) {
					var p_size_total = parseFloat( form.elements['p_size_total'].value );
					var topping_total = parseFloat( form.elements['topping_total'].value );
					form.elements['total'].value = formatDecimal( p_size_total + topping_total );
 
					localStorage.setItem("SizeCost",p_size_total);
					localStorage.setItem("ToppingsCost",topping_total);
					localStorage.setItem("TotalCost", p_size_total + topping_total );
				}
			
				
				var form = document.getElementById('pizzaForm');
			
				var el = document.getElementById('p_toppings');
			
				
				var tops = el.getElementsByTagName('input');
			//gets all checked toppings
				for (var i=0, len=tops.length; i<len; i++) {
					if ( tops[i].type === 'checkbox' ) {
						tops[i].onclick = getToppingsTotal;
					}
				}
				var sz = form.elements['p_size'];
				
				for (var i=0, len=sz.length; i<len; i++) {
					sz[i].onclick = getSizePrice;
				}
				
				
				form.elements['p_size_total'].value = formatDecimal( parseFloat( getRadioVal(form, 'p_size') ) );
				updatePizzaTotal(form);
				
				
			}());
			  
