import React from 'react';
import { Link } from 'react-router-dom';

const DesireCategory = () => {
  const categories = [
    {
      category_name: 'Film Star',
    },
    {
      category_name: 'Sports',
    },
    {
      category_name: 'Musicians',
    },
    {
      category_name: 'Dancers',
    },
    {
      category_name: 'Chefs',
    },
    {
      category_name: 'Drama',
    },
    {
      category_name: 'Tech',
    },
    {
      category_name: 'Motivational Speaker',
    },
    {
      category_name: 'Religion',
    },
    {
      category_name: 'Comedians',
    },
    {
      category_name: 'Social',
    },
  ];
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Select Category</h1>
        </div>
      </section>

      <div className="album py-2 bg-light">
        <div className="container">
          <div className="row">
            {categories.map((category) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src="images/demo-placeholder.png"
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <Link to="/selected-category">
                        {category.category_name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesireCategory;
