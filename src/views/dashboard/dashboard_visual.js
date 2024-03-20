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

const DashboardVisual = () => {
  const [src, setSrc] = useState(
    process.env.REACT_APP_COMPOSER_URL +
      "/visualization/visual-65f81adcd4b65d67150845ce"
  );

  useEffect(() => {
    const dynamicSrc2 =
      process.env.REACT_APP_COMPOSER_URL +
      "/visualization/visual-65f81adcd4b65d67150845ce";
    setSrc(dynamicSrc2);
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <iframe
          src={src}
          width="1400"
          height="600"
          title="Embedded Content"
          frameBorder="0"
          style={{ paddingTop: 46 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </>
  );
};

export default DashboardVisual;
