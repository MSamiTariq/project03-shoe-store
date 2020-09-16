import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import img8 from '../img/img8.jfif';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',

        position: 'absolute',
        // position: 'absolute',
        left: '0',
        top: '0',
        zIndex: -1,
    },

}));


export default function Home() {
    const classes = useStyles();
    return (
        <div style={{ height: 'auto', width: '100%', backgroundColor: 'black' }}>
            <img src={img8} className={classes.root} />
            <Link to='/items'>
                <Button variant="contained" color="secondary" disableElevation style= {{position: "absolute", top: '88%', left: '50%' , opacity: 0.7}}>
                    SHOP NOW
                </Button>
            </Link>
        </div>
    )
}

