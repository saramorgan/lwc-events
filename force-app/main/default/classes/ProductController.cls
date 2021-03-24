public with sharing class ProductController {

    @AuraEnabled
    public String searchKey { get; set; }
    
    @AuraEnabled(Cacheable=true)
    public static list<Product2> getProducts(String searchKey) {
        String key = '';
        String whereClause = '';
        if(searchKey != null) {
            if (!String.isEmpty(searchKey)) {
                key = '%' + searchKey + '%';
                whereClause = 'WHERE Name LIKE :key';
            }
        }
        return Database.query(
            'Select id, ProductCode,Family, Name, MSRP__c, ' + 
            'Picture_URL__c, Description From Product2 ' + 
            whereClause + 
            ' WITH SECURITY_ENFORCED ORDER BY Name' );
    }
}

   