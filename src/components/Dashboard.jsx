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
import Counting from "./Counting";
import axios from "axios";
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
let alumniMembers = [
  {
    name: "Nagamalla.Ashok",
    father: "S/o Shankaraiah",
    role: "President",
  },
  {
    name: "Akula.Kumaraswamy",
    role: "Vice-President-1",
    father: "S/o Ramaiah",
  },
  {
    name: "Katam.Laxma reddy",
    role: "Vice-President-2",
    father: "S/o Narsireddy",
  },
  {
    name: "Mula.Pramod Kumar Reddy",
    role: "General Secretary -1",
    father: "S/o Somireddy",
  },
  {
    name: "Pitta.Rajaiah",
    role: "General Secretary -2",
    father: "S/o Chandraiah",
  },
  {
    name: "Muthadi.Subhash",
    role: "Treasurer",
    father: "S/o Venkataiah",
  },
  {
    name: "Amaraju.Srinivas",
    role: "Joint Secretary",
    father: "S/o Venkataiah",
  },
  {
    name: "Bandi.Shobharani.Srinivas",
    role: "Executive Member",
    father: "W/o Bandi Suresh",
  },
  {
    name: "Dadaboina.Saritha",
    role: "Executive Member",
    father: "W/o Srikanth yadav",
  },
];
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
    id: "zUkM3yEBB6U",
    title: "Invitation",
  },
  {
    id: "fnzp3QrhGnk",
    title: "Speech",
  },
  {
    id: "zwO-uO_57Z0",
    title: "స్వర్ణోత్సవ సంబరాల సాంగ్",
  },
  {
    id: "3zAYVFjf2n0",
    title: "ZPHS కూనూరు - 50 ఏళ్ల స్వర్ణోత్సవం",
  },
  {
    id: "rImqpH-TVBM",
    title: "ZPHS- కూనూరు బతుకమ్మ సంబరాలు",
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
    imgPath: "./home.JPG",
    // imgPath:
    //   "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Empowering minds, Building futures",
  },
  {
    label: "Welcome to ZPHS Kunur",
    imgPath: "./home2.JPG",
    // imgPath:
    //   "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Excellence in Learning",
  },
  {
    label: "Welcome to ZPHS Kunur",
    imgPath: "./02.jpg",
    description: "Empowering minds, Building futures",
  },
];

const newsImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
];

const galleryImages = [
  {
    image: "./gallery01.jpg",
    title: "Sports Day",
    date: "September 20, 2023",
  },
  {
    image: "./gallery02.jpg",
    title: "Bhatukamma Celebrations",
    date: "October 15, 2024",
  },

  {
    image: "./gallery05.jpg",
    title: "Science Exhibition",
    date: "August 25, 2023",
  },
  {
    image: "./gallery04.jpg",
    title: "Science Exhibition",
    date: "August 25, 2023",
  },
  {
    image: "./gallery03.jpg",
    title: "Science Exhibition",
    date: "August 25, 2023",
  },
  {
    image: "./gallery06.jpg",
    title: "Science Exhibition",
    date: "August 25, 2023",
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
    role: "Developer",
    expertise: "Full Stack Developer",
    technologies: [],
    githubProfile:
      "https://www.instagram.com/rajuparusharamulu/profilecard/?igsh=MTYyNmt6ZDdoMWs3OA==",
    linkedinProfile: "https://www.linkedin.com/in/raju-sakinala-194803135",
    image: "./raju.jpeg",
  },
  {
    name: "Muralikrishna.Suthari",
    role: "Lead Architech",
    expertise: "Full Stack Developer",
    technologies: [],
    githubProfile: "https://www.facebook.com/muralikrishnass",
    linkedinProfile: "https://www.linkedin.com/in/muralikrishnas/",
    image: "./murali.jpeg",
  },
  {
    name: "Amaraju.Srinivas",
    role: "Plan & Design",
    expertise: "Product",
    technologies: [],
    githubProfile: "https://facebook.com/srinivas.amaroju",
    linkedinProfile: "",
    image: "./srinuvas.jpeg",
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
    title: "100% Pass percentage in SSC",
    date: "May 2024",
    description:
      "All our students successfully passed Class X examinations with distinction",
    icon: "school",
  },
  // {
  //   title: "State Level Science Fair Winners",
  //   date: "August 2023",
  //   description:
  //     "Our students won first place in the State Level Science Fair Competition",
  //   icon: "emoji_events",
  // },

  {
    title: "Securing seats in IIIT Basara",
    date: "2024",
    description:
      "Every year our students are securing seats across the india institutions",
    icon: "stars",
  },
  {
    title: "Participation in National Sports",
    date: "2023",
    description: "Our school team Participated in National Level Sports",
    icon: "sports_score",
  },
  // {
  //   title: "Math Olympiad Winners",
  //   date: "June 2023",
  //   description: "Students secured top positions in State Math Olympiad",
  //   icon: "calculate",
  // },
  // {
  //   title: "Cultural Excellence",
  //   date: "2024",
  //   description: "Our Cultural events are actively ",
  //   icon: "theater_comedy",
  // },
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
    title: "Global Connect",
    description:
      "Collaboration programs and exchange initiatives to provide global exposure to our students",
    icon: "public",
    target: "2024",
  },
  {
    title: "Digital library",
    description:
      "Establishing a state of the digital library for frequent technologies.",
    icon: "lightbulb",
    target: "2025",
  },

  {
    title: "Research Center",
    description:
      "Development of advanced research facilities to promote scientific thinking and innovation",
    icon: "science",
    target: "2028",
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
    image: "https://neodesigns.in/zphs/ads/adv_1.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_2.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_3.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_4.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_5.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_6.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_7.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_8.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_9.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_10.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_11.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_12.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_13.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_14.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_15.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_16.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_17.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_18.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_19.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_20.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_21.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_21.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_22.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_23.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_24.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_25.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_26.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_27.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_28.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_29.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_30.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_31.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_32.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_33.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_34.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_35.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_36.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_37.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_38.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_39.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_40.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_41.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_42.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_43.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_44.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_45.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_46.jpg",
  },
  {
    image: "https://neodesigns.in/zphs/ads/adv_47.jpg",
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
          {/* <Typography variant="h6">
            {adCarouselImages[adCarouselIndex].title}
          </Typography> */}
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
          onClick={() => {
            console.log("adCarouselIndex", adCarouselIndex);

            setAdCarouselIndex((prev) =>
              // prev == 0 ? adCarouselImages.length - 1 : prev - 1
              prev == 0 ? 10 : prev - 1
            );
          }}
          sx={{
            position: "absolute",
            left: 6,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <span className="material-icons">chevron_left</span>
        </IconButton>
        <IconButton
          onClick={() => {
            console.log("adCarouselIndex", adCarouselIndex);
            setAdCarouselIndex((prev) =>
              prev == adCarouselImages.length - 1 ? 0 : prev + 1
            );
          }}
          sx={{
            position: "absolute",
            right: 6,
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
  // let baseURL = "http://localhost:1954";
  let baseURL = "https://zphs-school.vercel.app";
  // let baseURL = "https://www.zphskunur.in/";
  const [openAttendanceModal, setOpenAttendanceModal] = React.useState(false); // Step 1: State for Attendance Modal
  const [feedback, setFeedback] = React.useState(""); // Step 1: State for Attendance Modal
  const [feedbackName, setFeedbackName] = React.useState(""); // Step 1: State for Attendance Modal
  const [counting, setCounting] = React.useState(true); // Step 1: State for Attendance Modal
  setTimeout(() => {
    setCounting(false);
  }, 2000);
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
  const [careersAnchorEl, setCareersAnchorEl] = React.useState(null);
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
  const [openComingSoonModal, setOpenComingSoonModal] = React.useState(false);
  const [openAdsModal, setOpenAdsModal] = React.useState(false);
  const [openDownloadsModal, setOpenDownloadsModal] = React.useState(false); // Step 1: State for Downloads Modal

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
  const handleCareersMenu = (event) => {
    setCareersAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAlumniAnchorEl(null);
    setEventsAnchorEl(null);
    setSchoolAnchorEl(null);
    setCareersAnchorEl(null);
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
  const handleOpenComingSoonModal = () => {
    setOpenComingSoonModal(true);
    handleClose();
  };

  const handleClosePrincipalMotiveModal = () => {
    setOpenPrincipalMotiveModal(false);
  };
  const handleCloseComingSoonModal = () => {
    setOpenComingSoonModal(false);
    handleClose();
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

  const handleOpenDownloadsModal = () => {
    setOpenDownloadsModal(true);
  };

  const handleCloseDownloadsModal = () => {
    setOpenDownloadsModal(false);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar position="sticky" sx={{ bgcolor: "#25D366", coloe: "gold" }}>
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              ZPHS KUNUR
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
                {/* <MenuItem onClick={handleSavineerModal}> */}
                <MenuItem
                  // onClick={handleOpenComingSoonModal}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1OlLJucO7CJcSpWgGiH2CS_wPK3oRRNLQ/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    people
                  </span>
                  souvenir
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
                <MenuItem onClick={handleCareersMenu}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    star
                  </span>
                  Careers ▾
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
                  Contact us
                </MenuItem>
                {/* <MenuItem onClick={handleOpenDownloadsModal}>
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    download
                  </span>
                  Downloads & Links
                </MenuItem> */}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {/* <Button color="inherit" onClick={handleSavineerModal}> */}
              <Button
                // onClick={handleOpenComingSoonModal}
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OlLJucO7CJcSpWgGiH2CS_wPK3oRRNLQ/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                souvenir
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

              <Button color="inherit" onClick={scrollToGallery}>
                Gallery
              </Button>
              <Button color="inherit" onClick={handleOpenDonateModal}>
                Donate
              </Button>
              <Button color="inherit" onClick={handleOpenAdsModal}>
                Ads
              </Button>
              <Button color="inherit" onClick={handleCareersMenu}>
                Careers ▾
              </Button>
              <Button color="inherit" onClick={scrollToContact}>
                Contact us
              </Button>
              {/* <Button color="inherit" onClick={handleOpenDownloadsModal}>
                Downloads & Links
              </Button> */}
            </Box>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={careersAnchorEl}
          open={Boolean(careersAnchorEl)}
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
            { title: "Guidence", onClick: handleClose },

            {
              title: "jobs",
              onClick: handleOpenComingSoonModal,
            },
            { title: "Employers", onClick: handleOpenComingSoonModal },

            { title: "Sports", onClick: handleClose },
            { title: "Business", onClick: handleClose },
            { title: "Internships", onClick: handleClose },
            { title: "Arts", onClick: handleClose },
            { title: "Finance", onClick: handleClose },
            { title: "Health", onClick: handleClose },
            { title: "Technology", onClick: handleOpenComingSoonModal },
            { title: "Subjects", onClick: handleOpenComingSoonModal },
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
            { title: "About School", onClick: scrollToContact },
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
            { title: "Organization", onClick: handleClose },
            { title: "Alumni Events", onClick: handleClose },
            { title: "Downloads & Links", onClick: handleOpenDownloadsModal },
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

        {/* Feature Coming soon*/}
        <Dialog
          open={openComingSoonModal}
          onClose={handleCloseComingSoonModal}
          maxWidth="sm"
          fullWidth
        >
          <Box sx={{ p: 1, fontSize: { xs: "8px", md: "9px", lg: "10px" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: { xs: "10px", md: "12px", lg: "15px" },
                }}
              >
                Feature coming soon...
              </Typography>
              <IconButton onClick={handleCloseComingSoonModal} size="small">
                <span className="material-icons">close</span>
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "primary.light",
                borderRadius: 2,
                p: 1,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  left: -20,
                  backgroundColor: "success.main",
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-icons" style={{ color: "white" }}>
                  star
                </span>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  lineHeight: 1.8,
                  textAlign: "start",
                  fontSize: { xs: "10px", md: "12px", lg: "15px" },
                }}
              >
                This Feature under development, available soon...
              </Typography>
            </Box>
          </Box>
        </Dialog>
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
                  color: "white",
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
              <Box>
                <Button
                  variant="outlined"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1D6nL8ygYoavfplTsg3ajrf4OTubwfg5j/view?usp=sharing",
                      "_blank"
                    )
                  } // Update with the actual PDF path
                  sx={{ mr: 2 }}
                >
                  PDF
                </Button>
                <IconButton onClick={handleCloseAlumniModal}>
                  <span className="material-icons">close</span>
                </IconButton>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {alumniMembers.map((alumni, alumniIndex) => (
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
                    {/* <CardMedia
                      component="img"
                      height="200"
                      image={alumni.photo}
                      alt={alumni.fullName}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0", // Rounded top corners
                      }}
                    /> */}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }} // Centered text
                      >
                        {alumni.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }} // Centered text
                      >
                        {alumni?.father}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          bgcolor: "primary.light",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: "15px",
                          // display: "inline-block",
                          // mb: 2,
                          textAlign: "center", // Centered text
                        }}
                      >
                        <Typography variant="body2">{alumni?.role}</Typography>
                      </Box>

                      {/* <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          textAlign: "center", // Centered text
                        }}
                      > */}
                      {/* <Box
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
                            {alumni?.profession}
                          </Typography>
                        </Box> */}

                      {/* <Box
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
                        </Box> */}
                      {/* </Box> */}
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
                          href={`mailto:${alumni?.email}`}
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
                          href={`tel:${alumni?.phone}`}
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

                      <Box sx={{}}>
                        {/* <Typography variant="subtitle2" gutterBottom>
                          Technologies:
                        </Typography> */}
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
                        {/* <Button
                          variant="outlined"
                          size="small"
                          startIcon={
                            <span className="material-icons">code</span>
                          }
                          href={developer.githubProfile}
                          target="_blank"
                          sx={{ flex: 1 }}
                        >
                          Facebook
                        </Button> */}
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
          style={{
            fontSize: "12px",
            paddingTop: "6px",
            backgroundColor: "#25D366",
            color: "white",
            // "&:hover": {
            //   fontSize: "12px",
            // },
          }}
        >
          <marquee behavior="scroll" direction="left">
            Ads: Hiranmai Constructions And PrecastMaterials || Sai Bhavani
            motors And Goldnoon || Neelima Book Bank || Rudra Power Point ||
            Geeta Auto Commercials Anjana Chit Funds || ZPHS Principals ||
            Allphores IIT || NEET Academy || Natural || Pure Oils || Annapurna
            Seeds || Pesticides || CIVILDEN Green infra pvt.ltd || Cable tech
            industries || Birla Open Minds || Adithya Industry || LIC of India
            Akula Kumaraswamy || Muthya Kidney Centre || Kunur Temples || LOLA
            live a Pleasant Life || Kaveri Borewells || Krishna Fertilizers
            Deport || LIC Mamidala Srinivas || Lavanya Furnishings || NTIPL || V
            S Groups || Thota Butchilingam Anaj || General Merchants || Prasanna
            Agencies || Sri Vishwakarma Plywoods || ArjunRajuParusharamulu ||
            SLV ENERTECH Solutions || Sri Sainath Good Carrier || Neeling Book
            Links || Dhanalaxmi Matchings GNP || Padhmavati Conventions ||
            Balaji Iron Hardwares || myPaisaa || Kusuma Industries || Sriraksha
            Dental, Ent, Homoro Clinic || Legal Adept || Special Class civil
            Contractor T.Baskar Rao || Padhmavati rice || Dry fruits ||
            Srinivasu Jewellery || Mahadev Opticals || Suthri.Ashok Agro Trading
            || Dr.P Srinivas || Pragathi Graphics || Someswara Stores || Sri
            Balaji Electronics || Home Needs || Sri Venkateshwara Associates ||
            B.Govindharajan, M.Subhash, Mallaiah, P.Narothham reddy || Sri
            Donthi.Madhavareddy Narsampet || Sri Yerrabelly.Dhayakar Rao ||
            Jagruthi Creations || Arya Samaj Uppal || Nomula.Ravindar ||
            Y.Subhashini || Mahajan Garments || Belli.Jalender Yadav ||
            Pattipaka.Laxman S/o Laxminarsu || Arya Samaj Uppal || Ravi
            Enterprises || Madhu Electricals, Winding Works || Ayyappa Seeds
            Agencies || B.Bikshapati || Dr.Pitta Sathyam || T. Ravinder || denim
            mart
          </marquee>
        </Box>
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
                // backgroundColor: "rgba(0,0,0,.5)",
              }}
            />
            <Container
              maxWidth="md"
              sx={{
                pt: "180px",
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
                  fontSize: { xs: "1rem", sm: "3rem", md: "3.75rem" },
                }}
              >
                {carouselImages[activeStep].label}
              </Typography>
              <Typography
                variant="h5"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" },
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
                      // boxShadow: 3,
                    },
                    ...(achievement.isViewMore && {
                      backgroundColor: "#25D366",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "warning.dark",
                        color: "red",
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
                            backgroundColor: "#25D366",
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
        <Box sx={{ bgcolor: "grey.100", py: { xs: 2, md: 4, lg: 6 } }}>
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
              <div className="notification general">
                <span className="icon">✔</span> souvenir Book release on 21st
                December 2024
              </div>
              <div className="notification warning">
                <span className="icon">✔</span> Website release on 21st December
                2024
              </div>
              <div className="notification general">
                <span className="icon">✔</span> ZPHS Kunur Golden Jubilee
                celebrations on December 21st & 22nd 2024
              </div>

              {/* <div className="notification warning">
                <span className="icon">✔</span> Attention towords every single
                one
              </div> */}

              <div className="notification warning">
                <span className="icon">✔</span> Gathering Previous 50 Years
                Students Data to One place
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
        <Box id="photo-gallery" sx={{ py: { xs: 2, md: 4, lg: 6 } }}>
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

                          "& .gallery-image": {
                            transform: "scale(1.1)",
                          },
                          "& .gallery-overlay": {},
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
                          image={item?.image}
                          alt={item?.title}
                          className="gallery-image"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "105%",
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
                          {/* <Typography
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
                          </Box> */}
                          {/* <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleOpenGalleryModal(item)}
                            sx={{
                              mb: 2,
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
                          </Button> */}
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

            {/* <Box sx={{ textAlign: "center", mt: 4 }}>
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
            </Box> */}
          </Container>
        </Box>
        {/* Future Focus Section */}
        <Box sx={{ py: { xs: 2, md: 4, lg: 6 }, bgcolor: "grey.100" }}>
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
                            backgroundColor: "#25D366",
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
                              backgroundColor: "#25D366",
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
        {/*<Box id="success-stories" sx={{ py: 6, bgcolor: "grey.50" }}>
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
        </Box>*/}

        {/* About Us Section */}
        <Box sx={{ py: { xs: 2, md: 4, lg: 6 }, mb: 4, bgcolor: "grey.100" }}>
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
                      xs: "0.6rem", // Extra small screens
                      sm: "1rem", // Small screens
                      md: "1.125rem", // Medium and larger screens
                    },
                  }}
                >
                  {/* <Typography variant="h5" gutterBottom color="primary">
                    Our History
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Established in 1950, ZPHS Kunur has been a beacon of
                    learning in our community for over 74 years. What started as
                    a small school with few students has grown into a
                    prestigious institution serving over 500 students per year
                    today.
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
                  </Typography> */}
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontSize: { xs: "10px", md: "15px" } }}
                  >
                    జిల్లా పరిషత్ ఉన్నత పాఠశాల కూనూరు చరిత్ర
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: { xs: "12px", md: "15px" } }}
                  >
                    పశ్చిమాన ఆకేరు నది, తూర్పున శ్రీ రంగనాథుని గుడి, ఉత్తరాన
                    శ్రీ ఐనవోలు మల్లికార్జునుడు, దక్షిణమున జఫరఘడ్ శ్రీ
                    లక్ష్మీనరసింహ స్వామి మధ్య భాగాన కోహినూర్ వజ్ర సమాస కూసూరు
                    జనపదం.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "12px", md: "15px" } }}
                  >
                    ప్రస్తుత జిల్లా పరిషత్ సెకండరీ పాఠశాల కూనూరు
                    మొట్టమొదటిసారిగా 1950 సం||లో ప్రాథమిక పాఠశాలగా
                    ప్రారంభించబడినది. తరువాత కాలంలో ఈ గ్రామ విద్యా అవసరాల
                    దృష్ట్యా స్థాయిని పెంచుకుంటూ 23 సం||ల తర్వాత దశలవారీగా
                    అప్డేషన్ 1973-74 విద్యా సంవత్సరంలో ఉన్నత పాఠశాలగా
                    రూపుదిద్దుకొంది.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: { xs: "12px", md: "15px" } }}
                  >
                    1950 నుండి 1970 ద్విదశాబ్ద కాలంలో, తమ పిల్లలను చదివించాలనే
                    ఆలోచన తల్లిదండ్రుల్లో పెరిగింది. విద్యార్థుల సంఖ్య కూడా
                    పెరిగింది. 1970 నుండి 1973 నాటికి పెరిగిన విద్యార్థుల
                    సంఖ్యకు అనుగుణంగా ఉపాధ్యాయులను ప్రభుత్వం పెంచుతూ వచ్చింది.
                    దీనిలో విద్యార్థుల చేరిక ఎక్కువవడంతో సత్రంలోని నాలుగు గదులు,
                    తరగతుల నిర్వహణకు కష్టతరమడంతో ఊరి పెద్దలు ఒక నిర్ణయం
                    తీసుకుని, పాఠశాలకు ప్రత్యేక స్థలం ఆలయం సమీపాన ఏర్పాటుకు కృషి
                    చేసి, ఎట్టకేలకు స్థల కేటాయింపు చేయగా, అందులో ప్రభుత్వం
                    పంచాయతీరాజ్ డిపార్ట్మెంట్ వారు 6వ తరగతి నుండి 10వ తరగతి వరకు
                    తరగతుల సామర్థ్యానికనుగుణంగా నూతన పాఠశాల నిర్మాణం జరిగింది.
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
              Scan the QR code to make your donations for ZPHS Kunur Alumni
            </Typography>

            {/* QR Code SVG */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                p: 2,
                // border: "2px dashed",
                // borderColor: "primary.main",
                // borderRadius: 2,
              }}
            >
              <img
                src="/qr.jpeg"
                alt="Donation QR Code stoped"
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
                // href="http://localhost:1954/form"
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
                            phone
                          </span>
                          <Typography variant="body2">
                            {teacher.phone}
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
                          // href={`mailto:${teacher.email}`}
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
          // sx={{ bgcolor: "#232e25", color: "white" }}
          sx={{ bgcolor: "#46d05d", color: "white" }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 3,
              }}
            >
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

                  {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      schedule
                    </span>
                    <Typography variant="body2">
                      Monday - Saturday
                      <br />
                      9:30 AM - 4:40 PM
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>

              {/* <Grid item xs={12} md={4}>
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
              </Grid> */}

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
                      link: "https://www.facebook.com/zphskunur",
                    },

                    {
                      icon: "photo_camera",
                      name: "Instagram",
                      link: "https://www.instagram.com/zphskunur",
                    },
                    {
                      icon: "play_circle",
                      name: "YouTube",
                      link: "https://www.youtube.com/@zphskunur-t7b",
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

              <Grid item xs={12} sx={{}}>
                <Box
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    m: { xs: 1, md: 2 },
                    p: { xs: 1, md: 2 },
                    borderRadius: "8px",
                    boxShadow: "0 4px 20px gold",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "12px", md: "15px", lg: "18px" },
                    }}
                  >
                    Feedback
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "8px", md: "12px", lg: "15px" },
                    }}
                  >
                    We value your feedback...
                  </Typography>
                  <TextField
                    label="Your name"
                    type="text"
                    size="small"
                    // defaultValue={0}
                    variant="standard"
                    value={feedbackName}
                    onChange={(e) => {
                      setFeedbackName(e.target.value);
                    }}
                    sx={{
                      fontSize: { xs: "8px", md: "10px", lg: "12px" },
                      width: "150px",
                      color: "blue",
                      mb: 2,
                      // bgcolor: "red",
                      // border: "1px solid pink",
                      borderRadius: "4px",
                    }}
                  ></TextField>
                  <TextField
                    sx={{
                      fontSize: { xs: "12px", md: "15px", lg: "18px" },
                    }}
                    label="Your Feedback"
                    value={feedback}
                    onChange={(e) => {
                      if (feedback.length < 300) {
                        setFeedback(e.target.value);
                      }
                    }}
                    variant="outlined"
                    placeholder="Add your feedback here..."
                    fullWidth
                    multiline
                    rows={2}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="warning"
                            size="small"
                            // onClick={handleSendFeedback}
                            onClick={() => {
                              if (
                                feedback.length > 0 &&
                                feedbackName.length > 0
                              ) {
                                axios
                                  .post(`${baseURL}/save-feedbacks`, {
                                    person: feedbackName,
                                    feedback: feedback,
                                  })
                                  .then((res) => {
                                    console.log("res", res);
                                    alert("Thanks for feedback..");
                                  })
                                  .catch((er) => {
                                    alert("Not able to submit.");
                                    console.log("er", er);
                                  });
                                setFeedback("");
                                setFeedbackName("");
                              }
                            }}
                            aria-label="send feedback"
                          >
                            {/* Submit &nbsp;{" "} */}
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

                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">
                    © 2024 ZPHS Kunur. All rights reserved.
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
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                bgcolor: "primary.light", // Background color for the box
                p: 1, // Padding for the box
                borderRadius: 2, // Rounded corners
                boxShadow: 2, // Subtle shadow for depth
              }}
              onClick={handleCloseAdsModal}
            >
              {/* <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "primary.main", // Text color
                  fontSize: { xs: "14px", md: "25px" },
                }}
              >
                souvenir Advertisements
              </Typography> */}
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
                    color: "white", // Text color
                    fontSize: { xs: "14px", md: "25px" },
                  }}
                >
                  Click To Close
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Dialog>

        {/* Downloads Modal */}
        <Dialog
          open={openDownloadsModal}
          onClose={handleCloseDownloadsModal}
          maxWidth="sm"
          fullWidth
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                m: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Downloadable PDFs
              </Typography>
              <IconButton onClick={handleCloseDownloadsModal}>
                <span className="material-icons">close</span>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  window.open(
                    "https://www.seeliveevents.com/saisree/zphskunurugoldenjubilee",
                    "_blank"
                  )
                }
                sx={{ mb: 2, flex: 1 }} // Added flex to make buttons responsive
              >
                Live links
              </Button>
              <Button
                variant="contained"
                onClick={() => window.open("", "_blank")}
                sx={{ mb: 2, flex: 1 }} // Added flex to make buttons responsive
              >
                Download Apk
              </Button>
              {/* <Button
                variant="contained"
                onClick={() => window.open("link_to_pdf_3.pdf", "_blank")}
                sx={{ mb: 2, flex: 1 }} // Added flex to make buttons responsive
              >
                Download PDF 3
              </Button> */}
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
              Our NRI's
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
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for transform and box-shadow
                    backgroundColor: "#25D366", // Added background color
                    "&:hover": {
                      transform: "scale(1.05) translateY(-8px)", // Scale up and translate on hover
                      boxShadow: "0 4px 20px gold", // Updated box shadow color
                      backgroundColor: "#25D366", // Change background on hover
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
                        color: "white", // Changed text color to white
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      {story.name}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      p: 2,
                      mt: 0,
                      pt: 0,
                      borderColor: "divider",
                      bgcolor: "info.light.", // Added background color for the button box
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
                        bgcolor: "white", // Changed button border color to white
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
