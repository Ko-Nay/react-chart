import { useState } from 'react';
import BarChart from './component/BarChart';
import { UserData } from './data/Data';

function App() {
  //access data from Data comp and insert into the state
  const [userData, setUserData] = useState({
    //data accepts 2 params; label and datasets
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'User Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['green', 'purple', 'orange', 'pink', 'blue', 'gray'],
      },
      {
        label: 'User Lost',
        data: UserData.map((data) => data.userLost),
        backgroundColor: ['gray', 'blue', 'pink', 'orange', 'purple', 'green'],
      },
    ],
  });

  return (
    <div>
      <div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
