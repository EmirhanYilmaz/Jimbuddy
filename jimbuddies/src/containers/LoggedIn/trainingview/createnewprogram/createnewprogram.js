import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import "../createnewprogram/createnewprogram.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "../createnewprogram/createnewprogram.css"
import { alpha, styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';




export const Createnewprogram = () => {



  const id = useRef(0);

  const [exercises, setExercises] = useState([]); // Use useReducer here, especially if you want to CRUD the exercises.

  const handleExerciseSetChange = (updatedExercise) => {
    setExercises((previousExercises) =>
      previousExercises.map((previousExercise) => {
        if (previousExercise.id === updatedExercise.id) {
          return updatedExercise;
        }

        return previousExercise;
      })
    );
  };

  const handleAddExercise = (excersiseToAdd) => {
    const exerciseToAdd = {
      weight: "",
      reps: "",
    };

    setExercises((previousExercises) => [...previousExercises, exerciseToAdd]);
  };
  const removeSet = (excersiseToAdd) => {};

  const [programForm, setForm] = useState({
    name: "",
    excersise: "",
    set: 1,
    weight: "",
    reps: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value,
      };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newProgram = { ...programForm };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProgram),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", excersise: "", set: "", weight: "", reps: "" });
  }

  console.log(programForm)



  return (
    <form onSubmit={onSubmit}>
      <div className="createprogramcontainer">
        <div className="createprogramcontainerinner">
          <div className="programName">
            <div className="createprogramhero">
              <h1>Creat your program!</h1>
            </div>

            <TextField label="Program name" id="outlined-start-adornment" />
          </div>

          <div className="excersiseinnercont">
            <div className="textfieldcont">
              <TextField
                label="Excersise"
                id="outlined-start-adornment"
                size="small"
                value={setForm.excersise}
                name="excersise"
                onChange={handleChange}
              
              />
            </div>

            <ul>
              {exercises.map((exercise, index) => (
                <div className="excersisebox">
                  <p id="setname">Set {index + 1}</p>

                  <div className="textfieldcont">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder="Weight"
                        size="small"
                        value={setForm.weight}
                        name="weight"
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                      />
                    </FormControl>
                  </div>

                  <p className="xTag">x</p>

                  <div className="textfieldcont">
                    <TextField
                      label="Reps"
                      id="outlined-start-adornment"
                      size="small"
                      value={setForm.reps}
                      name="reps"
                      onChange={handleChange}
                      
                      
                    />
                    <div className="removesetBtn">
                      <Button
                        variant="outlined"
                        size="small"
                        className="removeBtn"
                        style={{
                          maxWidth: "30px",
                          maxHeight: "30px",
                          minWidth: "30px",
                          minHeight: "30px",
                          borderStyle: "none",
                          color: "red",
                          marginLeft: "0.5rem",
                          fontSize: "1rem",
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
            <a id="addsettag" onClick={handleAddExercise}>
              Add set
            </a>
            <button className="submitBtn">submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};
