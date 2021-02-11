import React from 'react';
import { Link } from 'react-router-dom';

const SelectedCategory = () => {
  const selected_categories = [
    {
      category_name: 'Football',
    },
    {
      category_name: 'Cricket',
    },
    {
      category_name: 'Tennis',
    },
    {
      category_name: 'Golf',
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
            {selected_categories.map((category) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src="images/demo-placeholder.png"
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <Link to="view-super-stars">
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

export default SelectedCategory;
