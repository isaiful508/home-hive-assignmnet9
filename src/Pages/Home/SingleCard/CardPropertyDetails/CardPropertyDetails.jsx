import {  useLoaderData, useParams } from "react-router-dom";

const CardPropertyDetails = () => {

    const propertyDetails = useLoaderData();
    console.log("Property Details:", propertyDetails);

    const { id } = useParams();

    const propertyDetail = propertyDetails.find(property => property.id === parseInt(id));



    const { image, estate_title } = propertyDetail;
     

     

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="property" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CardPropertyDetails;