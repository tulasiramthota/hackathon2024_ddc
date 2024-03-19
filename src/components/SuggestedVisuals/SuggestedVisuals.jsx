import { useState } from "react";
import { suggested_visual_items } from "Shared/Constants/suggestedConstants";
import { demoItems } from "Shared/Constants/suggestedConstants";
import SuggestedVisual from "components/SuggestedVisual/SuggestedVisual";
// import { ZdDialog } from "components/ZdDialog/ZdDialog";

export default function SuggestedVisuals() {
  // const [visualItems, setVisualItems] = useState(suggested_visual_items);
  // const handleIconSelect = () => {
  //   setVisualItems(demoItems);
  //   console.log("HELLO");
  // };

  return suggested_visual_items.map(({ name, icon }) => (
    <>
      <SuggestedVisual name={name} icon={icon}></SuggestedVisual>
    </>
  ));
}
