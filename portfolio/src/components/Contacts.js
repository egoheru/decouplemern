import React from 'react';
import Navbar from "./Navbar";
import PostMessages from '../components2/PostMessages';
import {Provider} from "react-redux";
import {store} from "../actions/store";
import {Container, AppBar, Typography} from "@material-ui/core";
import ButterToast, {POS_RIGHT,POS_TOP} from "butter-toast";

function Contacts() {
    return (
      <Provider store={store}>       
          <Navbar/>
          From contact 
          <Container maxWidth="lg">
              <AppBar position="static" color="inherit">
                  <Typography
                    variant="h2"
                    align="center">
                        Place your order
                    </Typography>
              </AppBar>
          <PostMessages/>
          <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}} />
          </Container>
         </Provider>
    );
}

export default Contacts
