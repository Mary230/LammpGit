import {MoonLoader} from "react-spinners";
import React from "react";
import {useParams} from "react-router";

export const Loader = () => {
    let {loading} = useParams();
    const style = {
        paddingTop: '15px',
        justifySelf: 'center'
    };
    return (
        <div style={style}>
            <MoonLoader
                sizeUnit={"px"}
                size={20}
                color={'#dbbe79'}
                loading={loading}
            /></div>
    )
}