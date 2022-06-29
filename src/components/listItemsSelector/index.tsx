import React, { useState } from "react";

import items from "./items";
import ListItem from "./listItem";
import "./styles.css";

const ListItemsSelector = () => {
  const [selectedNamesList, setSelectedNamesList] = useState<Array<string>>([]);

  const handleSelection = (name: string) => {
    if (selectedNamesList.includes(name)) {
      // Remove item
      setSelectedNamesList((selectedNamesList) =>
        selectedNamesList.filter((item) => item !== name)
      );
    } else {
      // Add item
      setSelectedNamesList((selectedNamesList) => [...selectedNamesList, name]);
    }
  };

  return (
    <>
      <div>
        <p>Names Selected: {selectedNamesList.join(", ")}</p>
      </div>
      <hr />
      <ul className="List">
        {items.map((item) => (
          <ListItem
            key={item.name}
            item={item}
            isSelected={selectedNamesList.includes(item.name)}
            handleSelection={handleSelection}
          />
        ))}
      </ul>
    </>
  );
};

export default ListItemsSelector;
