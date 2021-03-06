
document.getElementById('resume-form').addEventListener('submit', submitResume);



function submitResume(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var college = document.getElementById("college").value;
    var year = document.getElementById("year").value;
    var skill = document.getElementById("skill").value;
    var stack = document.getElementById("stack").value;
    var github = document.getElementById("github").value;

    // Save message
    saveResume(username, college, year, skill, stack, github);

    document.getElementById('resume-form').reset();

    location.replace("HomePage.html");

}