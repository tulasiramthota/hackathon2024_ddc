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
// import graph_list from '../../assets/resources/graph_list.json';
import graph_list from "./GraphFileList";

const VisualList = ({ sourceId }) => {
	const navigate  = useNavigate();
	console.log("VisualList");	
	console.log(sourceId);
  const [data, setData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(sourceId);
        const response = await fetch(
          `${process.env.REACT_APP_COMPOSER_URL}/api/sources/${sourceId}/visual-types?includeRestriction=true`,
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
		const graphListModified=[];
		jsonData.content.forEach(item => {
			let graphObj=graph_list.find(obj => obj.graph === item.type);
			if(graphObj!==undefined){
				graphObj['visualTypeId']=item.visualTypeId;
				graphObj['sourceId']=sourceId;
                graphListModified.push(graphObj);
			}			
		});	
        setData(graphListModified);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getImage = async (imageName) => {
    const imageModule = await import(
      `../../assets/img/icons/common/list/${imageName}`
    );
    console.log("imageModule " + JSON.stringify(imageModule.default));
    return imageModule;
  };

  const handleIconSelect = (selectedItem) => {
    //  const filteredItems = GraphFileList.filter((item) =>
    //    item.graph_types.includes(name)
    //  )
    if(selectedItem.graph!==undefined&&selectedItem.visualTypeId!==undefined){
      navigate('/admin/dashboard_visual', { state: selectedItem });
    }
  };

  return (
    <>
      {data.map((item) => (
        <div
          className="circle_block"
          style={{
            flex: "0 0 calc(25% - 20px)", // 25% width minus margin
            marginRight: "20px",
            marginBottom: "20px", // Add margin bottom for spacing between rows
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <a href="" class="circle">
            <img
              key={item.name}
              src={item.icon}
              alt={item.name}
              style={{ width: "125px", height: "165px" }}
			  onClick={() => handleIconSelect(item)}
            />
          </a>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default VisualList;
