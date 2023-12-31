import { CardDetails } from "../customTypes/cardDetails";
import { TouchActions } from "../gestures/touchActions";
import { BaseScreen } from "./base/baseScreen";

export class CheckoutScreen extends BaseScreen{
    private selectors = {
        fullNameTextField: '~Full Name* input field',
        cardNumberTextField: '~Card Number* input field',
        expirationDateField: '~Expiration Date* input field',
        securityCode: '~Security Code* input field',
        reviewOrderButton: '//android.widget.TextView[@text="Review Order"]',
    }

    async enterCardDetails(cardDetails: CardDetails){
        await this.setValue(this.selectors.fullNameTextField, cardDetails.fullName);
        await this.setValue(this.selectors.cardNumberTextField, cardDetails.cardNumber);

        await TouchActions.swipeUpFromMiddle();

        await this.setValue(this.selectors.expirationDateField, cardDetails.expirationDate);
        await this.setValue(this.selectors.securityCode, cardDetails.securityCode);

        await this.click(this.selectors.reviewOrderButton);
        await this.click(this.selectors.reviewOrderButton);
    }
}