window.addEventListener("load", function () {
        function sendData() {
                const sendRequest = new XMLHttpRequest();

                const signupInfo = new URLSearchParams(new FormData(form));

                sendRequest.addEventListener("load", function(event){
                    alert("Your account was created!");
                });
                sendRequest.addEventListener("error", function(event){
                    alert("Submission unsuccesful! Please try again.");
                });

                sendRequest.open("POST", "https://localhost:5000/app/new/user");

                sendRequest.send(signupInfo);
        }
        const form = document.getElementById("signup");

        form.addEventListener("submit", function(event){
                event.preventDefault();
                sendData();
        });
});