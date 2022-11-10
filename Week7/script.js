//Dark mode script
function darkMode() {
    const darkMode = document.body;
    darkMode.classList.toggle("dark-mode");
}

const blog = document.getElementById("blog");
const name = document.getElementById("entry-name");
const author = document.getElementById("author-name");
const entry = document.getElementById("blog-name");
const form = document.getElementById("submit");

form.addEventListener("submit", function(e){
    e.preventDefault();
})

function validateForm(){
    let x = document.forms["submission-form"]["entry-name"].value;
    if (x == " ") {
        alert("please give you entry a title");
        return false;
    }

    let y = document.forms["submission-form"]["author-name"].value;
    if (y == " ") {
        alert("please enter your name");
        return false;
    }

    let z = document.forms["submission-form"]["blog-name"].value;
    if (z == " ") {
        alert("please enter your blog entry");
        return false;
    }
}

function submitForm(){
    let inputEntry = document.getElementById("entry-name").value;
    document.getElementById("new-title").innerHTML = inputEntry;
    document.getElementById("new-title").style.fontSize= "30px";
    document.getElementById("new-title").style.fontFamily= "Cambria, Georgia, Times, serif";

    let inputAuthor = document.getElementById("author-name").value;
    document.getElementById("new-author").innerHTML = inputAuthor;
    document.getElementById("new-author").style.fontSize= "15px";
    document.getElementById("new-author").style.fontWeight= "bold";

    let inputBlog = document.getElementById("blog-content").value;
    document.getElementById("new-content").innerHTML = inputBlog;
}
