({
	setRecordId : function(component, event, helper) {
    	var params = event.getParams();
        
        if (!params.recordId) {
            return;
        }

        component.set('v.recordId', params.recordId);
	}
})