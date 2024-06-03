import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { updateFormData, resetFormData } from '../../store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookNow.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    date: Yup.string()
        .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Date format should be dd.mm.yyyy')
        .required('Date is required'),
    comment: Yup.string(),
});

const BookNow = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector((state) => state.formData);

    useEffect(() => {
        const savedValues = localStorage.getItem('formData');
        if (savedValues) {
            dispatch(updateFormData(JSON.parse(savedValues)));
        }
    }, [dispatch]);

    const handleFormChange = useCallback(
        (values) => {
            dispatch(updateFormData(values));
            localStorage.setItem('formData', JSON.stringify(values));
        },
        [dispatch]
    );

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        localStorage.removeItem('formData');
        resetForm();
        dispatch(resetFormData());
        toast.success('Form submitted successfully!');
    };

    return (
        <div className={css.reviewsContainer}>
            <div className={css.titleTextFlex}>
                <h4 className={css.reviewsTitle}>Book your campervan now</h4>
                <p className={css.reviewsText}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting, values, setFieldValue }) => (
                    <Form className={css.form}>
                        <Field
                            name="name"
                            placeholder="Name"
                            component={CustomInput}
                            onChange={(e) => {
                                setFieldValue('name', e.target.value);
                                handleFormChange({
                                    ...values,
                                    name: e.target.value,
                                });
                            }}
                        />
                        <Field
                            name="email"
                            placeholder="Email"
                            component={CustomInput}
                            onChange={(e) => {
                                setFieldValue('email', e.target.value);
                                handleFormChange({
                                    ...values,
                                    email: e.target.value,
                                });
                            }}
                        />
                        <Field
                            name="date"
                            placeholder="Booking Date"
                            component={CustomDateInput}
                            onChange={(date) => {
                                setFieldValue('date', date);
                                handleFormChange({ ...values, date: date });
                            }}
                        />
                        <Field
                            name="comment"
                            placeholder="Comment"
                            component={CustomTextarea}
                            onChange={(e) => {
                                setFieldValue('comment', e.target.value);
                                handleFormChange({
                                    ...values,
                                    comment: e.target.value,
                                });
                            }}
                        />
                        <SubmitButton
                            buttonText="Send"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </div>
    );
};

export default BookNow;
