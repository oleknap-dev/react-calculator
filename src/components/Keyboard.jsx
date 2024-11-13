import React from "react";
import Button from "./Button";

function Keyboard({
  onButtonClick,
  isResultDisplayed,
  onMouseDownCE,
  onMouseUpCE,
}) {
  const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  return (
    <div className="keyboard">
      {numbers.map((label) => (
        <Button
          onClick={() => onButtonClick(label)}
          key={`btn-${label}`}
          label={label}
          className={`button-${label}`}
        />
      ))}
      <Button
        onClick={() => onButtonClick(".")}
        key="btn-dot"
        label="."
        className="button-dot"
      />
      <Button
        onClick={() => onButtonClick("+")}
        key="btn-add"
        label="+"
        className="button-add"
      />
      <Button
        onClick={() => onButtonClick("-")}
        key="btn-substract"
        label="-"
        className="button-substract"
      />
      <Button
        onClick={() => onButtonClick("*")}
        key="btn-multiply"
        label="×"
        className="button-multiply"
      />
      <Button
        onClick={() => onButtonClick("/")}
        key="btn-divide"
        label="÷"
        className="button-divide"
      />
      <Button
        onClick={() => onButtonClick("=")}
        key="btn-equal"
        label="="
        className="button-equal"
      />
      <Button
        onClick={() => onButtonClick("CE")}
        onMouseDown={onMouseDownCE}
        onMouseUp={onMouseUpCE}
        key="btn-ce"
        label={isResultDisplayed ? "AC" : "CE"}
        className="button-ce"
      />
      <Button
        onClick={() => onButtonClick("(")}
        key="btn-openbracket"
        label="("
        className="button-openbracket"
      />
      <Button
        onClick={() => onButtonClick(")")}
        key="btn-closebracket"
        label=")"
        className="button-closebracket"
      />
      <Button
        onClick={() => onButtonClick("%")}
        key="btn-precent"
        label="%"
        className="button-percent"
      />
    </div>
  );
}

export default Keyboard;
