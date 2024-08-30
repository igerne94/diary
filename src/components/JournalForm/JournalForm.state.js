export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true
    },
    // default values for form fields
    values: {
        post: '',
        title: '',
        date: '',
        tag: ''
    },
    isFormReadyToSubmit: false
}

export function formReducer(state, action) {
    console.log(action, 'action')
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                values: {
                    ...state.values,
                    ...action.payload // added userId
                }
            };
        case 'CLEAR':
            return {
                ...state,
                values: { // here clear fields explicitly except userId as of now
                    ...state.values,
                    post: INITIAL_STATE.values.post,
                    title: INITIAL_STATE.values.title,
                    date: INITIAL_STATE.values.date,
                    tag: INITIAL_STATE.values.tag
                },
                isFormReadyToSubmit: false
            };
        case 'RESET_VALIDITY':
            return {
                ...state,
                isValid: INITIAL_STATE.isValid
            };
        case 'SUBMIT': {
            const titleValidity = state.values.title?.trim().length;
            const postValidity = state.values.post?.trim().length;
            const dateValidity = state.values.date;
            return {
                ...state,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                isFormReadyToSubmit: titleValidity && postValidity && dateValidity
            }
        }

    }

}