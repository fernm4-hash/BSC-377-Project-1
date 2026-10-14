let contactForm = document.querySelector(".contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank You for the Message! :) (This is a demo and did not send an actual message)");
        contactForm.reset();

    }
);
}
