import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        
        const [page, setPage] = useState(1);
        const [perPage, setPerPage] = useState(12);

        const prevPage = () => {
            setPage(page - 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        const nextPage = () => {
            setPage(page + 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    
        useEffect(() => {
            const fetchPage = async () => {
                try {
                    const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/posts/?_embed&per_page=' + perPage + '&page=' + page);
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
        }, [page, perPage]);
    
        if (error) return <p>Greška: {error}</p>;
        if (!data) return <p>Učitavanje...</p>;
    
    
        return(
            <>
            <div className="page-title py-5 mb-5 text-center">
                <div class="container py-5">
                    <h1>Blog</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-end">
                        <select className="mb-4 form-select w-auto ms-auto" value={perPage} onChange={
                            (e) => {
                                setPerPage(e.target.value);
                                setPage(1);
                            }} >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {data.map(item => (
                        <div className="col-md-3">
                            <div className="blog-card">
                                <Link className="blog-img" to={'/blog/' + item.slug}>                                
                                    <img src={item?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url} />
                                </Link>
                                <Link to={'/blog/' + item.slug}> 
                                    <h1>{item.title.rendered}</h1>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-6 text-end">
                        <button className="btn btn-primary" onClick={prevPage}>Prethodna stranica</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={nextPage}>Sljedeća stranica</button>
                    </div>
                </div>
            </div>
            </>
        );
};

export default Blog;