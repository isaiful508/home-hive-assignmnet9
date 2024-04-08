import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Cards = () => {

    const [propertyCards, setPropertyCards] = useState([]);


    useEffect(() => {
        fetch('/homeHive.json')
            .then(res => res.json())
            .then(data => setPropertyCards(data))
    }, []);

    console.log(propertyCards);

    return (
        <div>
            <h2 className="text-5xl">This is cards section</h2>

            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">

            {
                propertyCards.map(card => <SingleCard 
                    card={card}
                    key={card.id}
                    ></SingleCard>)
            }
            
            </div>
        </div>
    );
};

export default Cards;