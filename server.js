const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const users = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "username": "amit.sharma",
    "email": "amit.sharma@example.com",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": { "lat": "-37.3159", "lng": "81.1496" }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Tech Solutions Ltd.",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    "skills": ["React", "Node.js", "MongoDB"]
  },
  {
    "id": 2,
    "name": "Priya Singh",
    "username": "priya.singh",
    "email": "priya.singh@example.com",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": { "lat": "-43.9509", "lng": "-34.4618" }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Innovate Hub",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    },
    "skills": ["Angular", "Firebase", "TailwindCSS"]
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "username": "rahul.verma",
    "email": "rahul.verma@example.com",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": { "lat": "-68.6102", "lng": "-47.0653" }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Tech Solutions Ltd.",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
    "skills": ["Vue.js", "AWS", "Docker"]
  },
  {
    "id": 4,
    "name": "Sneha Patel",
    "username": "sneha.p",
    "email": "sneha.patel@example.com",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": { "lat": "29.4572", "lng": "-164.2990" }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Creative Minds Inc.",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    },
    "skills": ["JavaScript", "HTML", "CSS", "SASS"]
  },
  {
    "id": 5,
    "name": "Vikram Kumar",
    "username": "vikramk",
    "email": "vikram.kumar@example.net",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": { "lat": "-31.8129", "lng": "62.5342" }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Tech Solutions Ltd.",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    },
    "skills": ["Python", "Django", "PostgreSQL"]
  },
  {
    "id": 6,
    "name": "Anjali Gupta",
    "username": "anjali.g",
    "email": "anjali.gupta@example.org",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": { "lat": "-71.4197", "lng": "71.7478" }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "jacynthe.com",
    "company": {
      "name": "Creative Minds Inc.",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    },
    "skills": ["Figma", "UI Design", "UX Research"]
  },
  {
    "id": 7,
    "name": "Rohan Mehta",
    "username": "rohan.m",
    "email": "rohan.mehta@example.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": { "lat": "24.8918", "lng": "21.8984" }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Data Insights Co.",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-services"
    },
    "skills": ["SQL", "Tableau", "Data Analysis"]
  },
  {
    "id": 8,
    "name": "Meera Iyer",
    "username": "meera.iyer",
    "email": "meera.iyer@example.tv",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": { "lat": "-14.3990", "lng": "-120.7677" }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.biz",
    "company": {
      "name": "Innovate Hub",
      "catchPhrase": "Implemented radical collaboration",
      "bs": "matrix dynamic web-readiness"
    },
    "skills": ["Java", "Spring Boot", "Microservices"]
  }
];

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
