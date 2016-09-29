({
	handleInit : function(component, event, helper) {
		helper.setRecords(component);
	},
	
	handleItemClick : function(component, event, helper) {
		var recordId = event.target.dataset.recordid;

		helper.fireItemClick(component, recordId);
	}
})