var friends = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });





    app.post("/api/friends", function (req, res) {

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });

    // $("#submit").on("click", function (event) {
    //     event.preventDefault();

    //     var newFriend = {
    //         name: $("#name").val().trim(),
    //         photo: $("#photo").val().trim(),
    //         scores: [
    //             $("#question1").val(),
    //             $("#question2").val(),
    //             $("#question3").val(),
    //             $("#question4").val(),
    //             $("#question5").val(),
    //             $("#question6").val(),
    //             $("#question7").val(),
    //             $("#question8").val(),
    //             $("#question9").val(),
    //             $("#question10").val()
    //         ]
    //     };
    // })
}