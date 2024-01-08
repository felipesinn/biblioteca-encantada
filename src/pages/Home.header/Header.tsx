import { Inputs } from "../input/input";
import { HeaderStyle } from "./style";
import { H1 } from "./style";
export function Header() {
  return (
    <>
      <HeaderStyle>
        <H1>Biblioteca Mágica </H1>
      </HeaderStyle>
      <Inputs />
    </>
  );
}
