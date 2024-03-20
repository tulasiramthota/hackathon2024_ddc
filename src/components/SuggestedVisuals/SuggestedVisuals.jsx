import { useState } from "react";
import { suggested_visual_items } from "Shared/Constants/suggestedConstants";
import GraphFileList from "components/Accordion/GraphFileList";
import SuggestedVisual from "components/SuggestedVisual/SuggestedVisual";
// import { ZdDialog } from "components/ZdDialog/ZdDialog";

export default function SuggestedVisuals() {
  const [visualItems, setVisualItems] = useState(suggested_visual_items);
  const [selected, setSelected] = useState(false);

  const handleIconSelect = (name) => {
    const filteredItems = GraphFileList.filter((item) =>
      item.graph_types.includes(name)
    );
    setVisualItems(filteredItems);
    setSelected(true);
  };

  const handleResetItems = () => {
    setVisualItems(suggested_visual_items);
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

      {visualItems.map(({ name, icon }) => (
        <SuggestedVisual
          key={name}
          name={name}
          icon={icon}
          handleIconSelect={() => handleIconSelect(name)}
        />
      ))}
    </>
  );
}
