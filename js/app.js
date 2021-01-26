
  
   function AddElement() {
        var date1 = new Date();
        var date2 = new Date();
        var date1 = $("#dateInput1").datepicker("getDate");
        var date2 = $("#dateInput2").datepicker("getDate");
    }

    function submitForm() {
        var name= document.forms[0].elements[0].value;
        var data1= new Date(document.forms[0].elements[2].value);
        var data2= new Date(document.forms[0].elements[3].value);
        var resultado = document.forms[0].elements[0].value
        console.log(name + data2  )
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
    console.log(issue)

    if (issue === null|| issue === 'undefined') {
        var issues = [];
        alert('Please, Fill in all fields')
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchPosts();

    e.preventDefault();
}

