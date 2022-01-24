import React, { useEffect, useState } from "react";
import * as C from "./appStyled";
import { CategoriesType } from "./types/CategoryItems";
import { ItemsType } from "./types/ItemType";
import { Categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterMonth } from "./helpers/dateFilter";
import { ListItems } from "./components/ListItems";
import { InputArea } from "./components/InputArea";
import { InfoArea } from "./components/InforArea";

function App() {
  const [list, setList] = useState<ItemsType[]>(items);
  const [filterList, setFilterList] = useState<ItemsType[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterList(filterMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  //calcular valores das despesas/month
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filterList) {
      if (Categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }
    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [filterList]);

  const handleAddItem = (item: ItemsType) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  const delItems = (title: string) => {
    setList((prevActions) =>
      prevActions.filter((item) => item.title !== title)
    );
  };

  return (
    <C.Container>
      <C.Header>
        <h1>Sistema financeiro</h1>
      </C.Header>
      <C.Body>
        {/*info */}
        <InfoArea
          currentMonth={currentMonth}
          onChangeMonth={handleChangeMonth}
          income={income}
          expense={expense}
        />

        {/*insercao */}
        <InputArea onAdd={handleAddItem} />

        {/*tabela */}

        <ListItems data={filterList} delItems={delItems} />
      </C.Body>
    </C.Container>
  );
}

export default App;
