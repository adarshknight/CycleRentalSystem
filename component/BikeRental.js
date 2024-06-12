import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import Student from './Student';
const BikeRental = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="container bike-rental-section">
        <h2 className="mt-5 mb-4">Bike Rental</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://www.wheelbase.co.uk/wp-content/uploads/2019/06/Feature-Image.jpg" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Mountain Bikes</Card.Title>
                <Card.Text>
                  Explore rough terrains with our sturdy mountain bikes.
                </Card.Text>
                <Link to="/rent">
                  <Button variant="primary">Rent Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://i.insider.com/5c9cd967ffcb2729e96dc435?width=800&format=jpeg&auto=webp" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>City Bikes</Card.Title>
                <Card.Text>
                  Cruise through the city streets on our comfortable city bikes.
                </Card.Text>
                <Link to="/rent">
                  <Button variant="primary">Rent Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://ik.imagekit.io/fliko6zjtpq/tr:w-640,h-480,c-force/products/orange_1__product__74j3I41DFf.jpg?updatedAt=1631211844266" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Electric Bikes</Card.Title>
                <Card.Text>
                  Let's be faster than everyone to save this earth! Our electric bikes will take you wherever you want.
                </Card.Text>
                <Link to="/rent">
                  <Button variant="primary">Rent Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/604e89920633472cafddb643/1620870410188-BIQ9DF4TVA2B0EU0RRWF/Duet+2.JPG?format=750w" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Bikes for Disabled People</Card.Title>
                <Card.Text>
                  Specialized bikes designed for people with disabilities.
                </Card.Text>
                <Link to="/rent">
                  <Button variant="primary">Rent Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1L50qAdOo9fVVfOMU44LozdaycVQfC31xbA&usqp=CAU" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Bikes for Business Purposes</Card.Title>
                <Card.Text>
                  Efficient bikes suitable for commuting to work or business meetings.
                </Card.Text>
                <Link to="/rent">
                  <Button variant="primary">Rent Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://pbs.twimg.com/media/EQHIPDKXsAcKXqw.jpg" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Bikes for College Students</Card.Title>
                <Card.Text>
                  Affordable bikes ideal for getting around campus.
                </Card.Text>
                <Link to="/student"> {/* Change the route to "/student" */}
                  <Button variant="primary">Apply for Coupons</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BikeRental;
