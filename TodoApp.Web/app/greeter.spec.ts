/// <reference path="../node_modules/@types/jasmine/index.d.ts"/>

import {Greeter} from "./Greeter";

describe("Greeter", () => {
    it('should greet', () => {
        var greeter = new Greeter();

        var message = greeter.greet("Matthew");

        expect(message).toBe("Hello Matthew");
    });
});