import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    eventNumber = 0;

    handleNumberChange(event) {
        this.eventNumber = event.detail.value;
    }

    handleClick() {
        this.dispatchEvent(
            new CustomEvent('clicked2', { detail: this.eventNumber } 
        ));
    }

}