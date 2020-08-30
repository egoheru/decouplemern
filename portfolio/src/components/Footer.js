import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
    root:{
      "& .MuiBottomNavigation-root": {
        mainWidth: 0,
        maxWidth: 250,
      },
      "& .MuiSvgIcon-root":{
          fill: "tan",
          "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem"
          }
      }
    },
});
const Footer = () => {
    const classes = useStyles()
    const preventDefault = (event) => event.preventDefault();
  
    return (
        <BottomNavigation width="auto" style={{background: "#000428"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            label="inkedIn"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ego-enzy-3b65511b4/"
            target="_blank"
            icon={<LinkedIn/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            label="Twitter"
            rel="noopener noreferrer"
            href="https://twitter.com/CODEMYWAY1"
            target="_blank"
            icon={<Twitter/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            label="Instagram"
            rel="noopener noreferrer"
            href="https://www.instagram.com/codingmyway/"
            target="_blank"
            icon={<Instagram/>}
            />
        </BottomNavigation>
        
            
        
    );
};

export default Footer;
