/*!

*/
// reactstrap components
import React, { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
// core components
import Header from "components/Headers/Header.js";

const Sources = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/composer/api/inventory?sort=NAME&sortOrder=ASC&includeItems=ALL&favorites=false&type=SOURCE',
        {
          method: 'GET',
          headers: {
            Authorization: `Basic ${btoa('admin:Z00mda1a!')}`,
            'Content-Type':'application/vnd.composer.v3+json'
          }
        });
        const jsonData = await response.json();
        console.log(jsonData.content);
        setData(jsonData.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleCreateVisualClick = () => {
    navigate('/admin/visual_accordion',{ sourceId: '123' }); 
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
                    <th scope="col" className="text-sm">Connection Type</th>
                    <th scope="col" className="text-sm">Source Name</th>
                    <th scope="col" className="text-sm">Connection Name</th>
                    <th scope="col" className="text-sm">User</th>
                    <th scope="col" className="text-sm">Action</th>
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
                                        <td> <span className="mb-0 text-sm align-items-center display-4">
                                              {item.creatorName}
                                              </span></td>
                                                          
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
                                                onClick={handleCreateVisualClick}
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
                  {/* <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination> */}
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
