import {useParams} from "react-router";
import {Query} from "@apollo/react-components";
import React from "react";
import './App.css';
import {Loader} from "./Loader";
import {GET_REPOSITORY} from "../../Queries/get_repository";
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import StarIcon from '@material-ui/icons/Star';
import { Grid } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



function DisplayRepos(props) {
    const {data} = props;
    return (<div className="repoCard">
        <a href={"/"+login} className="yellowText"><KeyboardBackspaceIcon/></a>
            <div className="RepositoryCard">
            <Grid container direction="row" justify="space-between" alignItems="center">
            <   Grid item xs={6}>
                    <p><FilterNoneIcon/>{data.repository.owner.login}/{data.repository.name}</p>
                </Grid>
                <Grid item xs={6}>
                    {data.repository.stargazers.totalCount} <StarIcon/>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={6}>
                <p> Language:{data.repository.primaryLanguage && data.repository.primaryLanguage.name}</p>
                {data.repository.description}
                </Grid>
                <Grid item xs={6}/>
                <Grid item xs={6}/>
                <Grid item xs={6}>
                <a href={data.repository.url} className="whiteText"> Go to GitHub<ArrowForwardIcon fontSize="small"/></a>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export const Repository = () => {
    let {login, name} = useParams();
    return (<Query query={GET_REPOSITORY} variables={{login, name}}>
        {({data, loading}) => {
            return (loading ? <Loader variables={{loading}}/> :
                data ? <DisplayRepos data={data}/> :
                    <div className="yellowText"><a href={"/"+login}><KeyboardBackspaceIcon/></a>
                        <p>This repository is blocked</p></div>);
        }
        }
    </Query>);
};