import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import css from './BookNow.module.css';
import { useEffect, useState } from 'react';

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
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        date: '',
        comment: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const savedValues = localStorage.getItem('formData');
        if (savedValues) {
            setInitialValues(JSON.parse(savedValues));
        }
    }, []);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        localStorage.removeItem('formData');
        resetForm();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleFormChange = (values) => {
        localStorage.setItem('formData', JSON.stringify(values));
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
                {({ isSubmitting, values }) => (
                    <Form
                        className={css.form}
                        onChange={() => handleFormChange(values)}
                    >
                        <Field
                            name="name"
                            placeholder="Name"
                            component={CustomInput}
                        />
                        <Field
                            name="email"
                            placeholder="Email"
                            component={CustomInput}
                        />
                        <Field
                            name="date"
                            placeholder="Booking Date"
                            component={CustomDateInput}
                        />
                        <Field
                            name="comment"
                            placeholder="Comment"
                            component={CustomTextarea}
                        />
                        <SubmitButton
                            buttonText="Send"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            {isSubmitted && (
                <div className={css.successMessage}>
                    Form submitted successfully!
                </div>
            )}
        </div>
    );
};

export default BookNow;
