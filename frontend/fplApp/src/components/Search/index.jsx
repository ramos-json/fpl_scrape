import { useState, useEffect } from "react"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"

const Search = () =>{
    const [error,setError] = useState(null)
    const [playerData, setPlayerData] = useState([])
    const [loading, setLoading] = useState(true)
    const [filtered, setFiltered] = useState([])
    const [searchQ,setSearchQ] = useState("")
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
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/player`)
        .then(response =>{
            setLoading(false)
            setPlayerData(response.data)
            setFiltered(response.data)
        })
        .catch(error=>{
            setError(error)
            setLoading(false)
        })
    }
    ,[])
    useEffect(()=>{
        if(playerData){
            setFiltered(playerData.filter(pl=>
                pl.name.toLowerCase().includes(searchQ.toLowerCase())
            ))
        }
    },[searchQ])
    if(loading) return <div>LOADING...</div>
    if(error) return <div>ERROR: {error.code}   BACKEND CAN TAKE TIME TO SPIN UP INITIALLY, REFRESH AFTER SOME TIME</div>

    const handleSearchChange =(event) =>{
        setSearchQ(event.target.value);
    };
    return(
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for players"
                    value={searchQ}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="playerTable">
                <DataGrid rows={filtered.map((item, index) => {
                                return { id: index + 1, ...item };
                                }).filter(player=> !player.name.includes("Squad") && !player.name.includes("Opponent"))
                            } 
                                      columns={columns} 
                                      pageSize={5} 
                                      sx={{
                          fontSize: '16px', // Applies font size to all text inside the grid
                        }} />
            </div>
        </div>
    )
}
export default Search;