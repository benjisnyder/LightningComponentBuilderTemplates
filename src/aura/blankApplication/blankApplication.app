<aura:application description="New blank application.">
	<aura:attribute name="myAttribute" type="String" required="false" description="Placeholder attribute" />
	
	<aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>
	
	{!v.myAttribute}
</aura:application>