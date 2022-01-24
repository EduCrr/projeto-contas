import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
type Props = {
  currentMonth: string;
  onChangeMonth: (newMonth: string) => void;
  expense: number;
  income: number;
};

export const InfoArea = ({
  currentMonth,
  onChangeMonth,
  expense,
  income,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onChangeMonth(
      `${currentDate.getUTCFullYear()}- ${currentDate.getMonth() + 1}`
    );
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onChangeMonth(
      `${currentDate.getUTCFullYear()}- ${currentDate.getMonth() + 1}`
    );
  };

  return (
    <C.Container>
      <C.Month>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.Month>
      <C.Resume>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.Resume>
    </C.Container>
  );
};
