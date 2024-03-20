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
import { useLocation } from 'react-router-dom';
// core components
import Header from "components/Headers/Header.js";

const DashboardVisual = () => {
  const location = useLocation();
  const receivedData = location.state;
  const [initialVisual, setInitialVisual] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState();

  console.log("DashboardVisual")
  console.log(JSON.stringify(receivedData))

  
  // const [src, setSrc] = useState(
  //   process.env.REACT_APP_COMPOSER_URL +
  //     "/visualization/visual-65f81adcd4b65d67150845ce"
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the first API
        const initialVisualData = await fetch(process.env.REACT_APP_COMPOSER_URL +'/api/sources/'+receivedData.sourceId+'/visual-types/'+receivedData.visualTypeId+'/initial-visual',
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${process.env.REACT_APP_ADMIN_NAME}:${process.env.REACT_APP_PASSWORD}`
            )}`,
            "Content-Type": "application/vnd.composer.v3+json",
          },
        });
        const data1 = await initialVisualData.json();
        setInitialVisual(data1);
        data1["visualName"]=data1.visualName+"-"+Math.floor(Math.random() * 50000) + 1;;
        data1["description"]=" "+data1.visualName;
        data1["controlsCfg"]={"playerControlCfg": {}};
        // Call the second API after the first one finishes
        const response2 = await fetch(process.env.REACT_APP_COMPOSER_URL +'/api/visuals/',
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${process.env.REACT_APP_ADMIN_NAME}:${process.env.REACT_APP_PASSWORD}`
            )}`,
            "Content-Type": "application/vnd.composer.v3+json",
          },
          body: JSON.stringify(data1),
        });
        const data2 = await response2.json();
        setData2(data2);
        const dynamicSrc2 =
        process.env.REACT_APP_COMPOSER_URL +
        "/visualization/visual-"+data2.id;
        setSrc(dynamicSrc2);

        // Set loading to false when all API calls are complete
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);      }

     
    };
    fetchData();
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
