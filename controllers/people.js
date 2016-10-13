// Haven't looked at real models yet so for now we'll use this array
var people = [{
    "firstname": "Jeff",
    "surname": "Stelling"
}, {
    "firstname": "Chris",
    "surname": "Kamara"
}, {
    "firstname": "Alex",
    "surname": "Hammond"
}, {
    "firstname": "Jim",
    "surname": "White"
}, {
    "firstname": "Natalie",
    "surname": "Sawyer"
}];



// INDEX - GET /
function indexPeople(req, res) {

    res.render("people/index", {
        title: "People",
        people: people
    });

}

// SHOW - GET /:id
function showPeople(req, res) {

    res.render("people/index", {
        title: "people",
        people: people
    });

}

// EDIT - GET /:id/edit
function editPeople(req, res) {
    console.log(req.body.firstname);

    people = req.body.firstname;
    peopleObj = [{
        firstname: req.body.firstname[0],
        surname: req.body.firstname[1]
    }, {
        firstname: req.body.firstname[2],
        surname: req.body.firstname[3]
    }, {
        firstname: req.body.firstname[4],
        surname: req.body.firstname[5]
    }, {
        firstname: req.body.firstname[6],
        surname: req.body.firstname[7]
    }, {
        firstname: req.body.firstname[8],
        surname: req.body.firstname[9]
    }]
    res.render("people/index", {
        title: "People",
        people: peopleObj
    });
    // res.render("people/index", {
    //     title: "Edited Person",
    //     people: people,

    // });


}

// NEW - GET /new
function newPeople(req, res) {

    res.render("Peoples/index", {
        title: "New People",
        people: people
    });

}

// DELETE - DELETE /:id
function deletePeople(req, res) {

    res.send("DELETE");

}

// UPDATE - UPDATE /:id
function updatePeople(req, res) {

    res.send("UPDATE");

}

// CREATE - People /
function createPeople(req, res) {

    res.send("CREATE");

}



// export all our controller functions in an object
module.exports = {

    index: indexPeople,
    show: showPeople,
    edit: editPeople,
    new: newPeople,
    delete: deletePeople,
    update: updatePeople,
    create: createPeople

}