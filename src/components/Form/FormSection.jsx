import { useState } from "react";
import FormInputs from "./FormInputs";

function FormSection({
  initialState,
  changeState,
  inputTypes,
  hide,
  subSectionClassName = "",
  objConstructor = null,
}) {
  const [state, setState] = useState(
    Array.isArray(initialState)
      ? initialState.map((obj) => ({ ...obj }))
      : { ...initialState },
  );

  function changeValue(key, value, index = null) {
    let stateCopy;
    if (index !== null) {
      stateCopy = state.map((o) => ({ ...o }));
      stateCopy[index][key] = value;
    } else {
      stateCopy = { ...state };
      stateCopy[key] = value;
    }
    setState(stateCopy);
  }

  return (
    <form
      onSubmit={() => {
        changeState(state);
        hide();
      }}
    >
      {Array.isArray(state) ? (
        state.map((obj, index) => (
          <section key={obj.id} className={subSectionClassName}>
            <FormInputs
              inputTypes={inputTypes}
              stateObj={state[index]}
              changeStateObj={changeValue}
              index={index}
            />
            <button
              type="button"
              onClick={() => {
                setState(
                  state.filter((o) => o.id !== obj.id).map((o) => ({ ...o })),
                );
              }}
            >
              🗑︎
            </button>
            <button
              type="button"
              onClick={() => {
                if (index > 0) {
                  const stateCopy = state.map((o) => ({ ...o }));
                  stateCopy[index] = stateCopy[index - 1];
                  stateCopy[index - 1] = { ...state[index] };
                  setState(stateCopy);
                }
              }}
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => {
                if (index < state.length - 1) {
                  const stateCopy = state.map((o) => ({ ...o }));
                  stateCopy[index] = stateCopy[index + 1];
                  stateCopy[index + 1] = { ...state[index] };
                  setState(stateCopy);
                }
              }}
            >
              ↓
            </button>
          </section>
        ))
      ) : (
        <FormInputs
          inputTypes={inputTypes}
          stateObj={state}
          changeStateObj={changeValue}
        />
      )}
      {Array.isArray(state) && (
        <button
          type="button"
          onClick={() => {
            setState(state.map((o) => ({ ...o })).concat(new objConstructor()));
          }}
        >
          +
        </button>
      )}
      <button type="button" onClick={hide}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSection;
