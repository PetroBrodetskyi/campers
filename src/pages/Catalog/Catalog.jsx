import { useState, useEffect } from 'react';
import axios from 'axios';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';
import SubmitButton from '../../components/SubmitButton/SubmitButton.jsx';
import Loader from 'components/Loader/Loader.jsx';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton.jsx';
import css from './Catalog.module.css';

const Catalog = () => {
    const [adverts, setAdverts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAdverts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://66588f105c3617052648fa9e.mockapi.io/api/campers?page=${page}&limit=4`
                );
                if (response.data.length === 0) {
                    setHasMore(false);
                } else {
                    setAdverts([...adverts, ...response.data]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchAdverts();
    }, [page]);

    useEffect(() => {
        if (adverts.length > 0 && adverts.length % 4 !== 0) {
            setHasMore(false);
        }
    }, [adverts]);

    const loadMoreAdverts = () => {
        setPage(page + 1);
    };

    return (
        <div className={css.catalogContainer}>
            <ul className={css.catalogFlex}>
                {adverts.map((advert) => (
                    <AdvertCard key={advert._id} advert={advert} />
                ))}
            </ul>
            {loading && <Loader />}
            {hasMore && (
                <SubmitButton
                    buttonText="Load more"
                    onClick={loadMoreAdverts}
                />
            )}
            <ScrollToTopButton />
        </div>
    );
};

export default Catalog;
