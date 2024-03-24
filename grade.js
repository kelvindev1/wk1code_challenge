// This code first checks if the marks input ranges from (0-100)

 // parseInt(function)is used to convert input string to an integer 
 const studentMarks = parseInt(prompt("Enter student marks(0-100):")); 

//if marks are more than 100 you are required to recheck and assign something in the range. 
studentMarks; {
if (studentMarks > "100") {
     console.log("KINDLY CHECK YOUR MARKS WELL.");
     }
//marks between 79 and 100 should give a Grade: A
 else if (studentMarks >= "80"){ console.log("Grade: A"); 
} 
//marks between 60 and 79 should give a Grade: B-
else if (studentMarks >= "60"){ console.log("Grade: B"); 
} //marks between 50 and 59 should give a Grade: C-
 else if (studentMarks >= "50") {console.log("Grade: C");
 }
  //marks between 40 and 49 should give a Grade: D-
else if (studentMarks >= "40") { console.log("Grade: D");
 } //marks between 0 and 39 should give a Grade: E 
 else if (studentMarks > "0") { console.log("Grade:E");
 }
  //ANY other marks shoud give invalid marks.
   else {console.log("INVALID MARKS.MARKS SHOULD BE BETWEEN (0-100)");
}
}
