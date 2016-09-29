public with sharing class RecordComponentController {
   
   @AuraEnabled
   public static Account getRecord(String recordId) {
		return [SELECT Id, Name, Website, Phone FROM Account WHERE Id = :recordId];
   }
}