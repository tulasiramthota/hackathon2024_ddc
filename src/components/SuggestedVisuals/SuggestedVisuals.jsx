import { useState } from "react";
import { suggested_visual_items } from "Shared/Constants/suggestedConstants";
import { GraphIconList } from "Shared/Constants/suggestedConstants";
import SuggestedVisual from "components/SuggestedVisual/SuggestedVisual";
// import { ZdDialog } from "components/ZdDialog/ZdDialog";

export default function SuggestedVisuals() {
  const [visualItems, setVisualItems] = useState(suggested_visual_items);
  const [selected, setSelected] = useState(false);

  const handleIconSelect = (name) => {
    const filteredItems = GraphIconList.filter((item) =>
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
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleResetItems}
        >
          go back
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
