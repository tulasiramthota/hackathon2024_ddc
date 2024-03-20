/*!

=========================================================
* argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import connectionIcon from "../../assets/img/icons/common/database-2-fill.svg";
import dashboardIcon from "../../assets/img/icons/common/dashboard-interactions.svg";
import sourceIcon from "../../assets/img/icons/common/big-data-icon.svg";
import visualIcon from "../../assets/img/icons/common/visual.svg";

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.REACT_APP_ADMIN_NAME}:${process.env.REACT_APP_PASSWORD}`
        )}`,
        "Content-Type": "application/vnd.composer.v3+json",
      },
    });
    const jsonData = await response.json();
    return jsonData.content.length;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};

const Header = () => {
  const [connections, setConnection] = useState(0);
  const [sources, setSources] = useState(0);
  const [dashboards, setDashboards] = useState(0);
  const [visuals, setVisuals] = useState(0);

  useEffect(() => {
    fetchData(`${process.env.REACT_APP_COMPOSER_URL}/api/connections`).then(
      (length) => setConnection(length)
    );
    fetchData(
      `${process.env.REACT_APP_COMPOSER_URL}/api/inventory?sort=NAME&sortOrder=ASC&includeItems=ALL&favorites=false&type=SOURCE`
    ).then((length) => setSources(length));
    fetchData(
      `${process.env.REACT_APP_COMPOSER_URL}/api/inventory?sort=NAME&sortOrder=ASC&includeItems=ALL&favorites=false&type=VISUAL`
    ).then((length) => setVisuals(length));
    fetchData(
      `${process.env.REACT_APP_COMPOSER_URL}/api/inventory?sort=NAME&sortOrder=ASC&includeItems=ALL&favorites=false&type=DASHBOARD`
    ).then((length) => setDashboards(length));
  }, []);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Connections
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {connections}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <img
                          src={connectionIcon}
                          style={{ width: "75px", height: "75px" }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sources
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {sources}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <img
                          src={sourceIcon}
                          style={{ width: "75px", height: "75px" }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Visuals
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {visuals}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <img
                          src={visualIcon}
                          style={{ width: "75px", height: "75px" }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Dashboards
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {dashboards}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <img
                          src={dashboardIcon}
                          style={{ width: "75px", height: "75px" }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
