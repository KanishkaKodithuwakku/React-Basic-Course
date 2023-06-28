import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Components/Header";
import Button from "./Components/Button";
import Card from "./Components/Card";
import CardImage from "./Components/CardImage";
import CardBody from "./Components/CardBody";
import CardFooter from "./Components/CardFooter";
import Alert from "./Components/Alert";
import { FaHome } from "react-icons/fa";
import TextInput from "./Components/TextInput";



class App extends Component {
  render() {
    const alerts = {
      alert1: {
        type: "success",
        message:
          "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
      },
      alert2: {
        type: "warning",
        message:
          "Ipsum is not simply random text. It has roots in a piece of classical",
      },
      alert3: {
        type: "danger",
        message: (
          <div>
            <p>
              literature from 45 BC,{" "}
              <a href="https://www.lipsum.com/">The standard chunk of Lorem</a>
              making it over 2000 years old
            </p>
          </div>
        ),
      },
      alert4: {
        type: "info",
        message:
          "Ipsum is not simply random text. It has roots in a piece of classical INFO",
      },
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6"></div>
            <Header title="Hellow React" subTitle="This is a Subtitle"></Header>
            <hr />
            <Button type="submit" bg="promary">
              Primary
            </Button>
            <Button type="submit" bg="secondary">
              Secondary
            </Button>
            <hr />
          </div>

          <div className="row">
            <Card>
              <CardImage
                url="https://picsum.photos/200/300"
                alt="Profile Image"
              />
              <CardBody>
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </CardBody>
              <CardFooter style="cardfooter" botttomText="2023-05-20" />
            </Card>

            <Card>
              <CardImage
                url="https://picsum.photos/200/300"
                alt="Profile Image"
              />
              <CardBody>
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </CardBody>
              <CardFooter style="cardfooter" botttomText="2023-05-20" />
            </Card>

            <Card>
              <CardImage
                url="https://picsum.photos/200/300"
                alt="Profile Image"
              />
              <CardBody>
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </CardBody>
              <CardFooter style="cardfooter" botttomText="2023-05-20" />
            </Card>

            <Card>
              <CardImage
                url="https://picsum.photos/200/300"
                alt="Profile Image"
              />
              <CardBody>
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </CardBody>
              <CardFooter style="cardfooter" botttomText="2023-05-20" />
            </Card>
          </div>

          <div className="row padd-top">
            <div className="col-sm-8">
              {Object.keys(alerts).map((key) => (
                <Alert
                  alertType={alerts[key].type}
                  iconClasses="fa-sharp fa-solid fa-circle-exclamation"
                  as="icon"
                  iconComponent={<FaHome />}
                >
                  <p>{alerts[key].message}</p>
                </Alert>
              ))}
            </div>
          </div>

          <TextInput textType="text" label="Username" placeholder="Username" />
          <TextInput textType="password" label="Password" placeholder="Password" />
          <TextInput textType="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}
export default App;
