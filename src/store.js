import { createStore, combineReducers } from 'redux';
import formReducer from './reducers/formReducer';

const rootReducer = combineReducers({
    formData: formReducer,
});

const store = createStore(rootReducer);

export const resetFormData = () => ({
    type: 'RESET_FORM',
});

export const updateFormData = (formData) => ({
    type: 'UPDATE_FORM_DATA',
    payload: formData,
});

export default store;
