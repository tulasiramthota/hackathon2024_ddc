/*!

*/
// reactstrap components
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
// core components
import Header from "components/Headers/Header.js";
import VisualList from "components/Accordion/VisualList";
import SuggestedVisuals from "components/SuggestedVisuals/SuggestedVisuals";

const VisualAccordion = () => {
  const location = useLocation();
  const { state } = location;
  const [sourceId, setSourceId] = useState();

  useEffect(() => {
    if (state && state.sourceId) {
      setSourceId(state.sourceId);
    }
  }, [state]);
  console.log("VisualAccordion");
  console.log(sourceId);
  const items = [
    {
      title: "Visual Suggested",
      content: sourceId ? <SuggestedVisuals sourceId={sourceId} /> : null,
      sourceId: sourceId,
    },
    {
      title: "Visual Selection",
      content: sourceId ? <VisualList sourceId={sourceId} /> : null,
      sourceId: sourceId,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1); // -1 represents no active item
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle active state
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
                <h3 className="mb-0">Visual Accordion</h3>
              </CardHeader>
              <div className="accordion" style={{ paddingLeft: "25px" }}>
                {items.map((item, index) => (
                  <div key={item.title} className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleClick(index)}
                      style={{
                        backgroundColor: "#5e96e4",
                        color: "#fff",
                        marginRight: "25px",
                        cursor: "pointer",
                      }}
                    >
                      {item.title}
                    </h2>
                    <div
                      className="accordion-content"
                      style={{
                        display: activeIndex === index ? "flex" : "none",
                        flexWrap: "wrap", // Allow items to wrap to the next line if needed
                        justifyContent: "space-between", // Space items evenly along the main axis
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <CardFooter className="py-4"></CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default VisualAccordion;
