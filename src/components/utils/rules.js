import * as EmailValidator from 'email-validator';
import ErrorMessages from './errorMessages';

export const required = (text) => {
    if (text) {
        return null;
    } else {
        return ErrorMessages.isRequired;
    }
};

export const textRegex = (content, type) => {
    //let regex = type === 'phoneNumber'? /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/gm: /^(\+?\d{1,3}|\d{1,4})$/gm;
    let regex = type === 'phoneNumber'? /^[0-9]{8,11}$/gm: /^(\+?\d{1,3}|\d{1,4})$/gm;

    return (text, state) => {
        if(state[content]){
            let testReg = state[content].match(regex)
            if(testReg){
                return null
            } else {
                return type === 'phoneNumber'? 'Invalid phone number': 'Invalid country code'
            }
        }
    }
};

export const email = (email) => {
    if (email) {
        if (email.indexOf(' ') >= 0) {
            return "Invalid space";
        }
        if (EmailValidator.validate(email))
            return null
        else
            return 'Invalid email';
    } else {
        return null;
    }
};

export const password = (password) => {
    const passwordRegex = /^[A-Za-z0-9!@#$%^&\u0621-\u064A*]{8,30}$/;
    return (!passwordRegex.test(password)) ? 'Invalid password' : null
}

export const match = (password, repeatedPassword) => {
    return (text, state) => {
        return state[password] !== state[repeatedPassword] ? 'Password not match' : null
    }
}


