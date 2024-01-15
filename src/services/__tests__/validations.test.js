// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return null for a valid gamer tag', () => {
        const result = isValid('ValidTag&1');
        expect(result).toBeNull();
    });

    test('should return an error message for a gamer tag with less than 8 characters', () => {
        const result = isValid('Short');
        expect(result).toBe('Invalid - gamertag length must be at least 8 characters');
    });

    test('should return an error message for a gamer tag without a special character', () => {
        const result = isValid('NoSpecialCharacter');
        expect(result).toBe('Invalid - gamertag must contain at least a special character');
    });

    test('should return an error message for a gamer tag without a number', () => {
        const result = isValid('NoNumber&Special');
        expect(result).toBe('Invalid - gamertag must contain at least a number');
    });
});