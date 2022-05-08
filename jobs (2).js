document.getElementById("SchForm").addEventListener("submit", (event)=>{
    event.preventDefault()
})

function scholar(){
       
        var myclass = document.getElementById("myclass").value;
        var board = document.getElementById("board").value;
        var CGPA = document.getElementById("CGPA").value;
       
        // Save message
        saveResume(myclass, board, CGPA);
    
        
}






var job=[
    {
        name: "Assistant Chemist, Assistant Geophysicist, Assistant Director, Officer etc ",
        standard:"GRADUATE",
        skills:"graduate and degree holder in given discipline",
        organization:"Ministry of Mines"
    },
    {
        name: "Field Sales Executive",
        standard:"GRADUATE",
        skills:"1 Year - 10 years preferably in banks, insurance, FMCG, Real estate, Fuel card/Fastag sales, Logistics background",
        organization:"Capital Placement Services "
    },
    {
        name: "Driver",
        standard:"Illiterate",
        skills:"must know basic english, 10 years of driving experience, good social skills",
        organization:"TeamLease Servies Ltd"
    },
    {
        name: "Car Mechanic",
        standard:"Illiterate",
        skills:"1 years of working experience, good social skills",
        organization:"Planet PCI Infotech Ltd."
    },
    {
        name: "Data Entry Operator",
        standard:"12TH",
        skills:"Experience with MS Word, Excel, Powerpoint",
        organization:"Apex Trading & Softtech Solutions"
    },
    {
        name: "Tutor",
        standard:"12TH",
        skills:"Proficient in subject of expertise with good percentage in boards",
        organization:"Toppers' Tutorial"
    },
    {
        name: "Tutor",
        standard:"10TH",
        skills:"Proficient in subject of expertise with good percentage in boards",
        organization:"Toppers' Tutorial"
    },
   



];



//  const scholarship1=new scholarship("Colgate Scholarship",100000,35000,75,10,"www.Colgate.co.in");
//  const scholarship2=new scholarship("Indian Oil Scolarship(IOCL)",100000,"RS 2000 per month",65,10,"https://www.iocl.com/");
//  const scholarship3=new scholarship("Jio Scholarship",1000000000,35000,85,10,"https://www.jio.com/");
//  const scholarship4=new scholarship("National Talent Search Scheme",1000000000,"RS 1250 per month",0,10,"http://ntse.ncert.gov.in/login.aspx?ReturnUrl=%2f");
//  const scholarship5=new scholarship("Aakash Anthe",1000000000,"Admission into differnet course upto 1 lakh",0,10,"https://www.aakash.ac.in/anthe");
//  const scholarship6=new scholarship("Ujjwal Bhavishya Scholarship",200000,10000,85,10,"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/");
//  const scholarship7=new scholarship("Siksha Abhiyan Scholarship",1000000000,"5-100% fee waiver + different cash prize for top rankholder",75,10,"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/");
//  const scholarship8=new scholarship("Prime Minister Scholarship",100000000," Rs 2000/month for boys and Rs 2250/month for girls",60,12,"www.ksb.gov.in");
//  const scholarship9=new scholarship("Hdfc Bank Scholarship",100000,"RS 10,000 for school students and RS 35000 for college student",60,12,"www.hdfcbank.com");
//  const scholarship10=new scholarship("Colgate Scholarship",500000,35000,75,12,"www.Colgate.co.in");
//  const scholarship11=new scholarship("Aakash Anthe",1000000000,"Admission into differnet course upto 1 lakh",0,12,"https://www.aakash.ac.in/anthe");
//  const scholarship12=new scholarship("Ujjwal Bhavishya Scholarship",200000,10000,85,12,"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/");
// var standardinput=prompt("enter your highest qualification");
// var familyincomeinput=prompt("enter your family income");
// var percentageinclass=prompt("enter the marks");


// var standardinput=prompt("enter your highest qualification");
// var familyincomeinput=prompt("enter your family income");
// var percentageinclass=prompt("enter the marks");


// if(familyincomeinput==undefined)
// {
//     familyincomeinput=0;
// }
// if(percentageinclass==undefined)
// {
//     percentageinclass=0;
// }
// for(var key in scholarship)
// {
    // if(scholarship[i].familyincome>familyincomeinput&&scholarship[i].percentage<percentageinclass)
    // {
        
    //      if(scholarship[i].standard==undefined)
    //      {
    //          console.log(scholarship[i]);
    //      }
    //      else if(scholarship[i].standardinput==10)
    //      {
    //         console.log(scholarship[i]);
    //      }
    //      else if(scholarship[i].standardinput==12)
    //      {
    //         console.log(scholarship[i]);
    //      }

    // }
    // console.log(scholarship.key);
// }
// var familyincomeinput=prompt("enter family income");
// var standardinput=prompt("enter standard");
// var percentageinclass=prompt("enter the percentage");


// var standardinput="12TH";
// var percentageinclass=50;
// var familyincomeinput=-1;
var standardinput="10TH";

// const scholarshipgovt={
//     name: "National Scholarship Portal",
//     details:"You have to upload all documents this government potal will apply for all govt. scholarships",
//     eligibilty:"for pre and post matric both are eligible for this",
//     website :"https://scholarships.gov.in/fresh/newstdRegfrmInstruction"

// }
// if(familyincomeinput===undefined)
// {
//     familyincomeinput=1;
// }
// if(percentageinclass===undefined)
// {
//     percentageinclass=2;
// }
// // if(standardinput==undefined)
// {
    
// // }
// console.log(familyincomeinput)
// console.log(percentageinclass);
if(standardinput===-1)
{
    for(var i=0;i<job.length;++i)
    {
        console.log(job[i]);
    }

}
// else if(standardinput===-1&&familyincomeinput===-1&&percentageinclass!=-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].percentage<percentageinclass)
//         console.log(scholarship[i]);
//     }
// }
// else if(standardinput!=-1&&familyincomeinput===-1&&percentageinclass===-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].standard===standardinput)
//         console.log(scholarship[i]);
//     }
// }
// else if(standardinput===-1&&familyincomeinput!=-1&&percentageinclass===-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].familyincome>familyincomeinput)
//         console.log(scholarship[i]);
//     }
// }
// else if(standardinput===-1&&percentageinclass!=-1&&familyincomeinput!=-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].familyincome>familyincomeinput&&scholarship[i].percentage<percentageinclass)
//         console.log(scholarship[i]);
//     }
// }
// else if(standardinput!=-1&&percentageinclass===-1&&familyincomeinput!=-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].familyincome>familyincomeinput&&scholarship[i].standard===standardinput)
//         console.log(scholarship[i]);
//     }
// }
// else if(standardinput!=-1&&percentageinclass!=-1&&familyincomeinput===-1)
// {
//     for(var i=0;i<scholarship.length;++i)
//     {
//         if(scholarship[i].percentage<percentageinclass&&scholarship[i].standard===standardinput)
//         console.log(scholarship[i]);
//     }
// }

else{
    for(var i=0;i<job.length;++i)
    {
        if(standardinput===job[i].standard)
        console.log(job[i]);
    }
}

// console.log(scholarshipgovt)
    // else if(standardinput===scholarship[i].standard&&percentageinclass===undefined&&familyincomeinput===undefined)
    // {
    //     console.log(scholarship[i]);
    //     continue;
    // }
