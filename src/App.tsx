import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Internet Banking PJ</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de informações */}

        {/* Area de inserção */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
