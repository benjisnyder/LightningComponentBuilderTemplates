public with sharing class ListComponentController {
   @AuraEnabled
   public static List<Account> getRecords() {
       return [SELECT Id, Name FROM Account ORDER BY createdDate ASC];
   }
}