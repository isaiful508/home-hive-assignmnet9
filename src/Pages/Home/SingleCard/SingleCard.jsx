

const SingleCard = ({card}) => {
    const {image,
         facilities,
          estate_title,
          description
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
                    <button className="btn btn-primary">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;