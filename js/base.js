// Cards
function fetchPosts(filter) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');

    if (filter) {
        issuesList.innerHTML = '';
        for (var i = 0; i < issues.length; i++) {
            if (issues[i].date === filter) {
                var id = issues[i].id;
                var title = issues[i].title;
                var date = issues[i].date;
                var desc = issues[i].description;
                var assignedTo = issues[i].assignedTo;

                issuesList.innerHTML += '<div class="well">' +
                    '<h4>' + title + '</h4>' +
                    '<h6>' + desc + '</h6>' +
                    '<p><span class="glyphicon glyphicon-time"></span> ' + date + ' ' +
                    '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
                    '<div class="col-md-12 text-right"><div class="btn-group"><a href="#" class="btn btn-link" onclick="seeMore(\'' + id + '\')">Know More...</a>' +
                    '<a href="#" class="btn btn-danger text-right mr-2" onclick="deleteIssue(\'' + id + '\')"><span class="glyphicon glyphicon-trash"></span></a></div>' +
                    '</div>';
            }
        }
    } else {
        issuesList.innerHTML = '';
        for (var i = 0; i < issues.length; i++) {
            var id = issues[i].id;
            var title = issues[i].title;
            var date = issues[i].date;
            var desc = issues[i].description;
            var assignedTo = issues[i].assignedTo;

            issuesList.innerHTML += '<div class="well">' +
                '<h4>' + title + '</h4>' +
                '<h6>' + desc + '</h6>' +
                '<p><span class="glyphicon glyphicon-time"></span> ' + date + ' ' +
                '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
                '<div class="col-md-12 text-right"><div class="btn-group"><a href="#" class="btn btn-link" onclick="seeMore(\'' + id + '\')">Know More...</a>' +
                '<a href="#" class="btn btn-danger text-right mr-2" onclick="deleteIssue(\'' + id + '\')"><span class="glyphicon glyphicon-trash"></span></a></div>' +
                '</div>';
        }
    }
}

document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

// Save
function saveIssue(e) {
    var issueId = chance.guid();
    var issueTitle = document.getElementById('issueTitleInput').value;
    var issueDate = document.getElementById('issueDateInput').value;
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueStatus = 'Open';
    var issue = {
        id: issueId,
        title: issueTitle,
        date: issueDate,
        description: issueDesc,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if (localStorage.getItem('issues') === null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchPosts();

    e.preventDefault();
}

function seeMore(id) {
    alert(id)
}

// Search
document.getElementById('searchInputForm').addEventListener('submit', filterIssue);
function filterIssue(e) {
    var searchDateInput = document.getElementById('searchDateInput').value;

    if (searchDateInput !== null || searchDateInput !== '') {
        fetchPosts(searchDateInput)
    }
    document.getElementById('searchInputForm').reset();
    e.preventDefault();

}

// Delete
function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues.splice(i, 1);
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues));
    fetchPosts();
}

/* // Date
function date() {
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes + 1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;

    document.getElementById('dateTxt').innerHTML = 'Hoje é ' + str_data;
    document.getElementById('timeTxt').innerHTML = ' às ' + str_hora;
    setTimeout('date()', 500);
} */
