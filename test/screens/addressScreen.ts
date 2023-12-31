import { AddressDetails } from "../customTypes/addressDetails";
import { TouchActions } from "../gestures/touchActions";
import { BaseScreen } from "./base/baseScreen";

export class AddressScreen extends BaseScreen{
    private selectors = {
        nameTextField : '~Full Name* input field',
        address1TextField: '~Address Line 1* input field',
        cityTextField: '~City* input field',
        stateTextField: '~State/Region input field',
        zipCodeTextField: '~Zip Code* input field',
        countryTextField: '~Country* input field',
        toPaymentButton: '//android.widget.TextView[@text="To Payment"]',

    }
    async navigateToPayment() {
        await this.click(this.selectors.toPaymentButton);
    }

    async enterAddressDetails(addressDetails: AddressDetails){
        await this.fillMandatoryAddressDetails(addressDetails);
        await this.navigateToPayment();
    }

    async fillMandatoryAddressDetails(addressDetails: AddressDetails) {

        await this.setValue(this.selectors.nameTextField, addressDetails.fullName);
        await this.setValue(this.selectors.address1TextField, addressDetails.address1);

        await TouchActions.swipeUpFromMiddle();
        
        await this.setValue(this.selectors.cityTextField, addressDetails.cityName);
        await this.setValue(this.selectors.stateTextField, addressDetails.stateName);
        await this.setValue(this.selectors.zipCodeTextField, addressDetails.zipCode);
        await this.setValue(this.selectors.countryTextField, addressDetails.countryName);

    }

}