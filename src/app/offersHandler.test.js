/**
 * @jest-environment jsdom
 */

 import {OffersHandler} from "./offersHandler";

 describe("OffersHandler", () => {
     const offersHandler = new OffersHandler();
 
     test("defines filterProducts()", () => {
         expect(typeof offersHandler.filterProducts).toBe("function");
     });
 
     test("filterProducts() should return arr of 1 element", () => {
         const filterProductsSpy = jest.spyOn(offersHandler, 'filterProducts');
         const result = offersHandler.filterProducts([{category: 0}, {category: 1}, {category: 2}], 1);
         expect(result.length).toBe(1);
         filterProductsSpy.mockClear();
     })
 
     test("filterProducts() should return empty arr", () => {
        const filterProductsSpy = jest.spyOn(offersHandler, 'filterProducts');
        const result = offersHandler.filterProducts([{category: 0}, {category: 1}, {category: 2}], 'XYZ');
        expect(result.length).toBe(0);
        filterProductsSpy.mockClear();
     })
 })