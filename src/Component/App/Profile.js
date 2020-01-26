import React from "react";
import {Query} from 'react-apollo'
import {Repositories} from "./Reps";
import './App.css';
import Grid from "@material-ui/core/Grid";
import {useParams} from "react-router";
import {FollowUser, UnfollowUser} from "./FollowUser";
import {Loader} from "./Loader";
import {MY_REPOSITORIES} from "../../Queries/my_repositories";
import {USER_REPOSITORIES} from "../../Queries/user_repositories";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    flexDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    lssc: {
        flexDirection: 'row'
    },
    hrForProfile: {
        border: "0",
    height: "1px",
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0))",
    width: "100%"
    },
    ProfAndReps: {
        marginRight: "2%"
    },
    avatar: {
        marginLeft: "10px",
        marginTop: "10px",
        borderRadius: "4%",
        boxShadow: "0px 0px 2px 3px #dbbe79",
    }

  }));

function DisplayFullprofile(props) {
    const classes = useStyles();
    const {data} = props
    return (<div>
            <Grid container
  direction="row"
  justify="space-around"
  alignItems="center" >
                <Grid item xs={6} className={classes.ProfAndReps}>
                    <div className="card">
                        <div className="UserCard">
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={6}>
                            <img src={data.avatarUrl} alt="avatar" width="100%" className={classes.avatar}/>
                            </Grid>
                            <Grid item xs={4} style={{color: "white"}}>
                            <div className={classes.flexDiv}>
                                    <p>Name: {data.name}</p>
                                    
                            <p >Login: {data.login}</p>
                            <p> Email: {data.email? data.email: "-"}</p>
                            <hr className={classes.hrForProfile}/>
                            {!data.isViewer && !data.viewerIsFollowing && <FollowUser id={data.id}/>}
                            {data.isViewer && <p>It is my acc</p>}
                            {!data.isViewer && data.viewerIsFollowing && <UnfollowUser id={data.id}/>}<hr className={classes.hrForProfile}/>
                            <a href={"https://github.com/"+data.login} className="cardLink">Go to {data.name}'s github<ArrowForwardIcon/></a>
                            </div></Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} >
                    <h2 style={{color: "white"}}>Repositories</h2>
                    <Repositories repositories={data.repositories} login={data.login}/>
                </Grid>
            </Grid>
        </div>
    )
}

function Myrepositories() {
    return (
        <Query query={MY_REPOSITORIES} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return <Loader variables={{loading}}/>;
                return (
                    <DisplayFullprofile data={data.viewer}/>)
            }}
        </Query>
    );
}

export function UserRepositories() {
    let {login} = useParams();
    return (
        <Query query={USER_REPOSITORIES} variables={{login}}>
            {({data, loading}) => {
                if (loading) return <Loader variables={{loading}}/>;
                return (
                    <DisplayFullprofile data={data?.user}/>)
            }}
        </Query>
    );
}

export default Myrepositories;