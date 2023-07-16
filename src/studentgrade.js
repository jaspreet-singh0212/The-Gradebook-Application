const students = [
    {
      id: 101,
      name: "Gilbert Saunders",
      ticket:111,
      field:'Cyber Security',
      rating:6,
      exam:7,
      contact:'+91 6281547885',
      email:'Gilbert Saunders@gmail.com',
      address:'Delhi',
      Comment:'Good Person'
      },

    {
        id: 201,
        name: "Dawn Barker",
        ticket:222,
        rating:2,
        exam:4,
        contact:'+91 627415669',
        email:'Dawn Barke@gmail.com',
        address:'Mumbai',
        field:'DevOps',
        Comment:"Keep it up"
    },
    {
        id: 301,
        name: "Julius Roach",
        ticket:333,
        rating:8,
        exam:7,
        contact:'+91 9874522117',
        email:'Julius Roach@gmail.com',
        address:'Canada',
        field:'Front-End Engineer',
        Comment:"Keep it up"
    },
    {
        id: 401,
        name: "Akshay Kumar",
        ticket:444,
        rating:2,
        exam:3,
        contact:'+91 7287962265',
        email:'akshaykommoju@gmail.com',
        address:'Punjab',
        field:'Gem Testing',
        Comment:"Keep it up"
    },
    {
        id: 501,
        name: "Mandru Vamsi",
        ticket:555,
        rating:0,
        exam:3,
        contact:'+91 9866955023',
        email:'mvamsi2001@gmail.com',
        address:'Andhra Pradesh',
        field:'Civil Engineering',
        Comment:"Keep it up"
    },
    {
        id: 601,
        name: "Sathvik Naidu",
        ticket:666,
        rating:6,
        exam:7,
        contact:'+91 6281862555',
        email:'vsathvik1987@gmail.com',
        address:'Bihar',
        field:'Mechanical Engineering',
        Comment:"Keep it up"
    },
    {
        id: 701,
        name: "Varun M.V",
        ticket:777,
        rating:3,
        exam:5,
        contact:'+91 9584477552',
        email:'varunmv2001@gmail.com',
        address:'Andhra Pradesh',
        field:'PEGA',
        Comment:"Keep it up"
    },
    {
        id: 801,
        name: "Harris Jackson",
        ticket:888,
        rating:2,
        exam:2,
        contact:'+91 9996699658',
        email:'Harris Jackson@gmail.com',
        address:'Kolkata',
        field:'Aero-Space',
        Comment:"Keep it up"
    },
    {
        id: 901,
        name: "Ciara Hampton",
        ticket:999,
        rating:5,
        exam:7,
        contact:'+91 7032587999',
        email:'vCiara Hampton@gmail.com',
        address:'Kerala',
        field:'Computer Science',
        Comment:"Keep it up"
    },
    {
        id: 101,
        name: "Satya Parsand",
        ticket:1000,
        rating:6,
        exam:7,
        contact:'+91 9849245228',
        email:'satyanl124@gmail.com',
        address:'Lucknow',
        field:'Front-End Engineer',
        Comment:"Keep it up"
    },
    {
        id: 111,
        name: "Akash Rai",
        ticket:1101,
        rating:2,
        exam:4,
        contact:'+91 9866955023',
        email:'klsakash143@gmail.com',
        address:'Delhi',
        field:'Software-Developer',
        Comment:"Keep it up"
    },
    {
        id: 121,
        name: "Prabhas Wilson",
        ticket:1202,
        rating:9,
        exam:8,
      contact:'+91 9999999998',
      email:'psvarmadarling143@gmail.com',
      address:'Andhra Pradesh',
      field:'Acting',
      Comment:"Keep it up"
    },
    {
        id: 131,
        name: "Jasmeet Singh",
        ticket:1303,
        rating:2,
        exam:4,
      contact:'+91 6281587562',
      email:'jastwal549@gmail.com',
      address:'Punjab',
      field:'Bussiness Management',
      Comment:"Keep it up"
    },
    {
        id: 141,
        name: "Ganesh Gupta",
        ticket:1404,
        rating:3,
        exam:4,
      contact:'+91 9587452115',
      email:'aganna143@gmail.com',
      address:'Harayna',
      field:'Bussiness Management',
      Comment:"Keep it up"
    },
    {
        id: 151,
        name: "Marcus Lucifer",
        ticket:1505,
        rating:8,
        exam:5,
      contact:'+91 6000000000',
      email:'mlucifer435@gmail.com',
      address:'Chennai',
      field:'Actor',
      Comment:"Keep it up"
    }

  ];
  students.forEach((student) => {
    const examGrade = parseFloat(student.exam.toFixed(2));
    const ratingGrade = parseFloat(student.rating.toFixed(2));
    const overallGrade = parseFloat(((0.6 * examGrade) + (0.4 * ratingGrade)).toFixed(2));
    student.overallGrade = overallGrade;
    student.status = overallGrade >= 4.0 ? "Passed" : "Failed";
  });
  
  
  export default students;