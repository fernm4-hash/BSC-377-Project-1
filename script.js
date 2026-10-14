let contactForm = document.querySelector(".contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank You for the Message! :)");
        contactForm.reset();

    }
);
}
