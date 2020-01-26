import React, {useState} from 'react';
import Reps from "./Reps";
import {Profiles} from "./Profiles";
import './App.css';
import {Button, ButtonGroup} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    yellowBut: {
        color: "#dbbe79"
    }
  }));

function Search() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filter, setFilter] = useState(true);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const classes = useStyles();
    
    return (

        <div>
            <div className="Search">
            <ButtonGroup variant="text" aria-label="text button group" >
                <Button className="but" onClick={() => setFilter(true)} className={classes.yellowBut}>User</Button>
                <Button onClick={() => setFilter(false)} className={classes.yellowBut}>Repositories</Button>
            </ButtonGroup>
                
                <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

            <div className="App">
                {filter&&searchTerm ?
                    <Profiles login={searchTerm}/> :
                    <Reps quer={searchTerm}/>
                }
            </div></div>
        </div>
    );
}

export default Search