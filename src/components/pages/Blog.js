import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchPage = async () => {
                try {
                    const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/posts/?_embed');
                    if (!response.ok) {
                        throw new Error(`Došlo je do greške: ${response.status}`);
                    }
                    const json = await response.json();
                    setData(json);
                    console.log(json);
                } catch (err) {
                    setError(err.message);
                }
            };
    
            fetchPage();
        }, []);
    
        if (error) return <p>Greška: {error}</p>;
        if (!data) return <p>Učitavanje...</p>;
    
    
        return(
            <div className="container">
                <div className="row">
                    {data.map(item => (
                        <div className="col-md-3">
                            <div>
                                <Link to={'/blog/' + item.slug}>
                                    <img src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url} />
                                    <h1>{item.title.rendered}</h1>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
};

export default Blog;