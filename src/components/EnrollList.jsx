import axios from "axios";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  ThemeProvider,
  createTheme,
  MobileStepper,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Tabs,
  Tab,
  TextField,
  TableContainer,
  FormControl,
  InputLabel,
  Select,
  Switch,
  FormHelperText,
} from "@mui/material";

const EnrollList = () => {
  const [checked, setChecked] = useState(false);
  const [familyMembers, setFamilyMembers] = useState(0);
  const [listData, setListData] = useState([]);
  const [showList, setShowList] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [openStudentDetailsModal, setOpenStudentDetailsModal] =
    React.useState(false);

  const [student, setStudent] = useState({
    fullName: "",
    gender: "",
    father: "",
    email: "",
    phone: "",
    profession: "",
    village: "",
    batchYear: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "id":
        if (!value) newErrors.id = "Student ID is required.";
        else delete newErrors.id;
        break;
      // case "surname":
      //   if (!value) newErrors.surname = "Surname is required.";
      //   else delete newErrors.surname;
      //   break;
      case "fullName":
        if (!value) newErrors.fullName = "Name is required.";
        else delete newErrors.fullName;
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email is invalid.";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (!value) {
          newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          newErrors.phone = "Phone number must be 10 digits.";
        } else {
          delete newErrors.phone;
        }
        break;
      case "address":
        if (!value) newErrors.address = "Address is required.";
        else delete newErrors.address;
        break;
      //   case "profession":
      //     if (!value) newErrors.profession = "Profession is required.";
      //     else delete newErrors.profession;
      //     break;
      case "father":
        if (!value) newErrors.father = "Father's name is required.";
        else delete newErrors.father;
        break;
      case "profession":
        if (!value) newErrors.profession = "profession's name is required.";
        else delete newErrors.profession;
        break;
      // case "batchYear":
      //   if (!value) newErrors.batchYear = "Batch Year is required.";
      //   else if (!/^\d{4}$/.test(value)) {
      //     newErrors.batchYear = "Batch Year must be a 4-digit year.";
      //   } else {
      //     delete newErrors.batchYear;
      //   }
      //   break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });

    validateField(name, value); // validate each field on change
  };

  const handleSubmit = (event) => {
    console.log("student", student);
    console.log("errors", errors);
    event.preventDefault();
    try {
      if (
        Object.keys(errors).length === 0 &&
        Object.values(student).every((val) => val !== "")
      ) {
        axios
          // .post("http://localhost:1954/new-enroll", JSON.stringify(student))
          .post(
            "https://zphs-school.vercel.app/new-enroll",
            JSON.stringify(student)
          )
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
            if (data.message != "Same details enrolled") {
              setShowList(true);
              fetchListDate();
            }
          })
          .catch((error) => {
            // setShowList(false);
            // alert("catch", error);
            alert(error.message);
            console.log("Error occurred:", error);
          });
      } else {
        alert("some fileds missing");
      }
    } catch (err) {
      console.log("err", err);
    }
    // Final validation before submission
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetch("https://zphs-school.vercel.app/all-enrolls", {
        // fetch("http://localhost:1954/all-enrolls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({}),
      })
        .then((response) => response.json()) // Parse the JSON
        .then((data) => {
          setListData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading JSON:", error);
          setLoading(false);
        });
    } catch (er) {
      setLoading(false);
      console.log("er", er);
      alert("catch");
    }
  }, []);
  const fetchListDate = () => {
    try {
      fetch("https://zphs-school.vercel.app/all-enrolls", {
        // fetch("http://localhost:1954/all-enrolls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({}),
      })
        .then((response) => response.json()) // Parse the JSON
        .then((data) => {
          setListData(data);
        })
        .catch((error) => console.error("Error loading JSON:", error));
    } catch (er) {
      console.log("er", er);
      alert("catch");
    }
  };

  const [nameFilter, setNameFilter] = React.useState("");
  const [nameFilterTemp, setNameFilterTemp] = React.useState("");

  const [batchYearFilter, setBatchYearFilter] = React.useState("1999-2000");

  const getFilteredlist = () => {
    // console.log("filter", nameFilter, batchYearFilter);

    // console.log("listData", listData);
    return listData.filter((student) => {
      return (
        (student?.fullName.toLowerCase().includes(nameFilter.toLowerCase()) ||
          // student?.father.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student?.gender.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student?.village.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student?.profession
            .toLowerCase()
            .includes(nameFilter.toLowerCase())) &&
        (batchYearFilter === "" || student?.batchYear === batchYearFilter)
      );
    });
  };
  // console.log("getFilteredlist", getFilteredlist());

  const clearStudentFilters = () => {
    setNameFilter("");

    setBatchYearFilter("");
  };
  const getBatchYears = () => {
    const currentYear = new Date().getFullYear() - 1;
    const years = Array.from({ length: 55 }, (_, i) => {
      const year = currentYear - i;
      return `${year}-${year + 1}`;
    });
    // return years.reverse(); // Reverse to get the latest years first
    return years; // Reverse to get the latest years first
  };
  const handleRowClick = (student) => {
    // console.log("student", student);
  };
  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : showList ? (
        <div className="form-container">
          <Box sx={{ p: 3 }} className="box">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // mb: 3,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }} // Reduced font size
              >
                Enrollments
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // mb: 3,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1rem" }} // Reduced font size
              >
                All :{" "}
                {listData.reduce((acc, el) => acc + (el.enrolled ? 1 : 0), 0)} /{" "}
                {listData.length}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1rem" }} // Reduced font size
              >
                Search :{" "}
                {getFilteredlist().reduce(
                  (acc, el) => acc + (el.enrolled ? 1 : 0),
                  0
                )}{" "}
                / {getFilteredlist().length}
              </Typography>
            </Box>

            {/* New Student Button */}
            {/* <Box sx={{ mb: 3, textAlign: "right" }}>
              <Button
                onClick={() => setShowList(false)}
                variant="contained"
                color="primary"
                // href="https://zphs-school.vercel.app/enroll-form"
                // href="https://sakinalaraju100.github.io/zphs-school/public/addStudentForm.html"
              >
                New enroll
              </Button>
            </Box> */}

            {/* Filters Section */}

            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 2,
                }}
              >
                <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: "0.875rem" }}
                  ></Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "grey.100",
                      borderRadius: 1,
                      px: 2,
                    }}
                  >
                    <span className="material-icons" sx={{ color: "grey.500" }}>
                      school
                    </span>
                    <select
                      value={batchYearFilter}
                      onChange={(e) => {
                        // console.log("batchYearFilter", e.target.value);
                        setBatchYearFilter(e.target.value);
                      }}
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "8px",
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    >
                      <option value="">All Batch Years</option>
                      {getBatchYears().map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: "0.875rem" }}
                  ></Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "grey.100",
                      borderRadius: 1,
                      px: 2,
                    }}
                  >
                    <span className="material-icons" sx={{ color: "grey.500" }}>
                      search
                    </span>
                    <input
                      type="text"
                      // value={nameFilter}
                      // onChange={(e) => setNameFilter(e.target.value)}
                      value={nameFilterTemp}
                      onChange={(e) => {
                        setNameFilterTemp(e.target.value);
                        console.log(
                          "e.target.value.length",
                          e.target.value.length
                        );
                        if (e.target.value.length > 2) {
                          setNameFilter(e.target.value);
                        } else {
                          setNameFilter("");
                        }
                      }}
                      placeholder="Filter by name, profession, gender or village..."
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "8px",
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    />
                    {nameFilter && (
                      <IconButton
                        onClick={() => {
                          setNameFilter("");
                          setNameFilterTemp("");
                        }}
                        sx={{ ml: 1 }}
                      >
                        <span
                          className="material-icons"
                          style={{ color: "grey.500" }}
                        >
                          clear
                        </span>
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ overflowX: "auto" }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "primary.main",
                        position: "sticky",
                        left: 0,
                        zIndex: 1,
                      }}
                    >
                      No.
                    </TableCell>
                    {/*<TableCell
                        sx={{
                          // width: "100px",
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "primary.main",
                          position: "sticky",
                          left: 0,
                          zIndex: 1,
                        }}
                      >
                        Full Name
                      </TableCell>*/}
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Full Name
                    </TableCell>
                    {/* <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Father
                    </TableCell> */}

                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Gender
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Phone
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Profession
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Village
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Batch Year
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getFilteredlist().map((student, ind) => (
                    <TableRow
                      key={ind}
                      onClick={() => {
                        setSelectedStudent(student);
                        setOpenStudentDetailsModal(true);
                        setChecked(student?.enrolled);
                      }}
                      sx={{
                        "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                        "&:hover": { bgcolor: "grey.100" },
                      }}
                    >
                      <TableCell
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          position: "sticky",
                          left: 0,
                          backgroundColor: "lightblue",
                          zIndex: 1,
                        }}
                      >
                        {student?.Code ?? "-"}
                      </TableCell>
                      <TableCell>{student?.fullName ?? "-"}</TableCell>
                      {/* <TableCell>{student?.father}</TableCell> */}
                      <TableCell>{student?.gender ?? "-"}</TableCell>
                      <TableCell>{student?.phone ?? "-"}</TableCell>
                      <TableCell>
                        {student?.profession ? student?.profession : "-"}
                      </TableCell>
                      <TableCell>{student?.village ?? "-"}</TableCell>
                      <TableCell>{student?.batchYear ?? "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "0.875rem" }}
              >
                For any updates to student information, please contact the
                school administration.
              </Typography>
            </Box>
          </Box>
        </div>
      ) : (
        <div className="form-container">
          <h2>Student Information Form</h2>
          <form onSubmit={handleSubmit}>
            {/*  <form
                  action="https://zphs-school.vercel.app/new-enroll"
                  method="POST"
                >*/}
            {/* Batch Year */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Batch Year</InputLabel>
              <Select
                label="Batch Year"
                name="batchYear"
                value={student.batchYear}
                onChange={handleChange}
              >
                {Array.from({ length: 55 }, (_, index) => {
                  const year = new Date().getFullYear() - index;
                  return (
                    <MenuItem key={year} value={year - 1 + "-" + year}>
                      {year - 1}
                      {"-"}
                      {year}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText error={Boolean(errors.batchYear)}>
                {errors.batchYear}
              </FormHelperText>
            </FormControl>
            {/* Name */}
            <TextField
              label="Name"
              name="fullName"
              value={student.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
            {/* Father's Name */}
            <TextField
              label="Father's Name"
              name="father"
              value={student.father}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.father)}
              helperText={errors.father}
            />
            {/* Gender */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={student.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={student.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            {/* Phone */}
            <TextField
              label="Phone"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />

            {/* profession */}
            <TextField
              label="Profession"
              name="profession"
              value={student.profession}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.profession)}
              helperText={errors.profession}
            />

            {/* Village */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Village</InputLabel>
              <Select
                label="Village"
                name="village"
                value={student.village}
                onChange={handleChange}
              >
                <MenuItem value="Kunur">Kunur</MenuItem>
                <MenuItem value="Raghunathpalle">Raghunathpalle</MenuItem>
                <MenuItem value="Konaichelam">Konaichelam</MenuItem>
                <MenuItem value="Garmilapally">Garmilapally</MenuItem>
                <MenuItem value="Thammadapally">Thammadapally</MenuItem>
                <MenuItem value="Uppugal">Uppugal</MenuItem>
              </Select>
            </FormControl>

            {/* Button Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button
                // onClick={() => window.history.back()}
                onClick={() => setShowList(true)}
                variant="outlined"
                color="secondary"
                style={{ flex: 1, marginRight: "10px" }} // Added margin for spacing
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ flex: 1 }} // Adjusted to take equal space
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
      {/* Modal for Student Details*/}
      {selectedStudent && (
        <Dialog
          open={openStudentDetailsModal}
          onClose={() => setOpenStudentDetailsModal(false)}
          fullWidth
          maxWidth="sm"
          sx={{
            fontSize: "6px",
            "& .MuiDialogContent-root": {
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Vertical centering
            },
            "& .MuiDialogTitle-root": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  flex: 1,
                  fontSize: { xs: "12px", md: "15px", lg: "18px" },
                }}
              >
                Enrollment Details
              </Typography>
              <IconButton onClick={() => setOpenStudentDetailsModal(false)}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            {selectedStudent && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 2,
                  fontSize: { xs: "12px", md: "15px", lg: "18px" },
                }}
              >
                {/* Display student's photo in a circle */}
                <Box
                  component="img"
                  // src={
                  //   "https://drive.google.com/thumbnail?id=1cPyIpmPL-n24bhuBv7XPzP2hXmS5E7FD&sz=w1000"
                  // }
                  src={"./studentEmoji.png"}
                  alt={selectedStudent?.fullName}
                  sx={{
                    width: { xs: 60, sm: 100 },
                    height: { xs: 60, sm: 100 },
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                {/* Display student details */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  Enroll :{" "}
                  <Switch
                    checked={checked ?? false}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                    }}
                    // value={selectedStudent?.enrolled}
                    defaultChecked
                  />
                </Typography>
                {checked && (
                  <Typography
                    variant="body1"
                    sx={{
                      width: "100%",
                      fontSize: { xs: "12px", md: "15px", lg: "18px" },
                    }}
                  >
                    <TextField
                      label="Peoples with you"
                      type="number"
                      size="small"
                      // defaultValue={0}
                      // variant="standard"
                      value={familyMembers}
                      onChange={(e) => {
                        setFamilyMembers(e.target.value);
                      }}
                      sx={{
                        width: "100px",
                        color: "blue",
                        // bgcolor: "red",
                        // border: "1px solid pink",
                        borderRadius: "4px",
                      }}
                    ></TextField>

                    <IconButton
                      sx={{
                        color: "blue",
                      }}
                      onClick={() => {
                        console.log("Checked", checked, familyMembers);
                      }}
                    >
                      <span className="material-icons">done</span>
                    </IconButton>
                    {/* <strong>Enroll Code:</strong> {selectedStudent?.Code ?? "-"} */}
                  </Typography>
                )}
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Enroll Code:</strong> {selectedStudent?.Code ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  xs={12}
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Full Name:</strong> {selectedStudent?.fullName ?? "-"}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Batch Year:</strong>{" "}
                  {selectedStudent?.batchYear ?? "-"}
                </Typography>
                {/* <Typography variant="body1">
                  <strong>Father:</strong> {selectedStudent.father}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {selectedStudent.email}
                </Typography> */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Phone:</strong> {selectedStudent?.phone ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Village:</strong> {selectedStudent?.village ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Profession:</strong>{" "}
                  {selectedStudent?.profession ?? "-"}
                </Typography>

                {/* <Box>
                  <Button variant="outlined">Edit</Button>
                </Box> */}
              </Box>
            )}
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default EnrollList;
