alert("Welcome!!!!!!");
var likeCount = 0;
var commentCount = 0;
var retweetCount = 0;

function countLikes() {
    likeCount = likeCount + 1;
    document.getElementById("like_count").value = likeCount;
}

function countComments() {
    alert("Your comment is received!")
    commentCount = commentCount + 1;
    document.getElementById("comment_count").value = commentCount;
}

function countRetweets() {
    alert("Hurry! You retweeted")
    retweetCount = retweetCount + 1;
    document.getElementById("retweet_count").value = retweetCount;
}

function changeColor() {
    alert("Hurry! You liked it");
    var icon = document.getElementById('like');
    icon.style.color = "red";
}