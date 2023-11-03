import React from "react";
import { ButtonComponent } from "./styles";

export interface IButton {
  text?: string;
  fullSize?: boolean;
}

function Button({ text, fullSize }: IButton) {
  return (
    <ButtonComponent fullSize={fullSize}>
      {text}
    </ButtonComponent>
  )
}

export default Button;