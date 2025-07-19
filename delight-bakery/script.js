// Handle contact form
document.querySelector('#contact form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for contacting Delight Bakery! We'll get back to you soon.");
  this.reset();
});

// Handle online booking form
document.querySelector('#booking form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const phone = this.querySelector('input[type="tel"]').value;
  const date = this.querySelector('input[type="date"]').value;
  const time = this.querySelector('input[type="time"]').value;
  const message = this.querySelector('textarea').value;

  // For now, show a confirmation
  alert(
    `Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`
  );

  this.reset();
});
