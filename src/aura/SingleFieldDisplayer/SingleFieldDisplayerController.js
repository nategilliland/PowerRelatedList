({
    doInit : function(component) {
        var record = component.get("v.record");
        var fieldDescribe = component.get("v.fieldDescribe");
        console.log("record");
        console.log(record);
        console.log("fieldDescribe");
        console.log(fieldDescribe);
        
        var output;
        var parts = fieldDescribe.original.split(".");
        //console.log(parts);
        if(fieldDescribe.related){
            output = record[parts[0]][parts[1]];
        } else {
	        output = record[fieldDescribe.describe.name];            
        }
        
        //console.log(fieldDescribe.original + ":" + output);
        
        component.set("v.simpleOutput", output);
    },
    
    changePicklist: function(component, event, helper){
    	console.log(event.target);
        //answer[answer.selectedIndex].value
        var newValue=event.target[event.target.selectedIndex].value
        console.log(newValue);

        helper.saveAnything(component, newValue);
    },
    
    flipCheckbox: function(component, event, helper){
        console.log("checkbox flipped");          
        
        //flip value        
        helper.saveAnything(component, !component.get("v.simpleOutput"));
    },
    
    updateDate: function(component, event, helper){
        console.log("in the update date function");
        console.log(component.find("dateField"));                    
    	var newDate = component.find("dateField").get("v.value");        
		helper.saveAnything(component, newDate);        
    },
    
    updateDateTime: function(component, event, helper){
        console.log("in the update date function");
        console.log(component.find("dateField"));                    
    	var newDate = component.find("dateTimeField").get("v.value");        
        helper.saveAnything(component, newDate);        
    },
    
    updateRecord: function(component, event, helper){        
        console.log(event.target.value);
        helper.saveAnything(component, event.target.value)        
    }
})