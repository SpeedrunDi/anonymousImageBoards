import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

const InputForm = ({onPostMessage}) => {
  const [state, setState] = useState({
    author: "",
    message: "",
    image: ""
  });

  const inputChange = e => {
    const {name, value} = e.target;

    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fileChange = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setState(prev => ({...prev, [name]: file}));
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });

    await onPostMessage(formData);
    setState({
      author: "",
      message: "",
      image: ""
    });
  };

  return (
    <Grid maxWidth="780px" padding="30px 15px 10px" margin="0 auto" border="3px solid gray" borderTop="none">
      <form autoComplete="off" onSubmit={onSubmit}>
        <Grid container justifyContent="space-around" marginBottom="40px">
          <TextField
            label="Name" name="author"
            variant="outlined" color="success"
            onChange={inputChange}
            value={state.author}
          />
          <TextField
            type="file" name="image"
            color="success"
            onChange={fileChange}
          />
        </Grid>
        <Grid>
          <TextField
            label="Message" name="message"
            fullWidth multiline required
            rows={3} color="success"
            onChange={inputChange}
            value={state.message}
          />
        </Grid>
        <Button
          type="submit"
          variant="outlined" color="success"
          sx={{margin: "20px 10px 0 auto", display: "block"}}
        >
          Send
        </Button>
      </form>
    </Grid>
  );
};

export default InputForm;