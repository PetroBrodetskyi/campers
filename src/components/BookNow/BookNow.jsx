import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextarea from '../CustomTextarea/CustomTextarea';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import SubmitButton from '../SubmitButton/SubmitButton';
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
    const initialValues = {
        name: '',
        email: '',
        date: '',
        comment: '',
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
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
            >
                {({ isSubmitting }) => (
                    <Form className={css.form}>
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
        </div>
    );
};

export default BookNow;
