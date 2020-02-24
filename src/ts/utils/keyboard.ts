import {delay} from './async';

export const Keyboard = {
    // Todo come up with a way to autogenerate the methods from the interface and the code
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    standardDelay: 20,

    async simulateKey(code: number, additionalDelay: number = 0, opts?: KeyboardEventInit) {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            // @ts-ignore
            keyCode: code,
            ...opts
        });
        document?.activeElement?.dispatchEvent(event);
        return delay(this.standardDelay + additionalDelay);
    },
    async pressEnter(additionalDelay: number = 0) {
        return this.simulateKey(13, additionalDelay)
    },
    async pressEsc(additionalDelay: number = 0) {
        return this.simulateKey(27, additionalDelay)
    },
    async pressBackspace(additionalDelay: number = 0) {
        return this.simulateKey(8, additionalDelay)
    },
    async pressTab(additionalDelay: number = 0) {
        return this.simulateKey(9, additionalDelay)
    },
    async pressShiftTab(additionalDelay: number = 0) {
        return this.simulateKey(9, additionalDelay, {shiftKey: true})
    },
};
