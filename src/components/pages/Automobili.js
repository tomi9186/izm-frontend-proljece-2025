import React, { useEffect, useState } from 'react';
const Automobili = () => {
    const [automobili, setAutomobili] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAutomobili = async () => {
            try {
                const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/automobil/?_embed');
                if (!response.ok) {
                    throw new Error(`Došlo je do greške: ${response.status}`);
                }
                const json = await response.json();
                setAutomobili(json);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchAutomobili();
    }, []);


        const getTermNameByTaxonomy = (terms, taxonomyName) => {
            if (!terms || !Array.isArray(terms)) return null;

            for (const termGroup of terms) {
                for (const term of termGroup) {
                if (term.taxonomy === taxonomyName) {
                    return term.name;
                }
                }
            }

            return null;
            };

        return (
        <div className="container">
            <div className="row">
                {automobili.map((automobil) => (
                    <div className="col-md-6 col-lg-3">
                <div className="car-card">
                    <div className="d-flex like">
                        <a href="#"><h5>{automobil.id}</h5></a>
                        <a href="#" className="like-full"><img src="img/heart.svg" /></a>
                    </div>
                    <p className="car-type"><a href="#">
                        {
      
        getTermNameByTaxonomy(automobil._embedded?.["wp:term"], 'karoserija')
    }
                        </a></p>
                    <a href="#" className="car-img">
                        <img src={automobil._embedded?.["wp:featuredmedia"]?.[0].media_details.sizes.medium_large.source_url} />   
                        </a>
                        <div className="d-flex">
                        <div className="car-fuel">90L</div>
                        <div className="car-gear">Manual</div>
                        <div className="car-seats">2 People</div>
                    </div>
                    <div className="d-flex">
                        <div className="car-price">
                            $99.00/<span>day</span>
                        </div>
                        <div className="car-button">
                            <a href="#" className="btn btn-primary">Rent Now</a>
                        </div>
                    </div>
                </div>
            </div>
               ) )}
            </div>
        </div>  
    );
};
export default Automobili;