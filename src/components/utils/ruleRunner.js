export const ruleRunner = (field, name, ...validations) => {
    return (state) => {
        for (let v  of validations) {
            let errorMessageFunc = v(state[field], state, name);
            if (errorMessageFunc) {
                return {[field]: typeof errorMessageFunc === 'function' ? errorMessageFunc(name) : errorMessageFunc};
            }
        }
        return null;
    };
};

export const run = (state, runners) => {
    return runners.reduce((memo, runner) => {
        return Object.assign(memo, runner(state));
    }, {});
};

