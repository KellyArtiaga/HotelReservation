  
window.onload = function() {
    this.AddUserType();
  };
  
  function AddUserType(){        
    var selectBox = document.getElementById('userType');
        const clientType =
        [{'name':'rewards'},{'name':'regular'}];
        for(var i = 0, l = clientType.length; i < l; i++){
        selectBox.options.add(new Option(clientType.value));
        }
   }
   function AddElement() {
        var date1 = new Date();
        var date2 = new Date();
        var today =  new DateTime('now');
        var date1 = $("#dateInput1").datepicker("getDate");
        var date2 = $("#dateInput2").datepicker("getDate");
        alert(this.today);
    }

    function submitForm() {
        var name= document.forms[0].elements[0].value;
        var data1= new Date(document.forms[0].elements[2].value);
        var data2= new Date(document.forms[0].elements[3].value);
        var resultado = document.forms[0].elements[0].value
        console.log(name + data2  )
    };
    function getDate(value){
        if(value !=""){
            document.querySelector("#dateInput2").removeAttribute("disabled");
            console.log(value);
        }else{
            document.querySelector("#dateInput2").val('');
        }
    }

    // Save
    function saveIssue(e) {
        var nameValue = document.getElementById('firstName').value;
        var issueDate = document.getElementById('dateInput1').value;
        var issueDesc = document.getElementById('dateInput2').value;
        var userTypeValue = document.getElementById('userType').value;
        var issue = {
            name: nameValue,
            date1: issueDate,
            date2: issueDesc,
            type: userTypeValue
        }

        if((issue.name === '')||(issue.date1 === '')||(issue.date2 === '')){
            var issues = [];
            alert('Please, Fill in all fields')
        } else {
            var issues = JSON.parse(localStorage.getItem('issues'));
            issues.push(issue);
            localStorage.setItem('issues', JSON.stringify(issues));
            console.log(issues)
        }

        //document.getElementById('issueInputForm').reset();
        //fetchPosts();
       // e.preventDefault();
    }

