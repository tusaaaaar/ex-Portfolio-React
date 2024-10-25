import defaultImage from "../resources/images/defaultImage.JPG"
import {
    CodeRounded,
    GitHub,
    HomeRounded,
    Instagram,
    LinkedIn,
    Phone,
    Mail
} from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
// import CImage from "../resources/images/C.jpg";
// import CCImage from "../resources/images/CC.png";
// import JAVAImage from "../resources/images/java.png";
// import PYTHONImage from "../resources/images/py.png";

export const userProfileDefaultData={
    "Name"      :"Tushar Sharma",
    "UserName"  :"_tusaaaaar",
    "DOB"       :"28-11-2004",
    "Address"   :"Palampur,H.P",
    "EmailID"   :"sharmatushar7171@gmail.com",
    "PhoneNo"   :"9805429302",
    "Description":"Final Year Computer Science Student",
    "Photo"     : defaultImage
}

export const certificates = 
  [
    {
      "title": "SQL (Basic)",
      "provider": "HackerRank",
      "link": "https://www.hackerrank.com/certificates/7a401b292e28"
    },
    {
      "title": "CSS (Basic)",
      "provider": "HackerRank",
      "link": "https://www.hackerrank.com/certificates/18827fb0402a"
    },
    {
      "title": "Foundations: Data, Data, Everywhere",
      "provider": "Coursera",
      "link": "https://www.coursera.org/account/accomplishments/verify/EE9VT5U7FDST?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      "title": "Problem Solving (Basic)",
      "provider": "HackerRank",
      "link": "https://www.hackerrank.com/certificates/bf66b752369f"
    },
    {
      "title": "Problem Solving (Intermediate)",
      "provider": "HackerRank",
      "link": "https://www.hackerrank.com/certificates/b44475dbb4aa"
    },
    {
      "title": "Python (Basic)",
      "provider": "HackerRank",
      "link": "https://www.hackerrank.com/certificates/your-python-basic-certification-link"
    },
    {
      "title": "Ask Questions to Make Data-Driven Decisions",
      "provider": "Coursera",
      "link": "https://coursera.org/account/accomplishments/verify/87TKBXR9A6RQ"
    }
  ]
  


export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <PersonIcon className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Contact": <LinkedIn className="icon"/>
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "About",
        "icon": IconTitleMap.Academics,
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Contact",
        "icon": IconTitleMap.Contact,
        "link": "/contact"
    },
]
export const skills = [
    { name: 'HTML / CSS' },
    { name: 'JavaScript' },
    { name: 'C / C++' },
    { name: 'JAVA' },
    { name: 'React' },
    { name: 'DBMS'},
    { name: 'Bak-Todi'}
  ];
  
export const Primary=[
    {
        title: 'Mail',
        icon: <Mail fontSize="inherit" />,
        link: 'mailto:sharmatushar7171@gmail.com',
    },
    {
        title:'Phone',
        icon:<Phone fontSize='inherit' />,
        link: "https://www.google.com/",
    }
]
export const SOCIAL_PROFILES=[
    {
        title: 'Instagram',
        icon: <Instagram fontSize="inherit" />,
        link: 'https://www.instagram.com/_tusaaaaar',
     
    },
    {
        title: 'LinkedIn',
        icon: <LinkedIn fontSize="inherit" />,
        link: 'https://www.linkedin.com/in/tushar7171/',
    },
    {
        title: 'GitHub',
        icon: <GitHub fontSize="inherit" />,
        link: 'https://github.com',
    },
    
]
export const educationData = [
  {
    title: "BSc [H] CS",
    institution: "Sri Sathya Sai Institute of Higher Learning",
    duration: "2022 - Present"
  },
  {
    title: "12th Grade",
    institution: "Gov. Senior Secondary School, MPC Stream",
    duration: "2020 - 2022"
  },
  {
    title: "10th Grade",
    institution: "Mount Carmel Senior Secondary School",
    duration: "2009 - 2020"
  }
];

export const PROJECTS_DETAILS = [
    {
      name: "Huffman Encoding Algorithm",
      description: "Led a group to build a C-based terminal app for Huffman Encoding.",
      url: "https://www.google.com/"
    },
    {
      name: "Mini Project H2",
      description: "Collaborated on a C++ terminal app for hostel digitalization.",
      url: "https://www.google.com/"
    },
    {
      name: "Java",
      description: "Built a terminal stores app using Java.",
      url: "https://www.google.com/"
    },
    // {
    //   name: "Python Stores Application",
    //   description: "Developed a Python-based terminal stores app.",
    //   url: "https://www.google.com/"
    // }
  ];
  
   

export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

export const drawerWidth = 200;


export const DarkTheme              = "dark"
export const LightTheme             = "light"
