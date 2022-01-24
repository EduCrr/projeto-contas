import * as C from "./styles";
import { ItemsType } from "../../types/ItemType";
import { formatDate } from "../../helpers/dateFilter";
import { Categories } from "../../data/categories";
type Props = {
  item: ItemsType;
  delItems: (title: string) => void;
};
export const ListMap = ({ item, delItems }: Props) => {
  const handleRemove = (item: string) => {
    delItems(item);
  };
  return (
    <C.Container>
      <C.ContainerColum>{formatDate(item.date)}</C.ContainerColum>
      <C.ContainerColum>
        <C.Category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.Category>
      </C.ContainerColum>
      <C.ContainerColum>{item.title}</C.ContainerColum>
      <C.ContainerColum>
        <C.Value color={Categories[item.category].expense ? "red" : "green"}>
          {item.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </C.Value>
      </C.ContainerColum>
      <C.ContainerColum>
        <button onClick={() => handleRemove(item.title)}>Remover</button>
      </C.ContainerColum>
    </C.Container>
  );
};
