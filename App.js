import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Employees from './components/Employees';
import Error from './components/Error';
import Loading from './components/Loading';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
function App() {
  const [loading, setLoading] = useState(true);
  const [EmployeeData, setEmployeeData] = useState([]);
const [selectedEmployee, setSelectedEmployee] = useState(null);
const [error, setError] = useState(false);
const resetState = () =>{
  setEmployeeData([]);
  setSelectedEmployee(null);
  setLoading(true);
  setError(false);
  getEmployeeData();

}

  const getEmployeeData = (id=null) =>{
    setLoading(true);
    let actualId = "";
    if(!!id && parseInt(id,10) > 0 ){
    actualId = parseInt(id,10);
    }



      axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response => {
      setEmployeeData(response.data);
      setLoading(false);
    })
  .catch((error) =>{
    setError(error.message || "No error given");
  })
  };
  useEffect(()=>{
    getEmployeeData();
  },[]);

  useEffect(() => {
    if(!!selectedEmployee){
      getEmployeeData(selectedEmployee);
    }


  }, [selectedEmployee])

  return (
    <div className="App">
      {!!error && <Error resetState={resetState} message={error}/>}
      {!error && <div>
        {!!loading && <Loading />}
      {!loading && (<div>
        {!selectedEmployee && (<Employees setSelectedEmployee={setSelectedEmployee} data={EmployeeData}/>)}

        {!!selectedEmployee && <Employee resetState={resetState} data={EmployeeData} />}
       
      
      </div>
        )}
    </div>
}
        </div>
          
  );
};
export default App;
