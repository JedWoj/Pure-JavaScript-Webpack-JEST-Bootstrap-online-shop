/**
 * @jest-environment jsdom
 */

import {AdminList} from "./adminList";

describe("AdminList", () => {
    const adminList = new AdminList();

    test("defines findIndex()", () => {
        expect(typeof adminList.findIndex).toBe("function");
    });

    test("findIndex() returns 1", () => {
        const findIndexSpy = jest.spyOn(adminList, 'findIndex');
        const result = adminList.findIndex([{id: 0}, {id: 1}, {id: 2}], {id: 1});
        expect(result).toBe(1);
        findIndexSpy.mockClear();
    })
})