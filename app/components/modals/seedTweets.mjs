// seedTweets.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// ✅ Replace with your actual firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBGsdf6DeU_zOhhw-e_N_m_A_oCK-1lRPg",
  authDomain: "x-clone-8fb06.firebaseapp.com",
  projectId: "x-clone-8fb06",
  storageBucket: "x-clone-8fb06.appspot.com",
  messagingSenderId: "880524853164",
  appId: "1:880524853164:web:92c61d71d2b1a319418409",
  measurementId: "G-872XJ1NLHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Demo tweets data
const demoTweets = [
  {
    name: "Alice Johnson",
    username: "alicej",
    uid: "uid1",
    photoUrl: "/assets/profilepictures/profile1.PNG",
    tweet: "Hello world! Excited to join this X-clone!",
    image: "",
    likes: [],
    comments: []
  },
  {
    name: "Bob Smith",
    username: "bobsmith",
    uid: "uid2",
    photoUrl: "/assets/profilepictures/profile2.PNG",
    tweet: "Just had my first coffee of the day ☕️",
    image: "",
    likes: [],
    comments: []
  },
  {
    name: "Charlie Brown",
    username: "charlieb",
    uid: "uid3",
    photoUrl: "/assets/profilepictures/profile3.PNG",
    tweet: "Check out this cool pic!",
    image: "/assets/demo/tweet1.jpg",
    likes: [],
    comments: []
  },
  {
    name: "Diana Prince",
    username: "wonderdiana",
    uid: "uid4",
    photoUrl: "/assets/profilepictures/profile4.PNG",
    tweet: "Looking forward to the weekend.",
    image: "",
    likes: [],
    comments: []
  },
  {
    name: "Ethan Hunt",
    username: "ethanh",
    uid: "uid5",
    photoUrl: "/assets/profilepictures/profile5.PNG",
    tweet: "Mission accomplished!",
    image: "",
    likes: [],
    comments: []
  },
  {
    name: "Fabrizio Terribile",
    username: "fab785",
    uid: "uid6",
    photoUrl: "/assets/profilepictures/profile6.PNG",
    tweet: "Testing the X-clone feed 🐦",
    image: "",
    likes: [],
    comments: []
  }
];

// Seed function
async function seedTweets() {
  for (const tweet of demoTweets) {
    await addDoc(collection(db, "tweets"), {
      ...tweet,
      timestamp: serverTimestamp()
    });
    console.log(`Tweet from ${tweet.name} added!`);
  }
  console.log("All demo tweets added successfully!");
}

// Run seed
seedTweets()
  .then(() => process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
