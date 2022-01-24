import * as C from "./styles";
import { ItemsType } from "../../types/ItemType";
import { ListMap } from "../ListMap";
import { Categories } from "../../data/categories";
import { useState } from "react";
type Props = {
  data: ItemsType[];
  delItems: (title: string) => void;
};
export const ListItems = ({ data, delItems }: Props) => {
  let categoryKeys: string[] = Object.keys(Categories);
  const [cat, setCat] = useState("");

  return (
    <C.Container>
      <thead>
        <tr>
          <C.ContainerHeadColum width={100}>Data</C.ContainerHeadColum>
          <C.ContainerHeadColum width={130}>Categoria</C.ContainerHeadColum>
          <C.ContainerHeadColum>Titulo</C.ContainerHeadColum>
          <C.ContainerHeadColum width={150}>Valor</C.ContainerHeadColum>
          <C.ContainerHeadColum width={70}>Acão</C.ContainerHeadColum>
        </tr>
      </thead>
      <tbody>
        {cat === "" && (
          <>
            {data.map((item, k) => (
              <ListMap item={item} key={k} delItems={delItems} />
            ))}
          </>
        )}
        {cat !== "" && (
          <>
            {data
              .filter((item) => item.category === cat)
              .map((item, k) => (
                <ListMap item={item} key={k} delItems={delItems} />
              ))}
          </>
        )}
      </tbody>
      <select value={cat} onChange={(e) => setCat(e.target.value)}>
        <option value="">Todas do mes</option>
        {categoryKeys.map((item, k) => (
          <option value={item} key={k}>
            {Categories[item].title}
          </option>
        ))}
      </select>
    </C.Container>
  );
};
