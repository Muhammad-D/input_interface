import "./App.scss";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomCheckbox from "./components/CustomCheckbox/CustomCheckbox";
import { useRef, useState } from "react";

function App() {
  const [app__container, setApp__container] = useState(["app__container"]);

  const [task, setTask] = useState("");
  const [toggleValue, toggle] = useState(false);

  const doubleSlash = useRef(null);

  const handleDoubleslesh = (e) => {
    setTask(e.currentTarget.value);
    if (e.currentTarget.value.endsWith("//")) {
      toggle(!toggleValue);
      setTask(e.currentTarget.value.replace("//", ""));
    }
  };

  const onTaskFocusHandler = (e) => {
    if (app__container.length === 1) {
      setApp__container([...app__container, "app__container_focus"]);
    }
  };
  const onTaskBlurHandler = (e) => {
    if (app__container.length > 1) {
      setApp__container(app__container.filter((el) => el === "app__container"));
    }
  };

  return (
    <div className="app">
      <div className={app__container.join(" ")}>
        <CustomCheckbox />
        {toggleValue ? (
          <>
            <span>
              {task}
              <span ref={doubleSlash} className="app__double-slash">
                //
              </span>
            </span>
          </>
        ) : (
          <input
            className="app__task-input"
            type="text"
            placeholder="Write a new task"
            onFocus={onTaskFocusHandler}
            onBlur={onTaskBlurHandler}
            value={task}
            onChange={handleDoubleslesh}
          />
        )}
        {toggleValue && (
          <input
            type="text"
            className="app__note-input"
            placeholder="write note"
            autoFocus
          />
        )}
        <div className="app__calendar-logo">
          <DateRangeIcon />
        </div>
        <div className="app__dropdown-container">
          <span className="app__dropdown-titile">
            <RadioButtonUncheckedIcon className="app__title-circle-logo" />{" "}
            <span>No list</span>{" "}
            <ExpandMoreIcon className="app__title-arrow-logo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
