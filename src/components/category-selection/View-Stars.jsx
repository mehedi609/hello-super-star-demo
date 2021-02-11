import React from 'react';

const ViewStars = () => {
  const super_stars = [
    {
      name: 'Sakib Al Hasan',
    },
    {
      name: 'Tamim Iqbal',
    },
    {
      name: 'Shafid Afridi',
    },
    {
      name: 'MS Dhoni',
    },
    {
      name: 'Sourav Ganguly',
    },
  ];

  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Super Stars</h1>
        </div>
      </section>

      <div className="album py-2 bg-light">
        <div className="container">
          <div className="row">
            {super_stars.map((star) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src="images/demo-placeholder.png"
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <a href="#!">{star.name}</a>
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

export default ViewStars;
