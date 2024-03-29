/*!

*/
// reactstrap components
import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
// core components
import Header from "components/Headers/Header.js";

const Sources = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_COMPOSER_URL}/api/inventory?sort=NAME&sortOrder=ASC&includeItems=ALL&favorites=false&type=SOURCE`,
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${btoa(
                `${process.env.REACT_APP_ADMIN_NAME}:${process.env.REACT_APP_PASSWORD}`
              )}`,
              "Content-Type": "application/vnd.composer.v3+json",
            },
          }
        );
        const jsonData = await response.json();
        console.log(jsonData.content);
        setData(jsonData.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleCreateVisualClick = (inventoryItemId) => {
    navigate("/admin/visual_accordion", {
      state: { sourceId: inventoryItemId },
    });
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Data Sources</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="text-sm">
                      Connection Type
                    </th>
                    <th scope="col" className="text-sm">
                      Source Name
                    </th>
                    <th scope="col" className="text-sm">
                      Connection Name
                    </th>
                    <th scope="col" className="text-sm">
                      User
                    </th>
                    <th scope="col" className="text-sm">
                      Action
                    </th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm display-4">
                              {item.associatedItems[0].name}
                            </span>
                          </Media>
                        </Media>
                      </td>
                      <td>
                        <span className="mb-0 text-sm display-4">
                          {item.name}
                        </span>
                      </td>
                      <td>
                        <span className="mb-0 text-sm display-4">
                          {item.associatedItems[0].name}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="mb-0 text-sm align-items-center display-4">
                          {item.creatorName}
                        </span>
                      </td>

                      <td className="text-left">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={() =>
                                handleCreateVisualClick(item.inventoryItemId)
                              }
                            >
                              Create Visual
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">

                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Sources;
