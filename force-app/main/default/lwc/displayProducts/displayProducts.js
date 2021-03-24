import { LightningElement, wire } from 'lwc';

import { publish, MessageContext } from 'lightning/messageService';
import PRODUCT_SELECTED_MESSAGE from '@salesforce/messageChannel/ProductSelected__c';

// getProducts() method in ProductController Apex class
import getProducts from '@salesforce/apex/ProductController.getProducts';

export default class DisplayProducts extends LightningElement {

    searchKey = '';     
    
    // Load context for Ligthning Messaging Service 
    @wire(MessageContext) messageContext;

    //Publish ProductSelected message
    handleProductSelected(event) {  
        publish(this.messageContext, PRODUCT_SELECTED_MESSAGE, {
            productId: event.detail
        });
    }

    // Load the list of available products.
    @wire(getProducts, { searchKey: '$searchKey' })
    products;

    handleSearchKeyChange(event) {
        this.searchKey = event.target.value.toLowerCase();
    }


}