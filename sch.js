document.getElementById("SchForm").addEventListener("submit", (event)=>{
    event.preventDefault()
})

function scholar(){
       
        var myclass = document.getElementById("myclass").value;
        var board = document.getElementById("board").value;
        var CGPA = document.getElementById("CGPA").value;
        var income = document.getElementById("income").value;
        var inscolarshipreach = document.getElementById("inscolarshipreach").value;
        var aboradscholarshipreach = document.getElementById("aboradscholarshipreach").value;
    
        // Save message
        saveResume(myclass, board, CGPA, income, inscolarshipreach, aboradscholarshipreach);
     
}

function scholarship(){
    var name;
    var familyincome;
    var reward;
    var percentage;
    var standard;
    var website;


}
var scholarship=[
    {
        name: "Colgate Scholarship",
        familyincome: 100000,
        reward: 35000,
        percentage: 75,
        standard:"10TH",
        website: "www.Colgate.co.in"
    },
    {
        name: "Indian Oil Scolarship(IOCL)",
        familyincome: 100000,
        reward: "RS 2000 per month",
        percentage: 65,
        // standard:10,
        standard:"10TH",
        website:"https://www.iocl.com/"
    },
    {
        name: "Jio Scholarship",
        familyincome: 1000000000,
        reward: 3500,
        percentage: 85,
        // standard:10,
        standard:"10TH",
        website:"https://www.jio.com/"
    },
    {
        name: "National Talent Search Scheme",
        familyincome: 1000000000,
        reward: "RS 1250 per month",
        percentage: 0,
        // standard:10,
        standard:"10TH",
        website:"http://ntse.ncert.gov.in/login.aspx?ReturnUrl=%2f"
    },
    {
        name: "Aakash Anthe",
        familyincome: 1000000000,
        reward: "Admission into differnet course upto 1 lakh",
        percentage: 0,
        // standard:10,
        standard:"10TH",
        website:"https://www.aakash.ac.in/anthe"
    },
    {
        name: "Ujjwal Bhavishya Scholarship",
        familyincome: 200000,
        reward:10000,
        percentage: 85,
        // standard:10,
        standard:"10TH",
        website:"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/"
    },
    {
        name: "Siksha Abhiyan Scholarship",
        familyincome: 1000000000,
        reward:"5-100% fee waiver + different cash prize for top rankholder",
        percentage: 75,
        // standard:10,
        standard:"10TH",
        
        website:"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/"
    },
    {
        name: "Prime Minister Scholarship",
        familyincome: 1000000000,
        reward:"Rs 2000/month for boys and Rs 2250/month for girls",
        percentage: 60,
        // standard: 12,
        standard:"12TH",
        
        website:"www.ksb.gov.in"
    },
    {
        name: "Hdfc Bank Scholarship",
        familyincome: 100000,
        reward:"RS 10,000 for school students and RS 35000 for college student",
        percentage: 60,
        // standard: 12,
        standard:"12TH",
        
        website:"www.ksb.gov.in"
    },
    {
        name: "Colgate Scholarship",
        familyincome: 500000,
        reward: 35000,
        percentage: 75,
        // standard: 12,
        standard:"12TH",
        
        website: "www.Colgate.co.in"
    },
    {
        name: "Aakash Anthe",
        familyincome: 1000000000,
        reward: "Admission into differnet course upto 1 lakh",
        percentage: 0,
        // standard: 12,
        standard:"12TH",
       
        website:"https://www.aakash.ac.in/anthe"
    },
    {
        name: "Ujjwal Bhavishya Scholarship",
        familyincome: 200000,
        reward:10000,
        percentage: 85,
        // standard: 12,
        standard:"12TH",
        
        website:"https://www.registrationstatus.in/ujjwal-bhavishya-scholarship/"
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


var standardinput="12TH";
var percentageinclass=50;
var familyincomeinput=-1;

const scholarshipgovt={
    name: "National Scholarship Portal",
    details:"You have to upload all documents this government potal will apply for all govt. scholarships",
    eligibilty:"for pre and post matric both are eligible for this",
    website :"https://scholarships.gov.in/fresh/newstdRegfrmInstruction"

}
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

function scholar(){
       
    var myclass = document.getElementById("myclass").value;
    var board = document.getElementById("board").value;
    var CGPA = document.getElementById("CGPA").value;
    var income = document.getElementById("income").value;
    var inscolarshipreach = document.getElementById("inscolarshipreach").value;
    var aboradscholarshipreach = document.getElementById("aboradscholarshipreach").value;

    // Save message
    saveResume(myclass, board, CGPA, income, inscolarshipreach, aboradscholarshipreach); 
 
}

if(standardinput===-1&& familyincomeinput===-1&&percentageinclass===-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        console.log(scholarship[i]);
    }

}
else if(standardinput===-1&&familyincomeinput===-1&&percentageinclass!=-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].percentage<percentageinclass)
        console.log(scholarship[i]);
    }
}
else if(standardinput!=-1&&familyincomeinput===-1&&percentageinclass===-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].standard===standardinput)
        console.log(scholarship[i]);
    }
}
else if(standardinput===-1&&familyincomeinput!=-1&&percentageinclass===-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].familyincome>familyincomeinput)
        console.log(scholarship[i]);
    }
}
else if(standardinput===-1&&percentageinclass!=-1&&familyincomeinput!=-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].familyincome>familyincomeinput&&scholarship[i].percentage<percentageinclass)
        console.log(scholarship[i]);
    }
}
else if(standardinput!=-1&&percentageinclass===-1&&familyincomeinput!=-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].familyincome>familyincomeinput&&scholarship[i].standard===standardinput)
        console.log(scholarship[i]);
    }
}
else if(standardinput!=-1&&percentageinclass!=-1&&familyincomeinput===-1)
{
    for(var i=0;i<scholarship.length;++i)
    {
        if(scholarship[i].percentage<percentageinclass&&scholarship[i].standard===standardinput)
        console.log(scholarship[i]);
    }
}

else{
    for(var i=0;i<scholarship.length;++i)
    {
        
        console.log(scholarship[i]);
    }
}

console.log(scholarshipgovt)
    // else if(standardinput===scholarship[i].standard&&percentageinclass===undefined&&familyincomeinput===undefined)
    // {
    //     console.log(scholarship[i]);
    //     continue;
    // }

       
function AddItemsToTable(name, familyincome, reward, percentage, standard, website) {
    var tbody = document.getElementById('tbod');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');


    td1.innerHTML = skill;
    td2.innerHTML = stack;
    td3.innerHTML = skill;
    td4.innerHTML = stack;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);

}
    

