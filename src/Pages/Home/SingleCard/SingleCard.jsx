import { Link } from "react-router-dom";


const SingleCard = ({card}) => {
    const {image,
         facilities,
          estate_title,
          description,
          id
        } = card;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">

                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>

            {
                facilities.map((facility, index) => <li key={index}> {facility}</li>)
            }

                <div className="card-actions">
                    <Link to={`/card_property_details/${id}`} className="btn btn-primary">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;