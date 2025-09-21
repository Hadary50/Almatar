


function scrollCards(direction) {
  const container = document.getElementById("cardsContainer");
  const scrollAmount = 250;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
let loginBtn = document.querySelector(".login");
let overlaySec = document.querySelector(".login-overlay");
let exitBtn = document.getElementById("exitBtn");

loginBtn.addEventListener("click", () => {
  console.log('hello');
  
  overlaySec.classList.remove("d-none");
  overlaySec.classList.add("d-flex");
});

exitBtn.addEventListener("click", () => {
  overlaySec.classList.remove("d-flex");
  overlaySec.classList.add("d-none");
});
 function scrollCards(direction) {
    const container = document.getElementById('cardsContainer');
    const scrollAmount = 260; 
    
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
    const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownItems = document.querySelectorAll("#dropdownMenu .dropdown-item");

  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); 
      dropdownBtn.textContent = item.textContent; 

      dropdownItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  })