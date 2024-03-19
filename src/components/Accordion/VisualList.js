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
// import graph_list from '../../assets/resources/graph_list.json';
import graph_list from './GraphFileList';  

const VisualList = ({ sourceId }) => {

    const [data, setData] = useState([]);
   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/composer/api/sources/65f18c7b35034f5ca7399e67/visual-types?includeRestriction=true',
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

	const getImage = async (imageName) => {
		const imageModule = await import(`../../assets/img/icons/common/list/${imageName}`);
		console.log("imageModule "+JSON.stringify(imageModule.default));
		return imageModule; 
	  };
  
    return (
        <Table className="align-items-center table-flush" responsive>

        <tbody>
        {/* {data.map((item) => (
                            //  <tr key={item.id}>
                            //     <td scope="row">
                            //       <Media className="align-items-center">                       
                            //         <Media>
                            //           <span className="mb-0 text-sm display-4">
                            //           {item.name}
                            //           </span>
                            //         </Media>
                            //       </Media>
                            //     </td>
                            //  </tr>             
        
        )} */}

		<tr  style={{ width: '900px' }}>
		<td>
		{graph_list.map((item) => (
			<div class="circle_block">
				<a href="methods/arc_diagram.html" class="circle">			
               {/*                 
					 <img src={
                      // eslint-disable-next-line no-template-curly-in-string
                      require('../../assets/img/icons/common/list/arc_diagram.svg')
                        .default
                    }
                    alt="data visualization"/>  */}
					 <img key={item.graph_name} src={item.file} alt={item.graph_name} style={{ width: '125px', height: '165px' }}/>
				</a>
                <p>{item.graph_name}</p>
			</div>
        ))}

		</td>

		</tr>    
        </tbody></Table>    
    );
};

export default VisualList;