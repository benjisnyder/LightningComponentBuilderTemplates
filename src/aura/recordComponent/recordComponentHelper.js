({
	setRecord : function(component) {
		var action = component.get("c.getRecord");
		var recordId = component.get("v.recordId");
        
        if (!recordId) {
        	// Component's target ID has not yet been set so don't fire the server action.
        	return;
        }
        
        action.setParams({
        	id : recordId
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if (state === "SUCCESS") {
                cmp.set("v.targetRecord", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	}
})