import { useState, useEffect } from 'react';
import axios from 'axios';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';

const Catalog = () => {
    const [adverts, setAdverts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAdverts = async () => {
            const response = await axios.get(
                `https://66588f105c3617052648fa9e.mockapi.io/api/campers?page=${page}&limit=4`
            );
            setAdverts(response.data);
        };
        fetchAdverts();
    }, [page]);

    const loadMoreAdverts = () => {
        setPage(page + 1);
    };

    return (
        <div>
            {adverts.map((advert) => (
                <AdvertCard key={advert.id} advert={advert} />
            ))}
            <button onClick={loadMoreAdverts}>Load more</button>
        </div>
    );
};

export default Catalog;
