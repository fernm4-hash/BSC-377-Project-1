// Find contact form
let contactForm = document.querySelector(".contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //thank users for the message and tell them that this is a demo
        alert("Thank You for the Message! :) (This is a demo and did not send an actual message)");

        //resets the form 
        contactForm.reset();

    }
);
}
