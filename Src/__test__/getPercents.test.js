import {getPercents} from "../getPercents";

describe("test getPercents", () => {
    it('the expression 300 / 100 * 25 is equal to 75', () => {
        const result = getPercents(25, 300)
        expect(result).toBe(75);
    }),
        it('the expression 550 / 100 * 78 is equal to 429', () => {
            const result = getPercents(78, 550)
            expect(result).toBe(429);
        }),
        it('the expression 780 / 100 * 60 is equal to 468', () => {
            const result = getPercents(60, 780)
            expect(result).toBe(468);
        })
})