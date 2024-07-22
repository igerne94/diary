export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true
    },
    // default values for form fields
    values: {
        post: undefined,
        title: undefined,
        date: undefined
    },
    isFormReadyToSubmit: false
}

export function formReducer(state, action) {
    console.log('state', state);
    switch (action.type) {
        case 'RESET_VALIDITY':
            console.log(action);
            return {
                ...state,
                isValid: INITIAL_STATE.isValid
            };
        case 'SUBMIT': {
            const titleValidity = action.payload.title?.trim().length;
            const postValidity = action.payload.post?.trim().length;
            const dateValidity = action.payload.date;
            return {
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                values: action.payload,
                isFormReadyToSubmit: titleValidity && postValidity && dateValidity
            }
        }

    }

}