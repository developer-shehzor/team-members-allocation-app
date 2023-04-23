import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectTeam')) || 'TeamB');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectTeam', JSON.stringify(selectTeam));
  }, [selectTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectTeam }
      : employee);

    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header selectTeam={selectTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectTeam).length}
      />
      <Routes>
        <Route path='/' 
        element={<Employees employees={employees} 
        selectTeam={selectTeam} 
        handleEmployeeCardClick={handleEmployeeCardClick} 
        handleTeamSelectionChange={handleTeamSelectionChange} 
        />}> 
        </Route>
        <Route path='GroupedTeamMembers' element = {<GroupedTeamMembers employees={employees} selectTeam={selectTeam} setTeam={setTeam} />}>
        </Route>
        <Route path='*' element = {<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
