const Profiles = [
  {
    name: "John Doe",
    jobTitle: "Software Engineer",
    company: "Google",
    Branch: "Computer Science",
    passOutYear: 2020,
    mobileNumber: "+1234567890",
    email: "john.doe@example.com",
    userProfilePic: require("./profile.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  {
    name: "Jane Smith",
    jobTitle: "Graphic Designer",
    company: "Microsoft",
    Branch: "Information Technology",
    passOutYear: 2019,
    mobileNumber: "+0987654321",
    email: "jane.smith@example.com",
    userProfilePic: require("./profile.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  {
    name: "JB Eghianruwa",
    jobTitle: "Junior Web Developer",
    company: "PWC",
    Branch: "EXTC",
    passOutYear: 2018,
    mobileNumber: "+1234567890",
    email: "jbeghianruwa@example.com",
    userProfilePic: require("./profile.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  {
    name: "Arisha Doe",
    jobTitle: "Engineer",
    company: "EY",
    Branch: "Electrical",
    passOutYear: 2021,
    mobileNumber: "+1234567890",
    email: "arisha@example.com",
    userProfilePic: require("./woman.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  {
    name: "Leana Smith",
    jobTitle: "Marketing",
    company: "HUL",
    Branch: "Civil",
    passOutYear: 2023,
    mobileNumber: "+0987654321",
    email: "leana@example.com",
    userProfilePic: require("./woman.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  {
    name: "Prasuna Smith",
    jobTitle: "Senior Web Developer",
    company: "PWC",
    Branch: "Electronics",
    passOutYear: 2022,
    mobileNumber: "+1234567890",
    email: "ps@example.com",
    userProfilePic: require("./woman.png"),
    socialMediaLinks: {
      linkedin: "https://pbc-webdev.com",
      twitter: "https://pbc-webdev.com",
    },
  },
  //Here you can add more user profiles
];

// Make profiles variable available globally
window.profiles = Profiles;

export default Profiles;
