import * as C from "./styles";
type Props = {
  title: string;
  value: number;
  color?: string;
};
export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container color={color}>
      <h4>{title}</h4>
      <h5>
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h5>
    </C.Container>
  );
};
