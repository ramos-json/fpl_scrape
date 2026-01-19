import React,{ useState, useEffect } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"

const Data = () =>{
    const[playerData,setPlayerData] = useState([])
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(true)
    const columns = [
        { field: "name", headerName: "Name", width: 150 },
        { field: "nation", headerName: "Nation", width: 80 },
        { field: "position", headerName: "Position", width: 100 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "matches_played", headerName: "Matches", width: 70 },
        { field: "starts", headerName: "Starts", width: 70 },
        { field: "minutes_played", headerName: "Minutes", width: 100 },
        { field: "goals", headerName: "Goals", width: 70 },
        { field: "assists", headerName: "Assists", width: 70 },
        { field: "penalties_scored", headerName: "Penalties", width: 50 },
        { field: "yellow_cards", headerName: "Yellow Cards", width: 50 },
        { field: "red_cards", headerName: "Red Cards", width: 50 },
        { field: "expected_goals", headerName: "XG", width: 70 },
        { field: "expected_assists", headerName: "XAG", width: 70 },
        { field: "team_name", headerName: "Team", width: 100 },
    ]

    useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teamValue = params.get('team');
    const nationValue = params.get('nation');
    const positionValue = params.get('position');
    const nameValue = params.get('name');
    
    if (teamValue) {
      axios.get(`http://localhost:8080/api/v1/player?team=${encodeURIComponent(teamValue)}`)
        .then(response => {
          setPlayerData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } else if (nationValue){
      axios.get(`http://localhost:8080/api/v1/player?nation=${encodeURIComponent(nationValue)}`)
      .then(response => {
        setPlayerData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    } else if (positionValue){
      axios.get(`http://localhost:8080/api/v1/player?position=${encodeURIComponent(positionValue)}`)
      .then(response => {
        setPlayerData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    } else if (nameValue){
      axios.get(`http://localhost:8080/api/v1/player?name=${encodeURIComponent(nameValue)}`)
      .then(response => {
        setPlayerData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    }
      else {
      setLoading(false);
    }
  }, []);
  if(loading) return <div>LOADING...</div>
  if(error) return <div>ERROR: {error}</div>
    return(
        <>
            <DataGrid rows={playerData.map((item, index) => {
                return { id: index + 1, ...item };
                }).filter(player=> !player.name.includes("Squad") && !player.name.includes("Opponent"))
            } 
                      columns={columns} 
                      pageSize={5} />
                
        </>
    )
}
export default Data