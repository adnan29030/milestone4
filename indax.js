var resumeForm = document.getElementById("form");
var resumeOutput = document.getElementById("resumeOutput");
// function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var myName = document.getElementById("name").value;
        var myDesignation = document.getElementById("des").value;
        var myPhone = document.getElementById("phone").value;
        var myEmail = document.getElementById("email").value;
        var myAddress = document.getElementById("add").value;
        var myPassing_Years = document.getElementById("pss").value;
        var myDegree = document.getElementById("degree").value;
        var myBoard = document.getElementById("bu").value;
        var myskill1 = document.getElementById("skill").value;
        var mylang1 = document.getElementById("lang").value;
        var mystartyear = document.getElementById("sy").value;
        var myendingyear = document.getElementById("ey").value;
        var myCompany = document.getElementById("comadd").value;
        var myJob = document.getElementById("jobt").value;
        var myReward1 = document.getElementById("rew").value;
        var resumeHTML = "\n            <h2> Generate Editable Resume </h2>\n            <p> <b> Name : </b> <span: contenteditable=\"true\"> ".concat(myName, " </span> </p>\n            <p>  <b> Designation : </b><span: contenteditable=\"true\">").concat(myDesignation, "</span></p>\n            <p>  <b>Phone No : </b><span: contenteditable=\"true\">").concat(myPhone, "</span></p>\n            <p>  <b>Email : </b><span: contenteditable=\"true\">").concat(myEmail, "</span></p>\n            <p>  <b>Address : </b><span: contenteditable=\"true\">").concat(myAddress, "</span></p>\n            <p>  <b>Passing_Years : </b><span: contenteditable=\"true\">").concat(myPassing_Years, "</span></p>\n            <p>  <b>Degree : </b><span: contenteditable=\"true\">").concat(myDegree, "</span></p>\n            <p> <b>Board : </b><span: contenteditable=\"true\">").concat(myBoard, "</span></p>\n            <p> <b>skill1 : </b><span: contenteditable=\"true\">").concat(myskill1, "</span></p>\n            <p> <b>language : </b><span: contenteditable=\"true\">").concat(mylang1, "</span></p>\n            <p> <b>Admission : </b><span: contenteditable=\"true\">").concat(mystartyear, "</span></p>\n            <p> <b>Passing Year : </b><span: contenteditable=\"true\">").concat(myendingyear, "</span></p>\n            <p> <b>Company : </b><span: contenteditable=\"true\">").concat(myCompany, "</span></p>\n            <p> <b>Job : </b><span: contenteditable=\"true\">").concat(myJob, "</span></p>\n            <p> <b>Reward : </b><span: contenteditable=\"true\">").concat(myReward1, "</span></p>\n            ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error("form of out put div not found in the DOM");
}
