var Employees = React.createClass({
  render: function() {
      var employeeNodes = this.props.data.map(function(employee) {
      return (
        <Employee
          name={employee.name}
          position={employee.position}
          hireDate={employee.hireDate}
          yearsOfService={employee.yearsOfService}
          imgurl={employee.imgurl}
          DOB={employee.DOB}
          age={employee.age}
          key={employee.id}
          />
      );
    });
    return (
      <div className = "container">
        {employeeNodes}
      </div>
    );
  }
});

var Employee = React.createClass({
  render: function() {
    return (
      <div className = "card">
        <h2>{this.props.name}</h2>
          <h3>Position: {this.props.position}</h3>
          <h3>Hire Date: {this.props.hireDate}</h3>
          <h3>Years of Service: {this.props.yearsOfService}</h3>
          <h3>Date of Birth: {this.props.DOB}</h3>
          <h3>Age: {this.props.age}</h3>
        <img className = "pictures" src={this.props.imgurl}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Employees data={employeeList}/>,
  document.getElementById('content')
);
