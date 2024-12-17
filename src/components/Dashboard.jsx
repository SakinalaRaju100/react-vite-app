import React from "react";

import {
  AppBar,
  Box,
  Button,
  // Textarea,
  InputAdornment,
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
  DialogTitle,
  DialogContent,
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
} from "@mui/material";
let addData = [];
try {
  fetch("./ads.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      // console.log("data", data);
      addData = data;
    })
    .catch((error) => console.error("Error loading JSON:", error));
} catch (er) {
  console.log("er", er);
  alert("catch");
}

// Students List
let studentsList = [];
try {
  fetch("./students.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      // console.log("data", data);
      studentsList = data;
    })
    .catch((error) => console.error("Error loading JSON:", error));
} catch (er) {
  console.log("er", er);
  alert("catch");
}

// Teachers List
let teachersList = [];
try {
  fetch("/teachers.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      // console.log("data", data);
      teachersList = data;
    })
    .catch((error) => console.error("Error loading JSON:", error));
} catch (er) {
  console.log("err", err);
  alert("catch");
}

// const addData = [
//   {
//     name: "",
//     mobile: "",
//     title: "Ad Title 01",
//     adImage: "https://via.placeholder.com/300x200",
//     description:
//       "Description for advertisement 1. This is a brief overview of the ad content",
//   },
//   {
//     name: "",
//     mobile: "",
//     title: "Ad Title 02",
//     adImage: "https://via.placeholder.com/300x200",
//     description:
//       "Description for advertisement 1. This is a brief overview of the ad content",
//   },
//   {
//     name: "",
//     mobile: "",
//     title: "Ad Title 03",
//     adImage: "https://via.placeholder.com/300x200",
//     description:
//       "Description for advertisement 1. This is a brief overview of the ad content",
//   },
// ];

const youtubeVideos = [
  {
    id: "mzD0-xQHBDw",
    title: "School celebrations",
  },
  {
    id: "7Y5q41D8_hs",
    title: "Sports events",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

// Carousel images
const carouselImages = [
  {
    label: "Welcome to ZPHS Kunur",
    imgPath:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Empowering minds, Building futures",
  },
  {
    label: "Quality Education",
    imgPath:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Excellence in Learning",
  },
  {
    label: "Modern Facilities",
    imgPath:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "State-of-the-art Infrastructure",
  },
];

const newsImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
];

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Annual Day Celebrations",
    date: "October 15, 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Sports Day",
    date: "September 20, 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Science Exhibition",
    date: "August 25, 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Cultural Events",
    date: "July 30, 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Reading Competition",
    date: "July 15, 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Teacher's Day",
    date: "September 5, 2023",
  },
];

const newsUpdates = [
  {
    title: "Annual Day Celebrations",
    description:
      "Join us for our grand Annual Day celebrations featuring cultural performances and prize distributions.",
    icon: "event",
    date: "October 15, 2023",
    image: newsImages[0],
  },
  {
    title: "Academic Excellence Awards",
    description:
      "Our students receive prestigious academic excellence awards at the district level competition.",
    icon: "grade",
    date: "September 30, 2023",
    image: newsImages[1],
  },
  {
    title: "New Library Collection",
    description:
      "School library expanded with addition of 1000+ new books across various subjects and categories.",
    icon: "local_library",
    date: "September 25, 2023",
    image: newsImages[2],
  },
];

const nriStories = [
  {
    name: "Mr. Thota.Ravinder",
  },
  {
    name: "Mr. Mutcha.Shyamsundar Reddy",
  },
  {
    name: "Mr. Chenda. Ramesh",
  },
  {
    name: "Mr. Chenda. Harinadh",
  },
  {
    name: "Mrs. Chenda. Swarnalatha",
  },
  {
    name: "Mr. Pallepati.Raju",
  },
  {
    name: "Mr. Bulle.Mallesh",
  },
  {
    name: "Mr. Bommineni.Laxmareddy",
  },
  {
    name: "Mr. Bommineni.Jagan mohan Reddy",
  },
  {
    name: "Mr. Pinninti.Raghothham Reddy",
  },
  // {
  //   name: "Dr. Ramesh Kumar",
  //   location: "San Francisco, USA",
  //   profession: "Senior Software Engineer at Google",
  //   batch: "1995",
  //   story:
  //     "After graduating from ZPHS Kunur in 1995, I pursued computer science and eventually landed at Google. I'm proud of my roots and regularly contribute to our school's technology initiatives.",
  //   image:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  // },
  // {
  //   name: "Dr. Priya Sharma",
  //   location: "London, UK",
  //   profession: "Cardiovascular Surgeon",
  //   batch: "1988",
  //   story:
  //     "ZPHS Kunur gave me the foundation for my medical career. Today, I lead a cardiac surgery department in London and organize medical camps back home.",
  //   image:
  //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  // },
  // {
  //   name: "Mr. Suresh Reddy",
  //   location: "Dubai, UAE",
  //   profession: "Business Magnate",
  //   batch: "1992",
  //   story:
  //     "From humble beginnings at ZPHS Kunur to building a business empire in Dubai. I believe in giving back and have established a scholarship fund for deserving students.",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  // },
];

// New developer data
const developers = [
  {
    name: "Sakinala.Raju",
    role: "Lead Developement",
    expertise: "Full Stack Developer",
    technologies: ["React", "Node.js", "MongoDB"],
    githubProfile: "https://github.com/raju",
    linkedinProfile: "https://linkedin.com/in/raju",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Suthri. Murali",
    role: "Lead Deployment",
    expertise: "Full Stack Developer",
    technologies: ["React", "Material-UI", "CSS"],
    githubProfile: "https://github.com/murali",
    linkedinProfile: "https://linkedin.com/in/murali",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

// Previous Donations
const previousDonations = [
  {
    name: "From NRI's",
    amount: 235116,
    date: "2023-10-15",
    purpose: "For Golden jubilee",
  },
  {
    name: "From Ads",
    amount: 550000,
    date: "2023-09-20",
    purpose: "For Golden jubilee",
  },
  {
    name: "Batch wise Contributions",
    amount: 629540,
    date: "2023-09-01",
    purpose: "For Golden jubilee",
  },
  {
    name: "Sri Aroori Ramesh garu",
    amount: 300000,
    date: "2023-09-01",
    purpose: "For Golden jubilee",
  },
  {
    name: "Ganketi.Venkateshwar Reddy",
    amount: 0,
    date: "2023-09-01",
    purpose: "Food for two days",
  },
];

// Achievements Section
const achievements = [
  {
    title: "State Level Science Fair Winners",
    date: "August 2023",
    description:
      "Our students won first place in the State Level Science Fair Competition",
    icon: "emoji_events",
  },
  {
    title: "100% Pass Rate in Class X",
    date: "May 2023",
    description:
      "All our students successfully passed Class X examinations with distinction",
    icon: "school",
  },
  {
    title: "Best School Award",
    date: "July 2023",
    description:
      "Received Best School Award from the District Education Department",
    icon: "stars",
  },
  {
    title: "National Sports Championship",
    date: "July 2023",
    description:
      "Our school team won Gold in National Level Sports Championship",
    icon: "sports_score",
  },
  {
    title: "Math Olympiad Winners",
    date: "June 2023",
    description: "Students secured top positions in State Math Olympiad",
    icon: "calculate",
  },
  {
    title: "Cultural Excellence",
    date: "May 2023",
    description: "First prize in State Level Cultural Competition",
    icon: "theater_comedy",
  },
  {
    title: "View More Achievements",
    date: "",
    description: "Click to see all our achievements and accolades",
    icon: "add_circle",
    isViewMore: true,
  },
];

// Future Focus
const futureFocus = [
  {
    title: "Innovation Hub",
    description:
      "Establishing a state-of-the-art innovation lab to foster creativity and technological advancement among students",
    icon: "lightbulb",
    target: "2024",
  },
  {
    title: "Global Connect",
    description:
      "International collaboration programs and exchange initiatives to provide global exposure to our students",
    icon: "public",
    target: "2025",
  },
  {
    title: "Research Center",
    description:
      "Development of advanced research facilities to promote scientific thinking and innovation",
    icon: "science",
    target: "2024",
  },
];

// Education Standards
const educationStandards = [
  {
    title: "Academic Excellence",
    description:
      "Following state board curriculum with enhanced learning methodologies",
    icon: "auto_stories",
  },
  {
    title: "Quality Teachers",
    description: "Highly qualified and experienced teaching staff",
    icon: "psychology",
  },
  {
    title: "Modern Pedagogy",
    description:
      "Interactive learning with digital tools and practical applications",
    icon: "devices",
  },
];

const adCarouselImages = [
  // // {
  // //   image:
  // //     "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  // //   title: "Ad Title 1",
  // //   description: "This is the description for Ad 1.",
  // // },
  // {
  //   image:
  //     "https://drive.google.com/thumbnail?id=1eFn94QmBCrW4tRTv9ziwrZ5M32B3vtMp&sz=w1000",
  //   title: "Ad Title new",
  //   description: "This is the description for Ad 1.",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //   title: "Ad Title 2",
  //   description: "This is the description for Ad 2.",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //   title: "Ad Title 3",
  //   description: "This is the description for Ad 3.",
  // },

  {
    SNo: 1,
    page: 1,
    title: "ZPHS School",
    image:
      "https://drive.google.com/thumbnail?id=1-6hCnYvJG0XbWYKVrjoc7ca-Vd59SCUx&sz=w1000",
  },
  {
    SNo: 2,
    page: 2,
    title: "Hiranmai Constructions And Precast Materials",
    image:
      "https://drive.google.com/thumbnail?id=1uwswwB8LFIsA3q9mTQUrMO5RY0csA4Ht&sz=w1000",
  },
  {
    SNo: 3,
    page: 4,
    title: "Sai Bhavani motors And Goldnoon",
    image:
      "https://drive.google.com/thumbnail?id=1BNn7Ri0X-9kXJDEBreN97Bct_SHyUVGD&sz=w1000",
  },
  {
    SNo: 3,
    page: 8,
    title: "Neelima Book Bank",
    image:
      "https://drive.google.com/thumbnail?id=1OTMpkCS52MoQhqUU6gAVgZy7G7IJ05HC&sz=w1000",
  },
  {
    SNo: 3,
    page: 12,
    title: "Rudra Power Point",
    image:
      "https://drive.google.com/thumbnail?id=1gd1eyv53jOLoSVnp6eBDWWxhzHGJX9-u&sz=w1000",
  },
  {
    SNo: 3,
    page: 19,
    title: "Geeta Auto Commercials",
    image:
      "https://drive.google.com/thumbnail?id=1eYrnqFB_zvFZFbqdGWVBuqxci3KZnTl_&sz=w1000",
  },
  {
    SNo: 3,
    page: 22,
    title: "Anjana Chit Funds",
    image:
      "https://drive.google.com/thumbnail?id=1ks4BD6a4FtgwqLL9Me-YzQlpdV66q_IX&sz=w1000",
  },
  {
    SNo: 3,
    page: 24,
    title: "ZPHS Principals",
    image:
      "https://drive.google.com/thumbnail?id=1U5KimFJeKyc8gHMFTIFSKP4FeQoUTVAn&sz=w1000",
  },
  {
    SNo: 3,
    page: 27,
    title: "Allphores IIT & NEET Academy",
    image:
      "https://drive.google.com/thumbnail?id=1zYYvYMmbvGF0sLQriIoE5RRnrvffz-8P&sz=w1000",
  },
  {
    SNo: 3,
    page: 29,
    title: "Natural & Pure Oils",
    image:
      "https://drive.google.com/thumbnail?id=1mGvqa9ffjJ0FoxRY91g3StcjiIp4zl3E&sz=w1000",
  },
  {
    SNo: 3,
    page: 35,
    title: "Annapurna Seeds & Pesticides",
    image:
      "https://drive.google.com/thumbnail?id=1jhBS7tfcEw5uvKi_rgzIYVw-vYTaUgiT&sz=w1000",
  },
  {
    SNo: 3,
    page: 39,
    title: "CIVILDEN Green infra pvt.ltd",
    image:
      "https://drive.google.com/thumbnail?id=1jQb4C1pyG8QXCwtl4w4aTrTXaitBZ4Ot&sz=w1000",
  },
  {
    SNo: 3,
    page: 42,
    title: "Cable tech Industries",
    image:
      "https://drive.google.com/thumbnail?id=1eCr3FbNPwhE8WCGjXTybCZnhmFDsiCeq&sz=w1000",
  },
];

// Carousel for Ads
const AdCarousel = () => {
  const [adCarouselIndex, setAdCarouselIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setAdCarouselIndex((prev) =>
        prev === adCarouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Removed adCarouselIndex from dependency array

  return (
    <Box sx={{ position: "relative", my: 0 }}>
      <Paper
        square
        onClick={() =>
          setAdCarouselIndex((prev) =>
            prev === adCarouselImages.length - 1 ? 0 : prev + 1
          )
        }
        elevation={0}
        sx={{
          // width: { sm: "210mm", md: "360mm", lg: "520mm" },
          // height: "300mm",
          height: { xs: "90vh", lg: "90vh" },

          // height: "75vh",
          position: "relative",
          // backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "70mm ", lg: "90mm " },
          backgroundPosition: "center",
          backgroundImage: `url(${adCarouselImages[adCarouselIndex].image})`,
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "white",
          }}
        >
          <Typography variant="h6">
            {adCarouselImages[adCarouselIndex].title}
          </Typography>
          {/*<Typography variant="body2">
              {adCarouselImages[adCarouselIndex].description}
            </Typography>*/}
        </Box>
        <MobileStepper
          steps={adCarouselImages.length}
          position="static"
          activeStep={adCarouselIndex}
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
          }}
        />
        <IconButton
          onClick={() =>
            setAdCarouselIndex((prev) =>
              prev === 0 ? adCarouselImages.length - 1 : prev - 1
            )
          }
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <span className="material-icons">chevron_left</span>
        </IconButton>
        <IconButton
          onClick={() =>
            setAdCarouselIndex((prev) =>
              prev === adCarouselImages.length - 1 ? 0 : prev + 1
            )
          }
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <span className="material-icons">chevron_right</span>
        </IconButton>
      </Paper>
    </Box>
  );
};

const Dashboard = () => {
  const [openAttendanceModal, setOpenAttendanceModal] = React.useState(false); // Step 1: State for Attendance Modal

  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [openStudentDetailsModal, setOpenStudentDetailsModal] =
    React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = carouselImages.length;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [alumniAnchorEl, setAlumniAnchorEl] = React.useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = React.useState(null);
  const [schoolAnchorEl, setSchoolAnchorEl] = React.useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = React.useState(null);
  const [openGalleryModal, setOpenGalleryModal] = React.useState(false);
  const [galleryCarouselIndex, setGalleryCarouselIndex] = React.useState(0);
  const [openSuccessStoriesModal, setOpenSuccessStoriesModal] =
    React.useState(false);
  const [openSavineerModal, setOpenSavineerModal] = React.useState(false);
  const [openDonateModal, setOpenDonateModal] = React.useState(false);
  const [openStudentsModal, setOpenStudentsModal] = React.useState(false);
  const [openTeachersModal, setOpenTeachersModal] = React.useState(false);
  const [openAlumniModal, setOpenAlumniModal] = React.useState(false);
  const [openDevelopersModal, setOpenDevelopersModal] = React.useState(false);
  const [openPrincipalMotiveModal, setOpenPrincipalMotiveModal] =
    React.useState(false);
  const [openAdsModal, setOpenAdsModal] = React.useState(false);

  const [nameFilter, setNameFilter] = React.useState("");
  const [NRIFilter, setNRIFilter] = React.useState("");
  const [addressFilter, setAddressFilter] = React.useState("");
  const [professionFilter, setProfessionFilter] = React.useState("");
  const [batchYearFilter, setBatchYearFilter] = React.useState("");

  const [teacherNameFilter, setTeacherNameFilter] = React.useState("");

  // Attendance data start
  const [students, setStudents] = React.useState([
    { id: 1, name: "John Doe", present: false },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Samuel Green", present: false },
    { id: 4, name: "Emily Brown", present: false },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAttendanceChange = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Attendance data end

  const handleRowClick = (student) => {
    setSelectedStudent(student);
    setOpenStudentDetailsModal(true);
  };

  const clearStudentFilters = () => {
    setNameFilter("");
    setAddressFilter("");
    setProfessionFilter("");
    setBatchYearFilter("");
  };

  const getFilteredStudents = () => {
    return studentsList.filter((student) => {
      return (
        // ((student.surname
        //   .toLowerCase()
        //   .includes(nameFilter.toLowerCase()) ||
        //   student.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        //   student.address
        //     .toLowerCase()
        //     .includes(nameFilter.toLowerCase()) ||
        //   student.profession
        //     .toLowerCase()
        //     .includes(nameFilter.toLowerCase())) &&
        //   batchYearFilter === "") ||
        // student.batchYear === batchYearFilter
        ((student.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student.village.toLowerCase().includes(nameFilter.toLowerCase()) ||
          student.profession
            .toLowerCase()
            .includes(nameFilter.toLowerCase())) &&
          batchYearFilter === "") ||
        student.batchYear === batchYearFilter
      );
    });
  };
  const getFilteredNRIs = () => {
    return nriStories.filter((nriMember) => {
      return nriMember.name.toLowerCase().includes(NRIFilter.toLowerCase());
    });
  };

  const getBatchYears = () => {
    const years = studentsList.map((student) => student.batchYear);
    return [...new Set(years)].sort();
  };

  const getFilteredTeachers = () => {
    return teachersList.filter((teacher) => {
      const matchesName = teacher.name
        .toLowerCase()
        .includes(teacherNameFilter.toLowerCase());
      return matchesName;
    });
  };

  const galleryCarouselImages = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  ];

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("photo-gallery");
    gallerySection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSuccessStories = () => {
    const successStoriesSection = document.getElementById("success-stories");
    successStoriesSection.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 5000);

    return () => clearInterval(timer);
  }, [maxSteps]);

  React.useEffect(() => {
    if (openGalleryModal) {
      const timer = setInterval(() => {
        setGalleryCarouselIndex((prevIndex) =>
          prevIndex === galleryCarouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [openGalleryModal, galleryCarouselImages.length]);

  const handleMobileMenuOpen = (event) => {
    // setMobileMenuAnchorEl(event.currentTarget);
    setMobileMenuAnchorEl(!null);
    // document.getElementById("body").style.paddingRight =
    //   "-10px !importent";
    // document.getElementById("body").style.padding = "0px";
    document.getElementById("body").style.width = "100vw";
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleAlumniMenu = (event) => {
    setAlumniAnchorEl(event.currentTarget);
  };

  const handleEventsMenu = (event) => {
    setEventsAnchorEl(event.currentTarget);
  };

  const handleSchoolMenu = (event) => {
    setSchoolAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAlumniAnchorEl(null);
    setEventsAnchorEl(null);
    setSchoolAnchorEl(null);
  };
  const AttendanceModalTrue = () => {
    setOpenAttendanceModal(true);
  };
  const AttendanceModalFalse = () => {
    setOpenAttendanceModal(false);
  };

  // Step 2: Attendance Modal

  const handleOpenGalleryModal = (item) => {
    setSelectedGalleryItem(item);
    setOpenGalleryModal(true);
  };

  const handleCloseGalleryModal = () => {
    setOpenGalleryModal(false);
    setSelectedGalleryItem(null);
  };

  const handleOpenDonateModal = () => {
    setOpenDonateModal(true);
  };
  const handleSavineerModal = () => {
    window.location.href = "https://zphs-school.vercel.app/savineer-book2";
    // setOpenSavineerModal(true);
  };

  const handleCloseDonateModal = () => {
    setOpenDonateModal(false);
  };

  const OpenSuccessStoriesModalFunction = () => {
    setOpenSuccessStoriesModal(true); // Open the modal
  };
  const handleOpenStudentsModal = () => {
    setOpenStudentsModal(true);
  };

  const handleCloseStudentsModal = () => {
    setOpenStudentsModal(false);
  };

  const handleOpenTeachersModal = () => {
    setOpenTeachersModal(true);
  };

  const handleCloseTeachersModal = () => {
    setOpenTeachersModal(false);
  };

  const handleOpenAlumniModal = () => {
    setOpenAlumniModal(true);
    handleClose();
  };

  const handleCloseAlumniModal = () => {
    setOpenAlumniModal(false);
  };

  const handleOpenDevelopersModal = () => {
    setOpenDevelopersModal(true);
    handleClose();
  };

  const handleCloseDevelopersModal = () => {
    setOpenDevelopersModal(false);
  };

  const handleOpenPrincipalMotiveModal = () => {
    setOpenPrincipalMotiveModal(true);
    handleClose();
  };

  const handleClosePrincipalMotiveModal = () => {
    setOpenPrincipalMotiveModal(false);
  };

  const handleOpenAdsModal = () => {
    setOpenAdsModal(true);
  };

  const handleCloseAdsModal = () => {
    setOpenAdsModal(false);
  };

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar position="sticky">
          <Toolbar>
            {/* Add logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
              }}
            >
              {/* <svg width="40" height="40" viewBox="0 0 40 40"> */}
              {/* <img width="50" height="50" src="./logo.PNG" alt="logo" />{" "}
               */}
              <img
                src="./logo.PNG"
                alt="logo"
                style={{
                  width: "40px", // Adjusted width
                  height: "40px", // Maintain aspect ratio
                  objectFit: "cover", // Cover the area
                  border: "1px dashed gold",
                  borderRadius: "50%",
                  position: "relative", // Positioning
                  // top: "10px", // Adjust vertical position
                }}
              />
              {/* </svg> */}
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ZPHS Kunur
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
              >
                <span className="material-icons">menu</span>
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchorEl}
                open={Boolean(mobileMenuAnchorEl)}
                onClose={handleMobileMenuClose}
                sx={{ mt: "45px" }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleSavineerModal}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    people
                  </span>
                  Savineer
                </MenuItem>
                <MenuItem onClick={handleSchoolMenu}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    school
                  </span>
                  School ▾
                </MenuItem>
                <MenuItem onClick={handleAlumniMenu}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    people
                  </span>
                  Alumni ▾
                </MenuItem>
                <MenuItem onClick={handleOpenTeachersModal}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    person
                  </span>
                  Teachers
                </MenuItem>
                {/* <MenuItem onClick={handleOpenStudentsModal}>*/}
                <MenuItem
                  onClick={() => {
                    window.location.href = "/enrollment";
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    school
                  </span>
                  Students
                </MenuItem>
                <MenuItem onClick={OpenSuccessStoriesModalFunction}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    star
                  </span>
                  NRI's
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToSuccessStories();
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    star
                  </span>
                  Stories
                </MenuItem>
                <MenuItem onClick={scrollToGallery}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    photo
                  </span>
                  Gallery
                </MenuItem>
                <MenuItem onClick={handleOpenDonateModal}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    attach_money
                  </span>
                  Donate
                </MenuItem>
                <MenuItem onClick={handleOpenAdsModal}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    ad_units
                  </span>
                  Ads
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToContact();
                    handleMobileMenuClose();
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    contact_mail
                  </span>
                  Contact
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button color="inherit" onClick={handleSavineerModal}>
                Savineer
              </Button>
              <Button color="inherit" onClick={handleSchoolMenu}>
                School ▾
              </Button>
              <Button color="inherit" onClick={handleAlumniMenu}>
                Alumni ▾
              </Button>
              <Button color="inherit" onClick={handleOpenTeachersModal}>
                Teachers
              </Button>
              {/*<Button color="inherit" onClick={handleOpenStudentsModal}>*/}
              <Button
                color="inherit"
                onClick={() => {
                  window.location.href = "/enrollment";
                }}
              >
                Students
              </Button>
              <Button color="inherit" onClick={OpenSuccessStoriesModalFunction}>
                NRI's
              </Button>
              <Button color="inherit" onClick={scrollToSuccessStories}>
                Stories
              </Button>
              <Button color="inherit" onClick={scrollToGallery}>
                Gallery
              </Button>
              <Button color="inherit" onClick={handleOpenDonateModal}>
                Donate
              </Button>
              <Button color="inherit" onClick={handleOpenAdsModal}>
                Ads
              </Button>
              <Button color="inherit" onClick={scrollToContact}>
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={schoolAnchorEl}
          open={Boolean(schoolAnchorEl)}
          onClose={handleClose}
          sx={{ mt: "15px" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {[
            { title: "About School", onClick: handleClose },
            {
              title: "Principal's Motive",
              onClick: handleOpenPrincipalMotiveModal,
            },
            { title: "Notice board", onClick: handleClose },
            // { title: "Admissions", onClick: handleClose },
            // { title: "Academics", onClick: handleClose },
            // {
            //   title: "Attendance",
            //   onClick: AttendanceModalTrue,
            // },
            { title: "Administration", onClick: handleClose },
            { title: "Achievements", onClick: handleClose },
            { title: "Events & Exhibition", onClick: handleClose },
            { title: "Rules & Regulations", onClick: handleClose },
          ].map((item, menuItemIdex) => (
            <MenuItem
              key={menuItemIdex}
              onClick={item.onClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "primary.light",
                  "& .menu-dot": {
                    backgroundColor: "primary.main",
                  },
                },
              }}
            >
              <Box
                className="menu-dot"
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: "grey.500",
                  borderRadius: "50%",
                  transition: "background-color 0.2s",
                }}
              />
              <Typography variant="body2">{item.title}</Typography>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={alumniAnchorEl}
          open={Boolean(alumniAnchorEl)}
          onClose={handleClose}
          sx={{ mt: "15px" }}
        >
          {[
            { title: "Alumni Members", onClick: handleOpenAlumniModal },
            {
              title: "Developers Team",
              onClick: handleOpenDevelopersModal,
            },
            { title: "Alumni Meetings", onClick: handleClose },
            { title: "Alumni Events", onClick: handleClose },
            { title: "Downloads", onClick: handleClose },
          ].map((item, itemIdex) => (
            <MenuItem
              key={itemIdex}
              onClick={item.onClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "primary.light",
                  "& .menu-dot": {
                    backgroundColor: "primary.main",
                  },
                },
              }}
            >
              <Box
                className="menu-dot"
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: "grey.500",
                  borderRadius: "50%",
                  transition: "background-color 0.2s",
                }}
              />
              <Typography variant="body2">{item.title}</Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* Principal's Motive Modal */}
        <Dialog
          open={openPrincipalMotiveModal}
          onClose={handleClosePrincipalMotiveModal}
          maxWidth="sm"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Principal's Motive
              </Typography>
              <IconButton onClick={handleClosePrincipalMotiveModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "primary.light",
                borderRadius: 2,
                p: 3,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  left: -20,
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-icons" style={{ color: "white" }}>
                  school
                </span>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "primary.dark",
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                The primary motive of a school principal is to foster an
                environment that promotes academic excellence, holistic student
                development, and inclusivity. They aim to ensure high-quality
                education by implementing effective teaching strategies and
                supporting professional growth for teachers.
              </Typography>
            </Box>
          </Box>
        </Dialog>

        {/* Alumni Members Modal */}
        <Dialog
          open={openAlumniModal}
          onClose={handleCloseAlumniModal}
          maxWidth="lg"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Alumni Members
              </Typography>
              <IconButton onClick={handleCloseAlumniModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            <Grid container spacing={3}>
              {studentsList.map((alumni, alumniIndex) => (
                <Grid item xs={12} sm={6} md={4} key={alumniIndex}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={alumni.photo}
                      alt={alumni.fullName}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0", // Rounded top corners
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }} // Centered text
                      >
                        {alumni.fullName}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          bgcolor: "primary.light",
                          color: "primary.dark",
                          px: 2,
                          py: 0.5,
                          borderRadius: "15px",
                          // display: "inline-block",
                          mb: 2,
                          textAlign: "center", // Centered text
                        }}
                      >
                        <Typography variant="body2">
                          Batch {alumni.batchYear}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          textAlign: "center", // Centered text
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center", // Centered content
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{
                              fontSize: "18px",
                              color: "primary.main",
                            }}
                          >
                            work
                          </span>
                          <Typography variant="body2">
                            {alumni.profession}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center", // Centered content
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{
                              fontSize: "18px",
                              color: "primary.main",
                            }}
                          >
                            location_on
                          </span>
                          <Typography variant="body2">
                            {alumni.address}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>

                    <Box
                      sx={{
                        p: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">email</span>
                          }
                          href={`mailto:${alumni.email}`}
                          sx={{ flex: 1 }}
                        >
                          Email
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">phone</span>
                          }
                          href={`tel:${alumni.phone}`}
                          sx={{ flex: 1 }}
                        >
                          Call
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                For updates to alumni information, please contact the school
                administration.
              </Typography>
            </Box>
          </Box>
        </Dialog>

        {/* Developers Modal */}
        <Dialog
          open={openDevelopersModal}
          onClose={handleCloseDevelopersModal}
          maxWidth="lg"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Development Team
              </Typography>
              <IconButton onClick={handleCloseDevelopersModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            <Grid container spacing={3}>
              {developers.map((developer, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={developer.image}
                      alt={developer.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {developer.name}
                      </Typography>
                      <Box
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.dark",
                          px: 2,
                          py: 0.5,
                          borderRadius: "15px",
                          display: "inline-block",
                          mb: 2,
                        }}
                      >
                        <Typography variant="body2">
                          {developer.role}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {developer.expertise}
                      </Typography>

                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Technologies:
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          {developer.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: "primary.light",
                                color: "primary.dark",
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>

                    <Box
                      sx={{
                        p: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">code</span>
                          }
                          href={developer.githubProfile}
                          target="_blank"
                          sx={{ flex: 1 }}
                        >
                          GitHub
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">work</span>
                          }
                          href={developer.linkedinProfile}
                          target="_blank"
                          sx={{ flex: 1 }}
                        >
                          LinkedIn
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                This project was developed with ❤️ by our dedicated team.
              </Typography>
            </Box>
          </Box>
        </Dialog>

        {/* Hero Section with Carousel */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "40vh", sm: "50vh", md: "75vh" },
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              height: "100%",
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${carouselImages[activeStep].imgPath})`,
              transition: "background-image 0.5s ease-in-out",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.5)",
              }}
            />
            <Container
              maxWidth="md"
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
                }}
              >
                {carouselImages[activeStep].label}
              </Typography>
              <Typography
                variant="h5"
                paragraph
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
                }}
              >
                {carouselImages[activeStep].description}
              </Typography>
            </Container>
          </Paper>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              position: "absolute",
              bottom: 0, // You can adjust the bottom distance as needed
              left: "50%", // Centers horizontally
              transform: "translateX(-50%)", // Ensures the element is centered by shifting it back by 50%
              width: "auto", // Use auto or a fixed width if needed
              background: "transparent",
            }}
          />
        </Box>

        {/* Achievements Section */}
        <Container maxWidth="lg" sx={{ my: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                backgroundColor: "primary.main",
              },
            }}
          >
            Latest Achievements
          </Typography>

          <Box sx={{ position: "relative" }}>
            <IconButton
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                boxShadow: 2,
                "&:hover": { backgroundColor: "grey.100" },
                zIndex: 2,
              }}
              onClick={() => {
                const container = document.getElementById(
                  "achievements-scroll"
                );
                container.scrollBy({ left: -300, behavior: "smooth" });
              }}
            >
              <span className="material-icons">chevron_left</span>
            </IconButton>

            <Box
              id="achievements-scroll"
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 3,
                pb: 2,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    height: "300px",
                    flex: "0 0 auto",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: achievement.isViewMore
                        ? "translateY(-5px)"
                        : "translateY(-5px)",
                      boxShadow: 3,
                    },
                    ...(achievement.isViewMore && {
                      backgroundColor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        transform: "translateY(-5px)",
                        boxShadow: 3,
                      },
                    }),
                  }}
                >
                  {achievement.isViewMore ? (
                    <CardContent
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        padding: "24px",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.2)",
                          borderRadius: "50%",
                          width: 80,
                          height: 80,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <span
                          className="material-icons"
                          style={{ fontSize: "40px" }}
                        >
                          {achievement.icon}
                        </span>
                      </Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ mt: 2, fontWeight: "bold" }}
                      >
                        {achievement.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
                        Click to explore more achievements
                      </Typography>
                    </CardContent>
                  ) : (
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        padding: "24px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "primary.main",
                            borderRadius: "50%",
                            p: 1,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{ color: "white" }}
                          >
                            {achievement.icon}
                          </span>
                        </Box>
                        <Typography variant="h6" component="div">
                          {achievement.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {achievement.date}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {achievement.description}
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              ))}
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                boxShadow: 2,
                "&:hover": { backgroundColor: "grey.100" },
                zIndex: 2,
              }}
              onClick={() => {
                const container = document.getElementById(
                  "achievements-scroll"
                );
                container.scrollBy({ left: 300, behavior: "smooth" });
              }}
            >
              <span className="material-icons">chevron_right</span>
            </IconButton>
          </Box>
        </Container>

        {/* News & Updates */}
        <Box sx={{ bgcolor: "grey.100", py: 6 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              News & Updates
            </Typography>
            <div>
              <div className="notification success">
                <span className="icon">✔</span> Success.. Everything is good!
              </div>

              <div className="notification error">
                <span className="icon">✘</span> Error.. Something has gone
                wrong!
              </div>

              <div className="notification warning">
                <span className="icon">⚠</span> Warning.. A little warning...
              </div>

              <div className="notification general">
                <span className="icon">ℹ</span> General.. Just a little
                information...
              </div>
            </div>

            {/*<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {newsUpdates.map((item, index) => (
                      <Grid item xs={12} key={index}>
                        <Card
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: 6,
                              "& .icon-container": {
                                backgroundColor: "primary.dark",
                              },
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              width: { xs: "100%", sm: 300 },
                              height: { xs: 200, sm: "auto" },
                            }}
                            image={item.image}
                            alt={item.title}
                          />
                          <CardContent
                            sx={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                              }}
                            >
                              <Box>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {item.title}
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  color="primary"
                                  gutterBottom
                                  sx={{
                                    mb: 2,
                                    display: "inline-block",
                                    backgroundColor: "primary.light",
                                    color: "primary.dark",
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: "15px",
                                  }}
                                >
                                  {item.date}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                >
                                  {item.description}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>*/}
          </Container>
        </Box>

        {/* Gallery Section */}
        <Box id="photo-gallery" sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Media Gallery
            </Typography>

            {/* Tabs for Photos and Videos */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginBottom: 2,
              }}
            >
              <Tab
                label="Photos"
                sx={{
                  fontWeight: tabValue === 0 ? "bold" : "normal",
                  color: tabValue === 0 ? "primary.main" : "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              />
              <Tab
                label="Videos"
                sx={{
                  fontWeight: tabValue === 1 ? "bold" : "normal",
                  color: tabValue === 1 ? "primary.main" : "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              />
            </Tabs>

            {/* Conditional rendering based on selected tab */}
            {tabValue === 0 ? (
              <Grid container spacing={3}>
                {galleryImages.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        overflow: "hidden",
                        borderRadius: "15px",
                        position: "relative",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                          "& .gallery-image": {
                            transform: "scale(1.1)",
                          },
                          "& .gallery-overlay": {
                            opacity: 1,
                          },
                          "& .gallery-content": {
                            transform: "translateY(0)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          paddingTop: "75%", // 4:3 aspect ratio
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.title}
                          className="gallery-image"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                        />
                        <Box
                          className="gallery-overlay"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                        <Box
                          className="gallery-content"
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 3,
                            color: "white",
                            transform: "translateY(20px)",
                            transition: "transform 0.3s ease",
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 1,
                              fontWeight: "bold",
                              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <span
                              className="material-icons"
                              style={{ fontSize: "18px" }}
                            >
                              calendar_today
                            </span>
                            <Typography variant="body2">{item.date}</Typography>
                          </Box>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleOpenGalleryModal(item)}
                            sx={{
                              mt: 2,
                              bgcolor: "primary.main",
                              "&:hover": {
                                bgcolor: "primary.dark",
                              },
                            }}
                            startIcon={
                              <span className="material-icons">visibility</span>
                            }
                          >
                            View Details
                          </Button>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={3}>
                {youtubeVideos.map((video, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardMedia
                        component="iframe"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        sx={{ height: "200px" }}
                      />
                      <CardContent>
                        <Typography variant="h6">{video.title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                endIcon={<span className="material-icons">arrow_forward</span>}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "25px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                    bgcolor: "primary.dark",
                  },
                }}
              >
                View Gallery..
              </Button>
            </Box>
          </Container>
        </Box>
        {/* Future Focus Section */}
        <Box sx={{ py: 6, bgcolor: "grey.100" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Future Focus
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {futureFocus.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "visible",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                        "& .hover-effect": {
                          transform: "rotate(360deg)",
                        },
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          position: "relative",
                        }}
                      >
                        <Box
                          className="hover-effect"
                          sx={{
                            position: "absolute",
                            top: -30,
                            backgroundColor: "primary.main",
                            borderRadius: "50%",
                            width: 60,
                            height: 60,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.8s ease",
                            boxShadow: 3,
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{ color: "white", fontSize: "30px" }}
                          >
                            {item.icon}
                          </span>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="primary.main"
                            gutterBottom
                            sx={{
                              fontWeight: "medium",
                              display: "inline-block",
                              backgroundColor: "primary.light",
                              color: "primary.dark",
                              px: 2,
                              py: 0.5,
                              borderRadius: "15px",
                              mb: 2,
                            }}
                          >
                            Target: {item.target}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* NRI Stories Section */}
        <Box id="success-stories" sx={{ py: 6, bgcolor: "grey.50" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Our Success Stories
            </Typography>

            <Grid container spacing={4}>
              {nriStories.map((story, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      backgroundColor: "primary.light", // Added background color
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                        backgroundColor: "primary.main", // Change background on hover
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {story.name}
                      </Typography>
                      {/* <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                          color: "primary.main",
                        }}
                      >
                        <span
                          className="material-icons"
                          style={{ fontSize: "18px" }}
                        >
                          location_on
                        </span>
                        <Typography variant="subtitle2">
                          {story.location}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 2,
                          color: "text.secondary",
                        }}
                      >
                        <span
                          className="material-icons"
                          style={{ fontSize: "18px" }}
                        >
                          work
                        </span>
                        <Typography variant="subtitle2">
                          {story.profession}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.dark",
                          px: 2,
                          py: 0.5,
                          borderRadius: "15px",
                          display: "inline-block",
                          mb: 2,
                        }}
                      >
                        <Typography variant="caption">
                          Batch of {story.batch}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {story.story}
                      </Typography> */}
                    </CardContent>
                    <Box
                      sx={{
                        p: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={
                          <span className="material-icons">contact_mail</span>
                        }
                      >
                        Connect
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                endIcon={<span className="material-icons">groups</span>}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "25px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                    bgcolor: "primary.dark",
                  },
                }}
              >
                View More NRI Stories
              </Button>
            </Box>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box sx={{ py: 6, bgcolor: "grey.100" }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "primary.main",
                },
              }}
            >
              About Us
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{
                minHeight: {
                  xs: "400px", // Minimum height for extra small screens
                  sm: "500px", // Minimum height for small screens
                  md: "600px", // Minimum height for medium and larger screens
                },
                height: "100%", // Ensure it takes full height of its container
              }}
            >
              {/* School History */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    // height: "100%",
                    // height: { xs: 10, sm: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 2, sm: 2, md: 3 },
                    m: { xs: 2, sm: 2, md: 3 },

                    fontSize: {
                      xs: "0.875rem", // Extra small screens
                      sm: "1rem", // Small screens
                      md: "1.125rem", // Medium and larger screens
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary">
                    Our History
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Established in 1953, ZPHS Kunur has been a beacon of
                    learning in our community for over 71 years. What started as
                    a small school with just 50 students has grown into a
                    prestigious institution serving over 600 students today.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our journey has been marked by continuous growth and
                    adaptation to modern educational needs while maintaining our
                    core values of academic excellence and character building.
                  </Typography>
                  <Typography variant="body1">
                    Through decades of dedicated service, we have shaped
                    thousands of young minds and produced numerous distinguished
                    alumni who are making significant contributions in various
                    fields globally.
                  </Typography>
                </Card>
              </Grid>

              {/* Google Map */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15308.310789227932!2d79.4824236!3d17.8419678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3356bb3a5df671%3A0x791f9bf3757175a2!2sZPHS%20Kunur!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Our Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ZPHS Kunur, Near Ranganayaka swamy temple, Kunur Village,
                      Zaffargadh mandal, Jangaon District, Telengana State india
                      Country
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Donate Modal */}
        <Dialog
          open={openDonateModal}
          onClose={handleCloseDonateModal}
          maxWidth="sm"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Make a Donation
              </Typography>
              <IconButton onClick={handleCloseDonateModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
              Scan the QR code below to make your donation
            </Typography>

            {/* QR Code SVG */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                p: 2,
                border: "2px dashed",
                borderColor: "primary.main",
                borderRadius: 2,
              }}
            >
              <img
                src="/QRCode.jpg"
                alt="Donation QR Code removed"
                style={{
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  width: 200,
                  height: 200,
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  mt: 4,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 1,
                }}
              >
                Donations
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  mt: 4,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  color: "green",
                  pb: 1,
                }}
              >
                Total:{" "}
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(
                  previousDonations.reduce((acc, ele) => acc + ele.amount, 0)
                )}
              </Typography>
            </Box>
            <Box sx={{ maxHeight: "200px", overflow: "auto" }}>
              {previousDonations.reverse().map((donation, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 1,
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {donation.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {/* ₹{donation.amount}*/}
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(donation.amount)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "text.secondary",
                    }}
                  >
                    <Typography variant="body2">{donation.purpose}</Typography>
                    {/*<Typography variant="body2">
                            {new Date(donation.date).toLocaleDateString()}
                          </Typography>*/}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                For any queries regarding donations, please contact us at:
                <br />
                donations@zphskunur.in | +91 9876543210
              </Typography>
            </Box>
          </Box>
        </Dialog>

        {/* Gallery Modal */}
        <Dialog
          open={openGalleryModal}
          onClose={handleCloseGalleryModal}
          maxWidth="md"
          fullWidth
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={handleCloseGalleryModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <span className="material-icons">close</span>
            </IconButton>

            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <CardMedia
                  component="img"
                  image={galleryCarouselImages[galleryCarouselIndex]}
                  alt="Gallery Image"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              </Box>

              <IconButton
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
                onClick={() =>
                  setGalleryCarouselIndex((prev) =>
                    prev === 0 ? galleryCarouselImages.length - 1 : prev - 1
                  )
                }
              >
                <span className="material-icons">chevron_left</span>
              </IconButton>

              <IconButton
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
                onClick={() =>
                  setGalleryCarouselIndex((prev) =>
                    prev === galleryCarouselImages.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <span className="material-icons">chevron_right</span>
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {galleryCarouselImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setGalleryCarouselIndex(index)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor:
                        index === galleryCarouselIndex
                          ? "white"
                          : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "white",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Dialog>

        {/* Students Modal */}
        <Dialog
          open={openStudentsModal}
          onClose={handleCloseStudentsModal}
          maxWidth="lg"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }} // Reduced font size
              >
                All Students Directory
              </Typography>
              <IconButton onClick={handleCloseStudentsModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            {/* New Student Button */}
            <Box sx={{ mb: 3, textAlign: "right" }}>
              <Button
                variant="contained"
                color="primary"
                href="http://localhost:1954/form"
                // href="https://sakinalaraju100.github.io/zphs-school/public/addStudentForm.html"
              >
                New Student
              </Button>
            </Box>

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
                      search
                    </span>
                    <input
                      type="text"
                      value={nameFilter}
                      onChange={(e) => setNameFilter(e.target.value)}
                      placeholder="Filter by surname, name, profession, or address..."
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
                        onClick={() => setNameFilter("")}
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
                      onChange={(e) => setBatchYearFilter(e.target.value)}
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "8px",
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    >
                      <option value="">All Batch Years</option>
                      {getBatchYears().map((year, yearIndex) => (
                        <option key={yearIndex} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ overflowX: "auto" }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      ID
                    </TableCell>

                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        position: "sticky",
                        left: 0,
                        backgroundColor: "primary.main",
                        zIndex: 1,
                      }}
                    >
                      Full name
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Contact
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Village
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Profession
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Batch Year
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getFilteredStudents().map((student, ind) => (
                    <TableRow
                      key={student.id} // Changed from `ind` to `student.id` for uniqueness
                      onClick={() => handleRowClick(student)}
                      sx={{
                        "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                        "&:hover": { bgcolor: "grey.100" },
                      }}
                    >
                      <TableCell>{ind + 1}</TableCell>

                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          position: "sticky",
                          left: 0,
                          backgroundColor: "lightblue",
                          zIndex: 1,
                        }}
                      >
                        {student.name}
                      </TableCell>

                      <TableCell>{student.contact}</TableCell>
                      <TableCell>{student.village}</TableCell>
                      <TableCell>{student.profession}</TableCell>
                      <TableCell>{`${student.batchYear}`}</TableCell>
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
        </Dialog>

        {/* Teachers Modal */}
        <Dialog
          open={openTeachersModal}
          onClose={handleCloseTeachersModal}
          maxWidth="lg"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Our Teachers
              </Typography>
              <IconButton onClick={handleCloseTeachersModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            {/* Filters Section */}
            <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                <Typography variant="subtitle2" gutterBottom>
                  Name Filter
                </Typography>
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
                    value={teacherNameFilter}
                    onChange={(e) => setTeacherNameFilter(e.target.value)}
                    placeholder="Filter by name..."
                    style={{
                      border: "none",
                      outline: "none",
                      padding: "8px",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {getFilteredTeachers().map((teacher, teacherIndex) => (
                <Grid item xs={12} sm={6} md={4} key={teacherIndex}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    {/* <CardMedia
                      component="img"
                      height="240"
                      image={teacher.photo}
                      alt={teacher.name}
                      sx={{ objectFit: "cover" }}
                    /> */}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {teacher.name
                          ? teacher.name.charAt(0).toUpperCase() +
                            teacher.name.slice(1).toLowerCase() +
                            " garu"
                          : ""}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{
                              fontSize: "18px",
                              color: "primary.main",
                            }}
                          >
                            school
                          </span>
                          <Typography variant="body2">
                            {teacher.subject}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>

                    <Box
                      sx={{
                        p: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">email</span>
                          }
                          href={`mailto:${teacher.email}`}
                          sx={{ flex: 1 }}
                        >
                          Email
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">phone</span>
                          }
                          href={`tel:${teacher.phone}`}
                          sx={{ flex: 1 }}
                        >
                          Call
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                For any inquiries about our teaching staff, please contact the
                school administration.
              </Typography>
            </Box>
          </Box>
        </Dialog>

        {/* Footer */}
        <Box
          component="footer"
          id="contact-section"
          sx={{ bgcolor: "primary.main", color: "white" }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#FFD700",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">contact_support</span>
                  Contact Us
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      location_on
                    </span>
                    <Typography variant="body2">
                      ZPHS Kunur
                      <br />
                      Kunur Village
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      phone
                    </span>
                    <Typography
                      variant="body2"
                      component="a"
                      href="tel:+911234567890"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      +91 8985804256
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      email
                    </span>
                    <Typography
                      variant="body2"
                      component="a"
                      href="mailto:zphskunur1973@gmail.com"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      zphskunur1973@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      email
                    </span>
                    <Typography
                      variant="body2"
                      component="a"
                      href="mailto:zphskunur.goldenjubilee@gmail.com"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      zphskunur.goldenjubilee@gmail.com
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      schedule
                    </span>
                    <Typography variant="body2">
                      Monday - Saturday
                      <br />
                      9:00 AM - 5:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#98FB98",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">link</span>
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {[
                    "Admissions",
                    "Academic Calendar",
                    "Facilities",
                    "Staff Directory",
                  ].map((link, linkindex) => (
                    <Typography
                      key={linkindex}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          paddingLeft: "10px",
                          color: "#98FB98",
                        },
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{ fontSize: "8px" }}
                      >
                        circle
                      </span>
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#FF69B4",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">share</span>
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    {
                      icon: "facebook",
                      name: "Facebook",
                      link: "https://facebook.com",
                    },
                    {
                      icon: "spatial_tracking",
                      name: "X (Twitter)",
                      link: "https://twitter.com",
                    },
                    {
                      icon: "photo_camera",
                      name: "Instagram",
                      link: "https://instagram.com",
                    },
                    {
                      icon: "play_circle",
                      name: "YouTube",
                      link: "https://youtube.com",
                    },
                    {
                      icon: "work",
                      name: "LinkedIn",
                      link: "https://linkedin.com",
                    },
                  ].map((social, socialindex) => (
                    <Button
                      key={socialindex}
                      href={social.link}
                      target="_blank"
                      startIcon={
                        <span className="material-icons">{social.icon}</span>
                      }
                      sx={{
                        color: "white",
                        border: "2px solid white",
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "primary.main",
                        },
                      }}
                    >
                      {social.name}
                    </Button>
                  ))}
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Stay connected with us on social media for the latest updates
                  and news.
                </Typography>
              </Grid>

              {/* feedback */}

              <Grid
                item
                xs={12}
                sx={{
                  bgcolor: "white",
                  color: "gray",
                  border: "1px solid #ccc", // Changed to solid border for better visibility
                  borderRadius: "8px",
                  boxShadow: 2, // Added shadow for depth
                  p: 2, // Added padding for spacing
                  mb: 3, // Added margin bottom for spacing between elements
                }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)", // Changed to a more subtle border
                    mb: 2, // Added margin bottom for spacing
                    textAlign: "left",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Feedback
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    We value your feedback for improving our website.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "white",
                  }}
                >
                  <TextField
                    label="Your Feedback"
                    variant="outlined"
                    fullWidth
                    multiline // Added multiline for better input
                    rows={4} // Set default rows for multiline
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="primary"
                            // onClick={handleSendFeedback}
                            aria-label="send feedback"
                          >
                            <span className="material-icons">send</span>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    pt: 2,
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">
                    © 2023 ZPHS Kunur. All rights reserved.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Ads Modal */}
        <Dialog
          open={openAdsModal}
          onClose={handleCloseAdsModal}
          maxWidth="md"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            {/* Sample advertisements 
                  <Grid container spacing={2}>
                    {addData.map((el, ind) => {
                      return (
                        <Grid key={ind} item xs={12} sm={6} md={4}>
                          <Card
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={el.adImage}
                              alt="Ad 1"
                              sx={{ objectFit: "cover" }}
                            />
                            <CardContent>
                              <Typography variant="h6" gutterBottom>
                                {el.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {el.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>*/}
            {/* Ads Carousel */}
            <AdCarousel />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                bgcolor: "primary.light", // Background color for the box
                p: 2, // Padding for the box
                borderRadius: 2, // Rounded corners
                boxShadow: 2, // Subtle shadow for depth
              }}
              onClick={handleCloseAdsModal}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "primary.main", // Text color
                  fontSize: { xs: "14px", md: "25px" },
                }}
              >
                Souviner Advertisements
              </Typography>
              <IconButton>
                {/*<span className="material-icons" style={{ color: "red" }}>
                        close
                      </span>{" "}
                       Close icon color */}
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main", // Text color
                    ml: 1, // Margin left for spacing
                    fontSize: { xs: "14px", md: "25px" },
                  }}
                >
                  Click To Close
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Dialog>
      </Box>
      {/* Modal for Student Details*/}
      {selectedStudent && (
        <Dialog
          open={openStudentDetailsModal}
          onClose={() => setOpenStudentDetailsModal(false)}
          // maxWidth="100px"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Student Details
              </Typography>
              <IconButton onClick={() => setOpenStudentDetailsModal(false)}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>
            {selectedStudent && (
              <Box>
                {/* Display student's photo in a circle */}
                <Box
                  component="img"
                  src={selectedStudent.photo}
                  alt={selectedStudent.name}
                  sx={{
                    width: { xs: 60, sm: 80 }, // Responsive width
                    height: { xs: 60, sm: 80 }, // Responsive height
                    borderRadius: "50%",
                    objectFit: "cover",
                    mb: 2,
                  }}
                />
                <Typography variant="body1">
                  <strong>Surname:</strong> {selectedStudent.surname}
                </Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {selectedStudent.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Father:</strong> {selectedStudent.father}
                </Typography>
                <Typography variant="body1">
                  <strong>Mother:</strong> {selectedStudent.mother}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {selectedStudent.email}
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> {selectedStudent.phone}
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> {selectedStudent.address}
                </Typography>
                <Typography variant="body1">
                  <strong>Profession:</strong> {selectedStudent.profession}
                </Typography>
                <Typography variant="body1">
                  <strong>Batch Year:</strong> {selectedStudent.batchYear}
                </Typography>
                {/* Buttons for email and call, resume */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },

                    gap: 1,
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<span className="material-icons">email</span>}
                    href={`mailto:${selectedStudent.email}`}
                    sx={{ flex: 1 }} // Make buttons responsive
                  >
                    Email
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<span className="material-icons">phone</span>}
                    href={`tel:${selectedStudent.phone}`}
                    sx={{ flex: 1 }} // Make buttons responsive
                  >
                    Call
                  </Button>
                  <Button
                    variant="contained"
                    href={selectedStudent.resume}
                    target="_blank"
                    startIcon={
                      <span className="material-icons">description</span>
                    }
                    sx={{}} // Full width for the resume button
                  >
                    View Resume
                  </Button>{" "}
                </Box>
              </Box>
            )}
          </Box>
        </Dialog>
      )}

      {/* Attendance Modal */}
      <Dialog
        open={openAttendanceModal}
        onClose={AttendanceModalFalse}
        maxWidth="md"
        fullWidth
      >
        <Box sx={{ position: "relative", p: 3 }}>
          <IconButton
            onClick={AttendanceModalFalse}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500",
            }}
          >
            <span className="material-icons">close</span>
          </IconButton>
          <Typography variant="h5" gutterBottom>
            Attendance Records
          </Typography>

          <Box mb={2}>
            <TextField
              label="Search Student"
              variant="outlined"
              fullWidth
              onChange={(e) => console.log("Search query: ", e.target.value)} // Implement search logic here
            />
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Present</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((student, ind) => (
                    <TableRow key={student.name + ind}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.present ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color={student.present ? "secondary" : "primary"}
                          onClick={() => handleAttendanceChange(student.id)}
                        >
                          Mark {student.present ? "Absent" : "Present"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Dialog>

      {/* NRI's Modal */}
      <Dialog
        open={openSuccessStoriesModal}
        onClose={() => setOpenSuccessStoriesModal(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Our Success Stories
            </Typography>
            <IconButton onClick={() => setOpenSuccessStoriesModal(false)}>
              <span className="material-icons">close</span>
            </IconButton>
          </Box>

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
                <Typography variant="subtitle2" gutterBottom>
                  Search Filter
                </Typography>
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
                    value={NRIFilter} // Use nameFilter for surnames, name, profession, address
                    onChange={(e) => setNRIFilter(e.target.value)}
                    placeholder="Filter by name, profession, or location..."
                    style={{
                      border: "none",
                      outline: "none",
                      padding: "8px",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                  />
                  {NRIFilter && ( // Show clear button only if there's text in the input
                    <IconButton
                      onClick={() => setNRIFilter("")} // Clear the filter
                      sx={{ ml: 1 }} // Add some margin to the left
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

          <Grid container spacing={4}>
            {getFilteredNRIs().map((story, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={story.name + index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    // backgroundColor: "primary.light", // Added background color
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 4px 20px gold", // Updated box shadow color
                      backgroundColor: "white", // Change background on hover
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "12px", md: "15px", lg: "18px" },
                        color: "gold", // Changed text color to white
                        "&:hover": {
                          color: "gold",
                        },
                      }}
                    >
                      {story.name}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      p: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                      bgcolor: "primary.main", // Added background color for the button box
                    }}
                  >
                    <Button
                      fullWidth
                      size="small"
                      variant="contained"
                      startIcon={
                        <span className="material-icons">contact_mail</span>
                      }
                      sx={{
                        color: "gold", // Changed button text color to white
                        borderColor: "white", // Changed button border color to white
                        "&:hover": {
                          bgcolor: "white", // Change background on hover
                          color: "gold", // Change text color on hover
                        },
                      }}
                    >
                      Connect
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Dialog>
      {/* Savineer book need to do */}
      {/*<Dialog
              open={openSavineerModal}
              onClose={() => setOpenSavineerModal(false)}
              maxWidth="md"
              fullWidth
              sx={{
                "& .MuiDialog-paper": {
                  margin: 2,
                  width: "100%",
                  maxWidth: "800px", // Limit maximum width
                  height: { xs: "90vh", sm: "80vh", md: "90vh" }, // Responsive height
                  maxHeight: "900px",
                },
              }}
            >
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Savineer Book
                </Typography>
                <IconButton onClick={() => setOpenSavineerModal(false)}>
                  <span className="material-icons">close</span>
                </IconButton>
              </DialogTitle>

              <DialogContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: { xs: 1, sm: 2, md: 3 },
                }}
              >
                <p>view pdf</p>
              </DialogContent>
            </Dialog>*/}
    </ThemeProvider>
  );
};

export default Dashboard;