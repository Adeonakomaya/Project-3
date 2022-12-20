const Employee = (props) => {
    return <div  style={{backgroundColor:'black', color: 'white', padding: "20px 10px"}}>

<h1>Name: {props.data.name}</h1>
<p>ID# {props.data.id}</p>    
<p>Department: {props.data.department}</p>
<p> Role: {props.data.role} </p>
<p>Start date: {props.data.startDate}</p>
<img src={props.data.photo}></img>
<br></br><br></br>
<button onClick={props.resetState}>Back to List</button>
    
    </div>;
   //output all the data about the employee.
};

export default Employee;