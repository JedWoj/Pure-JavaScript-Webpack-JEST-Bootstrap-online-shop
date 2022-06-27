/**
 * @jest-environment jsdom
 */

import {Basket} from "./basketHandler";

describe("Basket", () => {
    const basket = new Basket();

    test("defines totalPrice()", () => {
        expect(typeof basket.totalPrice).toBe("function");
    });

    test("totalPrice should output 3.00", () => {
        const totalPriceSpy = jest.spyOn(basket, "totalPrice");
        const result = basket.totalPrice([{price: 1}, {price: 2}]);
        expect(result).toBe('3.00');
        totalPriceSpy.mockClear();
    });
});