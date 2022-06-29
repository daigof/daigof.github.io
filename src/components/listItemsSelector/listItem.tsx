import React, { useEffect, useRef } from "react";

import type { Item } from "./items";

interface ListItemProps {
  item: Item;
  handleSelection: (itemName: string) => void;
  isSelected: boolean;
}

/*
  return true for skipping
  return false to render
  */
const propsAreEqual = (prevProps: ListItemProps, nextProps: ListItemProps) => {
  if (prevProps.isSelected === nextProps.isSelected) {
    return true;
  }

  return false;
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, handleSelection, isSelected }) => {
    const rendersCount = useRef(0);
    useEffect(() => console.log(rendersCount.current++));

    return (
      <li
        className={`List__item List__item--${item.color} ${
          isSelected ? "List__item__selected" : ""
        }`}
        onClick={() => handleSelection(item.name)}
      >
        {item.name}
      </li>
    );
  },
  propsAreEqual
);

export default ListItem;
