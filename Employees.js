const Employees = (props) =>{


const updateEmployee = (employeeId) =>{
props.setSelectedEmployee(employeeId);
}

return(
    <div style={{backgroundColor:'black', color: 'white', padding: "20px 10px"}}>
        {props.data.map((employee)=>{
            return (
                <p 
                key={employee.id}
                onClick={() => {updateEmployee(employee.id) }} style ={{cursor:"pointer"}} role="button">
                    Name: {employee.name} ID# {employee.id} -- {employee.department}
                </p>
            );
        })}
    </div>
);
    };
export default Employees;