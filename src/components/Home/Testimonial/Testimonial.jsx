import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card px-2 py-4 my-3 shadow">
                <div className="card-body">
                    <p className="card-text text-center">{quote}</p>
                </div>
                <div className="card-footer mt-3 d-flex align-items-center">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;