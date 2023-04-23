import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees, handleEmployeeCardClick, selectTeam}) => {
    return ( 
        employees.map((employee) =>(
            <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectTeam={selectTeam} />
        ))
     );
}
 
export default TeamMembers;