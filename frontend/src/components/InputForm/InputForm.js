import React, {useState} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import FileInput from "../UI/Form/FileInput/FileInput";

const InputForm = ({onPostMessage, onOpenModal}) => {
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

    onOpenModal();
  };

  return (
    <Grid maxWidth="780px" padding="30px 15px 10px" margin="0 auto" border="3px solid gray" >
      <Typography variant="h5" textAlign="center" marginBottom="30px">
        Add new massage
      </Typography>
      <form autoComplete="off" onSubmit={onSubmit}>
        <Grid marginBottom="40px">
          <Grid item marginBottom="20px">
            <TextField
              fullWidth
              label="Name"
              name="author"
              variant="outlined"
              color="success"
              onChange={inputChange}
              value={state.author}
            />
          </Grid>
          <Grid item>
            <FileInput
              label="Image"
              name="image"
              onChange={fileChange}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Message"
            name="message"
            fullWidth
            multiline
            required
            rows={3}
            color="success"
            onChange={inputChange}
            value={state.message}
          />
        </Grid>
        <Grid container justifyContent="space-around" paddingY="20px">
          <Button
            variant="outlined"
            color="error"
            onClick={onOpenModal}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="outlined" color="success"
          >
            Send
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default InputForm;