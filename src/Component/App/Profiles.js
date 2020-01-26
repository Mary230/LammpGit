import React from 'react';
import {Query} from 'react-apollo';
import './App.css';
import {Loader} from "./Loader";
import {USERQUERY} from "../../Queries/user_query";

export const Profiles = ({login}) => (
    <Query query={USERQUERY} variables={{login}}>
        {({data, loading}) => {
            return (loading ? <Loader variables={{loading}}/> :
                data ? <User data={data}/> :
                    <p className="yellowText">Try else</p>);
        }
        }
    </Query>
);

const User = ({data}) => {
    return (
        <div className="smallCard" > 
        <a href={data.user.login} className="whiteText">
            <img src={data.user.avatarUrl} alt="avatar" width="90%"/>
            <h1 >{data.user.login}</h1>
            <p className="login"> {data.user.name}</p>
            </a>
            
        </div>
    );
};