const Teams = ({selectTeam, handleTeamSelectionChange}) => {
    return ( 
        <select className="form-select form-select-lg" value={selectTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
     );
}
 
export default Teams;