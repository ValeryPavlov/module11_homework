import {sum} from "../sum";

describe(('test sum'), () => {
    it('sum of numbers 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    }),
        it('sum of numbers 1 + 4 to equal 5', () => {
            const result = sum(1, 4);
            expect(result).toBe(5);
        })
            it('sum of numbers 1 + 4 to equal 5', () => {
                const result = sum(1, 4);
                expect(result).toBe(5);
    })
});