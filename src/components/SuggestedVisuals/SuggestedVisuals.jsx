import React, { useState, useEffect } from "react";
import { suggested_visual_items } from "Shared/Constants/suggestedConstants";
import GraphFileList from "components/Accordion/GraphFileList";
import SuggestedVisual from "components/SuggestedVisual/SuggestedVisual";
import { useNavigate } from 'react-router-dom';


export default function SuggestedVisuals({ sourceId }) {
  const navigate  = useNavigate();
  const [visualItems, setVisualItems] = useState(suggested_visual_items);
  const [selected, setSelected] = useState(false);
  const [graphListModified, setGraphListModified] = useState([]);
  const [visualItemsModified, setVisualItemsModified] = useState([]);
  console.log("SuggestedVisuals");
  console.log(sourceId);
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
        const visualItemsModified=[];
		
		    jsonData.content.forEach(item => {
			        let graphObj=GraphFileList.find(obj => obj.graph === item.type);
			        if(graphObj!==undefined)
              {
                graphObj['visualTypeId']=item.visualTypeId;
                graphObj['sourceId']=sourceId;
                graphListModified.push(graphObj);
			        }			
		    });

        visualItems.forEach(item => {
          let graphObj=graphListModified.find(obj => obj.graph_types.includes(item.name));
          if(graphObj!==undefined)
          {
            visualItemsModified.push(item);
          }			
       });
       setVisualItemsModified(visualItemsModified);
       setGraphListModified(graphListModified);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


// Function to extract objects based on graph_types
const extractObjectsByGraphTypes = (list, graphTypes) => {
  return list.filter(obj => obj.graph_types.includes(graphTypes));
};



  const handleIconSelect = (selectedItem) => {
    //  const filteredItems = GraphFileList.filter((item) =>
    //    item.graph_types.includes(name)
    //  )
    if(selectedItem.graph!==undefined&&selectedItem.visualTypeId!==undefined){
      navigate('/admin/dashboard_visual', { state: selectedItem });
    }
    else{      
    const filteredItems =extractObjectsByGraphTypes(graphListModified,selectedItem.name);
    setVisualItemsModified(filteredItems);
    }
    setSelected(true);
  };

  const handleResetItems = () => {
    setVisualItemsModified(visualItemsModified);
    setSelected(false);
  };


  return (
    <>
      {selected && (        
         <div
         style={{
           position: "absolute",
           top: 0,
           right: 0,
           padding: "5px",
           cursor: "pointer",
           color: "blue",
         }}
         onClick={handleResetItems}
       >
         Go Back
       </div>
        
      )}

      {visualItemsModified.map((item) => (
        <SuggestedVisual
          key={item.name}
          name={item.name}
          icon={item.icon}
          handleIconSelect={() => handleIconSelect(item)}
        />
      ))}
    </>
  );
}
