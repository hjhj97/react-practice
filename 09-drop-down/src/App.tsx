import { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import "./App.css";

const data = [
  {
    name: "item 1",
    id: 1,
  },
  {
    name: "item 2",
    id: 2,
  },
  {
    name: "item 3",
    id: 3,
  },
];

function App() {
  const [items, setItems] = useState(data);

  const moveItems = (source: number, dest: number) => {
    const tmpArr = [...items];
    const [deletedItem] = tmpArr.splice(source, 1);
    tmpArr.splice(dest, 0, deletedItem);

    setItems(tmpArr);
  };
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination || source.index === destination?.index) return;
    moveItems(source.index, destination?.index);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                {(provided) => (
                  <div
                    className="box"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>{item.name}</div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
