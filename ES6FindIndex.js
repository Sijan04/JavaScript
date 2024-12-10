const students =[


    {
        id :101,
        gpa: 2.4
    },

    {
        id :101,
        gpa: 4.5
    },

    {
        id :101,
        gpa: 5
    },

]

console.log(students.find(x => x.gpa>4))