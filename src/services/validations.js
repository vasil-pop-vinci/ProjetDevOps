// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    if (gamerTag.length < 8) {
        return 'Invalid - gamertag length must be at least 8 characters';
    }

    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    const hasSpecialCharacter = specialCharacters.some(char => gamerTag.includes(char));

    if (!hasSpecialCharacter) {
        return 'Invalid - gamertag must contain at least a special character';
    }

    const hasNumber = /\d/.test(gamerTag);
    if (!hasNumber) {
        return 'Invalid - gamertag must contain at least a number';
    }

    return null; // Null indicates a valid gamer tag
};

module.exports = { isValid };
