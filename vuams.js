document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".book-now");
  
    bookButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        const placeName = card.dataset.place;
        const placeDescription = card.dataset.description;
  
        openBookingPage(placeName, placeDescription);
      });
    });
  });
  
  function openBookingPage(placeName, placeDescription) {
    const bookingPage = document.createElement("div");
    bookingPage.classList.add("booking-page");
    bookingPage.innerHTML = `
          <h2>Book Your Stay at ${placeName}</h2>
          <p>${placeDescription}</p>
          <form class="booking-form">
              <label for="visitors">Number of Visitors:</label>
              <input type="number" id="visitors" name="visitors" min="1" required>
              <label for="days">Number of Stay Days:</label>
              <input type="number" id="days" name="days" min="1" required>
              <label for="meals">Full Board Meals:</label>
              <select id="meals" name="meals" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
              <label for="additional">Additional Requests:</label>
              <textarea id="additional" name="additional"></textarea>
              <button type="submit" class="btn">Confirm Booking</button>
          </form>
          <button class="btn back-btn">Back</button>
      `;
  
    document.body.innerHTML = "";
    document.body.appendChild(bookingPage);
  
    document.querySelector(".back-btn").addEventListener("click", () => {
      location.reload(); // Reload the page to go back to the main list
    });
  }