import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, updateUser } from "../active/Active";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
const Crud = () => {
  const theme = createTheme();
  let navigate = useNavigate();
  const { id } = useParams();

  const [inputData, setinputData] = useState({});

  const [index, setIndex] = useState("");

  const userList = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setinputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [person, setPerson] = useState([]);

  const handleSubmite = (event) => {
    setPerson(event.target.value);
  };

  const handleClick = (e) => {
  
    e.preventDefault();

    const a = inputData;
    if (a?.id)   {
      inputData.person = person;
      setinputData(inputData);

      dispatch(updateUser(inputData));
    }
     else
      {
      a.person = person;
      a.id = new Date().getTime();
      setIndex("");
      setPerson([]);
      dispatch(addUser(inputData));
    }
    navigate("/datatable");
  };

  useEffect(() => {
    if (id) {
      const userEditData = userList.find((item) => item.id == id);
console.log();
      if (userEditData) {
        setinputData({ ...userEditData });
        setPerson(userEditData.person);
      }
    }
  }, [id]);

  console.log(inputData, "inputData");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  autoComplete="firstName"
                  value={inputData?.firstName}
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="lastName"
                  value={inputData?.lastName}
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={inputData?.email}
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="password"
                  type="password"
                  value={inputData?.password}
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => handleChange(e)}
                />

                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="female"
                      onChange={(e) => handleChange(e)}
                      checked={inputData.gender == "female"}
                      name="gender"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      onChange={(e) => handleChange(e)}
                      checked={inputData.gender == "male"}
                      name="gender"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    name="sportsName"
                    value={person}
                    onChange={(event) => handleSubmite(event)}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={person.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(e) => handleClick(e)}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default Crud;
