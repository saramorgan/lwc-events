import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    eventName = 'Click button below to fire event';
    
    handleClick() {
        this.eventName = 'Child button clicked';
    }
}