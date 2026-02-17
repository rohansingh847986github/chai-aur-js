const coding = ["js", "c++", "java", "python", "c"];

// coding.forEach(ele => {
//     console.log(ele);
// });

// For-Each doestn't return any value
let val = coding.forEach((ele) => {
  // console.log(ele);
  return ele;
});
// console.log(val);

// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter accept condition and return its value
const item = myNums.filter((val) => {
  return val > 3;
});
// console.log(item);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [];
myNums1.forEach((val) => {
  if (val > 3) {
    arr.push(val);
  }
});
//  console.log(arr);

//Example:-
const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    publishedDate: "2008-08-01",
    edition: "1st Edition",
    subject: "Programming"
  },
  {
    id: 2,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    publishedDate: "2009-07-31",
    edition: "3rd Edition",
    subject: "Computer Science"
  },
  {
    id: 3,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    publishedDate: "1988-04-01",
    edition: "Updated Edition",
    subject: "Physics"
  },
  {
    id: 4,
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    publishedDate: "2014-01-01",
    edition: "7th Edition",
    subject: "Economics"
  },
  {
    id: 5,
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    publishedDate: "2016-01-15",
    edition: "8th Edition",
    subject: "Chemistry"
  },
  {
    id: 6,
    title: "World History",
    author: "William J. Duiker",
    publishedDate: "2015-05-20",
    edition: "9th Edition",
    subject: "History"
  },
  {
    id: 7,
    title: "Psychology: The Science of Mind and Behaviour",
    author: "Richard Gross",
    publishedDate: "2010-03-10",
    edition: "6th Edition",
    subject: "Psychology"
  },
  {
    id: 8,
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    publishedDate: "2015-02-04",
    edition: "8th Edition",
    subject: "Mathematics"
  },

  // Additional Books (Same Subjects)

  {
    id: 9,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    publishedDate: "1999-10-20",
    edition: "2nd Edition",
    subject: "Programming"
  },
  {
    id: 10,
    title: "Design Patterns",
    author: "Erich Gamma",
    publishedDate: "1994-10-31",
    edition: "1st Edition",
    subject: "Computer Science"
  },
  {
    id: 11,
    title: "The Elegant Universe",
    author: "Brian Greene",
    publishedDate: "1999-02-11",
    edition: "1st Edition",
    subject: "Physics"
  },
  {
    id: 12,
    title: "Freakonomics",
    author: "Steven D. Levitt",
    publishedDate: "2005-04-12",
    edition: "Revised Edition",
    subject: "Economics"
  },
  {
    id: 13,
    title: "Physical Chemistry",
    author: "Peter Atkins",
    publishedDate: "2014-06-15",
    edition: "10th Edition",
    subject: "Chemistry"
  },
  {
    id: 14,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishedDate: "2011-01-01",
    edition: "1st Edition",
    subject: "History"
  },
  {
    id: 15,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    publishedDate: "2011-10-25",
    edition: "1st Edition",
    subject: "Psychology"
  },
  {
    id: 16,
    title: "Linear Algebra and Its Applications",
    author: "Gilbert Strang",
    publishedDate: "2016-03-15",
    edition: "5th Edition",
    subject: "Mathematics"
  }
];
 const userSub = books.filter( (val)=> (
  val.subject === 'Mathematics'
 ))
//  console.log(userSub);
 

 const userPublish = books.filter((val)=> {
  return val.publishedDate >= "2010-06-15" && val.subject === 'Mathematics'
} )
//  console.log(userPublish);
 


