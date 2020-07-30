import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import image001 from '../../assets/images/image002.png';
import image003 from '../../assets/images/image003.png';
import image004 from '../../assets/images/image004.png';


const Footer = ({classes}) => {
    return (
    <footer className={classes.footerWrapper}>
        <Grid container direction="column" alignItems="center">
        <Grid item><Typography>Contact Us on</Typography></Grid>
        <Grid item className={classes.imgWrapper}>
        <img src={image001} alt="Facebook"/>
        <img src={image003} alt="Twitter"/>
        <img src={image004} alt="LinkedIn"/>
        </Grid>
        </Grid>
    </footer>
    )
}

const styles = () => ({
    footerWrapper:{
        bottom: '0',
        padding: '10px',
        position: 'fixed',
        width: '100%',
        background: '#a9c1cc42'
    },
    imgWrapper:{            
        '&>img':{
            padding: '5px'
        }
    }
});

export default withStyles(styles)(Footer);