import React from 'react';
import {Grid, Typography} from "@mui/material";

const Message = ({message}) => {
  return (
    <Grid
      container direction="row" padding="10px 20px"
      marginBottom="20px" bgcolor="#e0e0e0"
      boxShadow="2px 2px 5px black"
    >
      {message.image ?
        <Grid width="30%">
          <img src={message.image} alt=""/>
        </Grid> :
        null
      }
      <Grid width={message.image ? "70%" : "100%"}>
        <Typography variant="h6">
          <Typography textTransform="capitalize" variant="span" marginRight="10px" color="green">
            {message.author ? message.author : "Anonymous"}
          </Typography>
          <Typography variant="span" fontSize="15px" fontStyle="italic">
            {message.datetime}
          </Typography>
        </Typography>
        <Typography paddingLeft="20px" paddingTop="10px">
          {message.message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Message;