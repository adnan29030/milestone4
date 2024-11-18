const resumeForm = document.getElementById(`form`) as HTMLInputElement|null;
const resumeOutput = document.getElementById(`resumeOutput`) as HTMLInputElement|null;

// function to generate resume
    if(resumeForm && resumeOutput){
        resumeForm.addEventListener('submit',(event)=>{event.preventDefault();

    
            let myName:any=(document.getElementById(`name`)as HTMLInputElement).value;
            let myDesignation:any=(document.getElementById(`des`)as HTMLInputElement).value;
            let myPhone:any=(document.getElementById(`phone`)as HTMLInputElement).value;
            let myEmail:any=(document.getElementById(`email`)as HTMLInputElement).value;
            let myAddress:any=(document.getElementById(`add`)as HTMLInputElement).value;
            let myPassing_Years:any=(document.getElementById(`pss`)as HTMLInputElement).value;
            let myDegree:any=(document.getElementById(`degree`)as HTMLInputElement).value;
            let myBoard:any=(document.getElementById(`bu`)as HTMLInputElement).value;
            let myskill1:any=(document.getElementById(`skill`)as HTMLInputElement).value;
            let mylang1:any=(document.getElementById(`lang`)as HTMLInputElement).value;
            let mystartyear:any=(document.getElementById(`sy`)as HTMLInputElement).value;
            let myendingyear:any=(document.getElementById(`ey`)as HTMLInputElement).value;
            let myCompany:any=(document.getElementById(`comadd`)as HTMLInputElement).value;
            let myJob:any=(document.getElementById(`jobt`)as HTMLInputElement).value;
            let myReward1:any=(document.getElementById(`rew`)as HTMLInputElement).value;
            
            const resumeHTML =`
            <h2> Generate Editable Resume </h2>
            <p> <b> Name : </b> <span: contenteditable="true"> ${myName} </span> </p>
            <p>  <b> Designation : </b><span: contenteditable="true">${myDesignation}</span></p>
            <p>  <b>Phone No : </b><span: contenteditable="true">${myPhone}</span></p>
            <p>  <b>Email : </b><span: contenteditable="true">${myEmail}</span></p>
            <p>  <b>Address : </b><span: contenteditable="true">${myAddress}</span></p>
            <p>  <b>Passing_Years : </b><span: contenteditable="true">${myPassing_Years}</span></p>
            <p>  <b>Degree : </b><span: contenteditable="true">${myDegree}</span></p>
            <p> <b>Board : </b><span: contenteditable="true">${myBoard}</span></p>
            <p> <b>skill1 : </b><span: contenteditable="true">${myskill1}</span></p>
            <p> <b>language : </b><span: contenteditable="true">${mylang1}</span></p>
            <p> <b>Admission : </b><span: contenteditable="true">${mystartyear}</span></p>
            <p> <b>Passing Year : </b><span: contenteditable="true">${myendingyear}</span></p>
            <p> <b>Company : </b><span: contenteditable="true">${myCompany}</span></p>
            <p> <b>Job : </b><span: contenteditable="true">${myJob}</span></p>
            <p> <b>Reward : </b><span: contenteditable="true">${myReward1}</span></p>
            `;
            resumeOutput.innerHTML=resumeHTML            
        });
    }else{
            console.error("form of out put div not found in the DOM");
    }
        