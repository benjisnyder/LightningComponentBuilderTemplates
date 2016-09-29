<aura:application >
	<aura:attribute name="recordId" type="String" />
	
	<h1>Records</h1>
	<c:listComponent itemSelect="{!c.setRecordId}" />
	
	<h1>Record</h1>
	<c:recordComponent recordId="{!v.recordId}" />
</aura:application>