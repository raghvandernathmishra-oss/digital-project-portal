document.addEventListener("keydown", function(event) {

    if(event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "m") {

        let password = prompt("Enter Master Password");

        if(password === "Suryansh_17") {
            window.location.href = "master-panel.html";
        } else {
            alert("Wrong Password");
        }

    }

});