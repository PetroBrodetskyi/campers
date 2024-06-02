import css from '../Home/Home.module.css';

const Home = () => {
    return (
        <div className={css.homeContainer}>
            <h1>Welcome to Camper Rental Services</h1>
            <h2 className={css.title}>We provide various camper rental services across Ukraine.</h2>
            <p className={css.text}>
                At Camper Rental Services, we are dedicated to making your
                travel dreams come true. We offer a diverse range of camper
                rental services across Ukraine, designed to cater to all your
                adventure needs. Whether you are planning a family vacation, a
                romantic getaway, or an adventurous road trip with friends, our
                campers provide the perfect blend of comfort and freedom.
            </p>

            <h2>Why Choose Us?</h2>
            <p className={css.text}>
                Wide Range of Campers: Our fleet includes a variety of campers,
                from compact models perfect for couples to spacious family
                campers equipped with all the amenities you need. Each vehicle
                is maintained to the highest standards, ensuring a safe and
                enjoyable journey. Exceptional Customer Service: Our team is
                committed to providing top-notch customer service. From the
                moment you contact us to the end of your trip, we are here to
                assist you. We offer 24/7 support to address any questions or
                concerns you may have during your rental period. everyone should
                have the opportunity to explore the luxury.
            </p>

            <h2>Explore Ukraine Like Never Before</h2>
            <p className={css.text}>
                From the picturesque Carpathian Mountains to the serene beaches
                of the Black Sea, Ukraine is a country rich in natural beauty
                and cultural heritage. With a camper rental from Camper Rental
                Services, you have the freedom to explore at your own pace.
                Discover hidden gems, visit charming villages, and create
                memories that will last a lifetime.
            </p>

            <h2>Contact Us</h2>
            <p className={css.text}>
                Ready to start your adventure? Reach out to us today to learn
                more about our services and to book your camper. Our friendly
                staff is here to help you plan the perfect trip.
            </p>

            <address className={css.text}>
                <div>Address: 123 Adventure Lane, Kyiv, Ukraine</div>
                <a href="tel:+380123456789">Phone: +38 (012) 345-6789</a>
                <br />
                <a href="mailto:info@camperrentalservices.ua">
                    Email: info@camperrentalservices.ua
                </a>
            </address>

            <p className={css.text}>
                Thank you for choosing Camper Rental Services. We look forward
                to being a part of your next great adventure!
            </p>
        </div>
    );
};

export default Home;
