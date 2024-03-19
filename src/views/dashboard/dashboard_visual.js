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
import mainjs from "./main.js"

const DashboardVisual = () => {
  const [data, setData] = useState([]);


  useEffect(() => {

    // let maindiv = document.getElementById('main-id');
    // let mainscript = document.createElement('script');
    // mainscript.src = `${mainjs}`;    
    // mainscript.async = true;
    // maindiv.append(mainscript);

    // let widgetWrapper = document.getElementById('widget-loader-id');
    // let script = document.createElement('script');
    // script.src = `http://localhost:8080/composer/embed/embed.js`;
    // script.dataset.name = 'composer-embed';
    // script.innerHTML = JSON.stringify({
    //         type: 'dashboard',
    //         "dashboardId":"65f81aead4b65d67150845d0"
    // });
    // script.async = true;
    // widgetWrapper.append(script);

    return () => {
      // Cleanup function to remove the script if necessary
     // document.head.removeChild(script);
    };
  }, []);

  return (
    <>
     
      <head>
       <meta charset="UTF-8"/>
       <title>Composer Embed</title>
       <script data-name="composer-embed-manager" src="http://localhost:8080/composer/embed/embed.js"></script>
      </head>
      <body>
          <Header />
          <Container className="mt--7" fluid>
                <div class="widget-holder"></div>
                <div class="message-holder"></div>
          </Container>
          {/* <script src="./main.js"></script> */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
       </body>
    </>
  );
};

export default DashboardVisual;
