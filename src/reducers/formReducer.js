const initialState = {
    name: '',
    email: '',
    date: '',
    comment: '',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'RESET_FORM':
            return initialState;
        case 'UPDATE_FORM_DATA':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;
