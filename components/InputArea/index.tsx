import * as C from "./styles";
import { ItemsType } from "../../types/ItemType";
import { useState } from "react";
import { Categories } from "../../data/categories";
type Props = {
  onAdd: (item: ItemsType) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  let categoryKeys: string[] = Object.keys(Categories);
  const [date, setDate] = useState("");

  const handleSendItem = () => {
    let errors: string[] = [];
    if (value <= 0) {
      errors.push("Valor inválido");
    }
    if (title === "") {
      errors.push("Título vazio!");
    }
    if (isNaN(new Date(date).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(category)) {
      errors.push("Categoria inválida!");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let newList: ItemsType = {
        date: new Date(date),
        category,
        title,
        value,
      };
      onAdd(newList);
      clearFields();
    }
  };

  const clearFields = () => {
    setCategory("");
    setDate("");
    setTitle("");
    setValue(0);
  };
  return (
    <C.Container>
      <input
        placeholder="Titulo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="R$"
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <select
        required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryKeys.map((item, k) => (
          <option value={item} key={k}>
            {Categories[item].title}
          </option>
        ))}
      </select>
      <button onClick={handleSendItem}>Cadastrar</button>
    </C.Container>
  );
};
