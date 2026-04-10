import { Fragment } from "react";

function FormInputs({ inputTypes, stateObj, changeStateObj, index = null }) {
  let typeIndex = 0;
  return (
    <>
      {Object.keys(stateObj).map((key) =>
        key === "id" ? null : (
          <Fragment key={key + (index ?? "")}>
            <label htmlFor={key + (index ?? "")}>
              {key
                .split("_")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
              :
            </label>
            <input
              id={key + (index ?? "")}
              type={inputTypes[typeIndex++]}
              value={stateObj[key]}
              onChange={(e) => changeStateObj(key, e.target.value, index)}
            />
          </Fragment>
        ),
      )}
    </>
  );
}

export default FormInputs;
