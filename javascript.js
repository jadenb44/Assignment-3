(function update(){
// gets which size is chosen from the radio buttons
    function getRadio(form, name)
    {
        var val;
        // get list of radio buttons with specified name
        var options = form.elements[name];
        
        // loop through list of radio buttons
        for (var i=0, len=options.length; i<len; i++) 
        {
            if ( options[i].checked ) 
            { // is radio checked?
                val = options[i].value; // if so, hold its value in val
                break; // and break out of for loop
            }
        }
        return val; // return value of checked radio or undefined if none checked
    }
    var form = document.getElementById('newform'); 
var size = form.elements['p_size'].value;
for (var i = 0, len = size.length; i < len ; i++)
{
    size[i].onclick = form.elements['p_size_total'].value = parseInt(getRadio(form, 'p_size'));
    var size_total = parseInt(form.elements['p_size_total'].value);
localStorage.setItem("Size", size_total);
Total(form);
}

var pt = document.getElementById('p_toppings');
for (var i = 0; i < pt.getElementsByTagName('input').length; i++){
    if(pt.getElementsByTagName('input')[i] == 'checkbox'){
        pt.getElementsByTagName('input')[i].onclick = Topping_total();
    }
}

    function Topping_total(){
        
        var val = parseInt( form.elements['topping_total'].value );
        
        if ( this.checked == true ) {
            val += parseInt(this.value);
        } else {
            val -= parseInt(this.value);
        }
        
        form.elements['topping_total'].value = val;
        Total(form);
        localStorage.setItem("Toppings_Total",t_total);
    }


    

    function Total(form){
        var s_total = parseFloat( form.elements['p_size'].value );
        var t_total = parseFloat( form.elements['topping_total'].value );
        form.elements['total'].value =  (s_total + t_total );

        localStorage.setItem("Total", s_total + t_total );
    }

})
