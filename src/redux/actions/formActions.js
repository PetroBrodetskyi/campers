export const updateFormField = (field, value) => ({
    type: 'UPDATE_FORM_FIELD',
    field,
    value,
});

export const resetForm = () => ({
    type: 'RESET_FORM',
});

export const updateFormData = (formData) => ({
    type: 'UPDATE_FORM_DATA',
    payload: formData,
});
