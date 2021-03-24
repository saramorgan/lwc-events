import { LightningElement, wire } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';
import { subscribe, MessageContext } from 'lightning/messageService';
import PRODUCT_SELECTED_MESSAGE from '@salesforce/messageChannel/ProductSelected__c';

import { getFieldValue } from 'lightning/uiRecordApi';
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import PRODUCT_CODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import FAMILY_FIELD from '@salesforce/schema/Product2.Family';
import MSRP_FIELD from '@salesforce/schema/Product2.MSRP__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';

export default class ProductCard extends NavigationMixin(LightningElement) {

    familyField = FAMILY_FIELD;
    msrpField = MSRP_FIELD;
    productCodeField = PRODUCT_CODE_FIELD;
    descriptionField = DESCRIPTION_FIELD;

    recordId;
    productName;

    /** Define default scope for Lightning Messaging Service */
    @wire(MessageContext) messageContext;

    /** Fired when record detail form is loaded */
    handleRecordLoaded(event) {
        const { records } = event.detail;
        const recordData = records[this.recordId];
        this.productName = getFieldValue(recordData, NAME_FIELD);
    }

    /** Subscription for ProductSelected Ligthning message */
    productSelectionSubscription;

    connectedCallback() {
        // Subscribe to ProductSelected message
        this.productSelectionSubscription = subscribe(
            this.messageContext,
            PRODUCT_SELECTED_MESSAGE,
            (message) => this.handleProductSelected(message.productId)
        );
    }

    handleProductSelected(productId) {
        this.recordId = productId;
    }

    handleNavigateToRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: PRODUCT_OBJECT.objectApiName,
                actionName: 'view'
            }
        });
    }

}