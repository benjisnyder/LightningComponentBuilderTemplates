({
	setRecords : function(component) {
		var action = component.get("c.getRecords");
        
        action.setCallback(this, function(response){
            var state = response.getState();

            if (state === "SUCCESS") {
                component.set("v.targetRecords", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	},
	
	fireItemClick : function(component, recordId) {
		var evt = component.getEvent("itemSelect");
		
		evt.setParams({recordId : recordId});
		evt.fire();
	}
})