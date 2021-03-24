import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    eventName;
    eventName2;

    handleButtonClicked2(event) {
        this.eventName2 = 'Child2 Button Clicked: ' + event.detail;
    }


    handleButtonClicked(event) {
        this.eventName = 'Child button clicked';
    }
}