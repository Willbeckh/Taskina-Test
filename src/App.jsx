import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    pages: {
      page1: false,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
      page6: false,
    },
  });

  // checkboxes state management
  const handleAllPagesToggle = () => {
    //toggles state when all pages is clicked
    const newState = !checkedItems.allPages;

    setCheckedItems({
      allPages: newState,
      pages: Object.keys(checkedItems.pages).reduce(
        // using .reduce to iterate thru pages and return a new pageItem with a newState
        (acc, key) => ({ ...acc, [key]: newState }),
        {}
      ),
    });
  };

  // handling individual checkbox
  const handlePageToggle = (page) => {
    const newState = !checkedItems.pages[page]; // check & set state of single checkbox
    setCheckedItems((prevState) => ({
      ...prevState,
      pages: {
        ...prevState.pages,
        [page]: newState,
      },
      allPages: Object.values(prevState.pages).every((item) => item)
        ? newState
        : false,
    }));
  };

  // page labels for dynamic and scalability
  const pageLabels = [
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
  ];

  return (
    <div className="container">
      <div className="content">
        <div>
          <Checkbox
            label="All pages"
            checked={checkedItems.allPages}
            onChange={handleAllPagesToggle}
          />
        </div>
        <hr />

        <div className="pageList">
          {pageLabels.map((label, index) => (
            <Checkbox
              key={index}
              label={label}
              checked={checkedItems.pages[`page${index + 1}`]}
              onChange={() => handlePageToggle(`page${index + 1}`)}
            />
          ))}
        </div>
        <hr />

        <Button color="#ffce22" label="Done" />
      </div>
    </div>
  );
};

export default App;
