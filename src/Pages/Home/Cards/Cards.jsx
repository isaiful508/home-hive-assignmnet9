import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Cards = () => {

    const [propertyCards, setPropertyCards] = useState([]);


    useEffect(() => {
        fetch('/homeHive.json')
            .then(res => res.json())
            .then(data => setPropertyCards(data))
    }, []);

    // console.log(propertyCards);

    return (
        <div className="container mx-auto">

            <div className="text-center mb-8">
        <h2 className="text-5xl">Real State</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum in accusamus quis consequatur ab!</p>
            </div>
            
             <div className=" grid gap-5 grid-cols-1 lg:grid-cols-3">

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