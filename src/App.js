import Select, { createFilter } from 'react-select';
import CustomOption from './components/CustomOption'
import CustomMenuList from './components/MenuList';

import './index.css'
import data from './data.json'

const App = () => {
  const { options } = data

  return (
    <div>
      <Select
        onChange={e => { console.log(e) }}
        options={options}
        filterOption={createFilter({ ignoreAccents: false })}
        components={{ Option: CustomOption, MenuList: CustomMenuList }}
      />
    </div>
  );
}

export default App;