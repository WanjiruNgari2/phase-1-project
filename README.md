# phase-1-project
This challenge is about an election website.

## Introduction
This challenge will require you that the end user registers their details and clicks on submit. After that they should select a candidate from the three candidates given. The vote button will then increase the votes after each click.

## HTML
This file should be a simple file that links the javascript file and the styling CSS made. It has the form attributes and different 

## CSS 
This file will add different styles to your webpage. 

## db.json
This is a file has details of users and  candidates. The two have their keys and values shown below:
{
  "candidates": [
    {
      "id": "1",
      "name": "Daniel Moi",
      "Votes": 1,
      "bio": "Daniel Moi is a former president with a strong leadership record and dedication to national development.",
      "image": "album/daniel.jpg"
    },
    {
      "id": "2",
      "name": "Candidate2",
      "Votes": 0,
      "bio": "Candidate2 is an emerging leader focused on innovation and economic growth.",
      "image": "album/candidate2.jpg"
    },
    {
      "id": "3",
      "name": "Candidate3",
      "Votes": 0,
      "bio": "Candidate2 is an emerging leader focused on innovation and economic growth.",
      "image": "album/candidate3.jpg"
    }
  ],
  "Users": [
    {
      "id": "1",
      "name": "Jane Doe",
      "dob": "1900-10-14",
      "nationality": "Kenyan",
      "gender": "Female"
    },
    {
      "id": "2",
      "name": "John Smith",
      "dob": "1992-05-25",
      "nationality": "Kenyan",
      "gender": "Male"
    },
    {
      "id": "2239",
      "name": "Jane Doe",
      "dob": "1900-30-14",
      "nationality": "Kenyan",
      "gender": "Female"
    },
    {
      "id": "58a7",
      "name": "Jane Doe",
      "dob": "1900-30-14",
      "nationality": "Kenyan",
      "gender": "Female"
    },
    {
      "id": "1344",
      "name": "hbhbhvv",
      "nationality": "trrdr",
      "age": 23,
      "gender": "Female"
    },
    {
      "id": "0546",
      "name": "kkuhuh",
      "nationality": "trrdr",
      "age": 33,
      "gender": "Female"
    },
    {
      "id": "d9d6",
      "name": "damah",
      "nationality": "Kenyan ",
      "age": 33,
      "gender": "Female"
    },
    {
      "id": "9b34",
      "name": "damah",
      "nationality": "Kenyan ",
      "age": 33,
      "gender": "Female"
    },
    {
      "id": "8c79"
    },
    {
      "id": 73,
      "name": "Damaris Ngari",
      "dob": "1930-10-14",
      "nationality": "Kenyan",
      "gender": "Female"
    },
    {
      "id": 73,
      "name": "Damaris Ngari",
      "dob": "1930-10-14",
      "nationality": "Kenyan",
      "gender": "Female"
    },
    {
      "id": "b979",
      "name": "Karen Mtindwa",
      "nationality": "Kenyan ",
      "age": 103,
      "gender": "Female"
    },
    {
      "id": "23c0",
      "name": "fftrcc",
      "nationality": "Kenyan ",
      "age": 22,
      "gender": "Female"
    }
  ]
}


## js
This file will have function that waits for users to submit their details on the registtration form. After that, it check that users age is greater then or equal to 18. so as to allow them to continue.

After passing this, The user can view  candidate details from as described in the db.json. The project will allow users to vote for a specific candidate. After hitting the vote button the candidate"s votes will be increased by one. 

You will need to create a git repository and add a folder that will hold all the above mentioned files. 

Install the JSON server using: $ npm install -g json-server so it is installed globally in your machine.
Create a file that will act as our data storage using: $ touch db.json.
Then copy details given in the db.json part.
command:  $ json-server --watch db.json.You should see a notice that you can access the server at `http://localhost:3000`. 

Now all changes you make to this file can be viewed via POSTMAN or you can refresh your website in your browser to see them.

To stop watching the server simply use 'ctrl + C'.

### Conclusion
This website will mostly test on your understnding of DOM Manipulation, use of Eventlisteners and fetching data from APIs. 

### Contact me
Please reach me through  my email address 'WANJIRUNGARI2@GMAIL.COM' incase of any problems or questions. Thank you and Have fun coding!!!!

#### github live link
https://github.com/WanjiruNgari2/phase-1-voting-project/settings/pages
