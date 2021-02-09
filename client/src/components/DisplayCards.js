import React, {useState, useEffect} from 'react';
import './Cards.css';
import {CardsData} from './CardsData';


function DisplayCards() {

    

    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        const fetchHobbyData = async () => {
            const response = await fetch('http://localhost:3001/api/hobbies');
    
            const data = await response.json();
            console.log(data);
            setHobbies(data);
    
        };

        fetchHobbyData();
    }, []);

    return (
        <div className='card-style'>
            <section className='card-list'>
                {hobbies.map((hobby, index) =>{
                    return(
                        <article key={index} className='card'>

                            <header className='card-header'>
                                <p>{hobby.date}</p>
                                <h3>{hobby.hobby}</h3>
                            </header>

                            <div className='card-image'>
                                <img src={hobby.image.src} alt={hobby.image.alt} />
                            </div>

                            <div className='image-description'>
                                <p>{hobby.description}</p>
                            </div>

                        </article>
                    );
                })}
                {/* <article className='card'>
                    <header className='card-header'>
                        <p>Date</p>
                        <h2>Title of hobbie</h2>
                    </header>
                    <div className='card-image'>
                        <img src="" />
                    </div>
                    <div className='image-description'>
                        <h2>brief description</h2>
                    </div>
                </article> */}
                           
            </section>

        </div>
    )
}

export default DisplayCards
