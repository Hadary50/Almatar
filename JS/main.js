const input = document.getElementById("ekamaInput");
const list = document.getElementById("ekamaList");
const items = list.querySelectorAll(".list-group-item");

const airportInput = document.getElementById("airportInput");
const travelList = document.getElementById("travelList");
const airportItems = travelList.querySelectorAll(".listtgroub");

const backInput = document.getElementById("backInput");
const backList = document.getElementById("backList");
const listgroupBack = backList.querySelectorAll(".listgroupBack");

input.addEventListener("focus", () => {
  list.style.display = "block";
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    input.value = item.textContent.trim();
    list.style.display = "none";
  });
});
document.addEventListener("click", (e) => {
  if (!input.contains(e.target) && !list.contains(e.target)) {
    list.style.display = "none";
  }
});

airportInput.addEventListener("focus", () => {
  travelList.style.display = "block";
});
airportItems.forEach((item) => {
  item.addEventListener("click", () => {
    airportInput.value = item.querySelector("p").textContent.trim();
    travelList.style.display = "none";
  });
});
document.addEventListener("click", (e) => {
  if (!airportInput.contains(e.target) && !travelList.contains(e.target)) {
    travelList.style.display = "none";
  }
});

backInput.addEventListener("focus", () => {
  backList.style.display = "block";
});
listgroupBack.forEach((item) => {
  item.addEventListener("click", () => {
    backInput.value = item.querySelector("p").textContent.trim();
    backList.style.display = "none";
  });
});
document.addEventListener("click", (e) => {
  if (!backInput.contains(e.target) && !backList.contains(e.target)) {
    backList.style.display = "none";
  }
});

const dropdownMenus = document.querySelectorAll(".dropdownpassengers");
dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

const passengerNum = document.getElementById("passengerNum");

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".count").forEach((span) => {
    total += Number(span.textContent);
  });
  passengerNum.textContent = total;
}

document.querySelectorAll(".plusBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let countSpan = btn.parentElement.querySelector(".count");
    countSpan.textContent = Number(countSpan.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll(".mincebtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let countSpan = btn.parentElement.querySelector(".count");
    let current = Number(countSpan.textContent);
    if (current > 0) {
      countSpan.textContent = current - 1;
      updateTotal();
    }
  });
});

updateTotal();
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const itemss = dropdownMenu.querySelectorAll(".dropdown-item");

itemss.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    dropdownBtn.textContent = this.textContent;

    itemss.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");

    const li = this.parentElement;
    dropdownMenu.prepend(li); // خليه يطلع فوق
  });
});
let onewayInput = document.getElementById("onewayInput");
let onewaytravelList = document.getElementById("onewaytravelList");
let onewayItems = onewaytravelList.querySelectorAll(".onewayItems");

onewayInput.addEventListener("focus", () => {
  onewaytravelList.style.display = "block";
});
onewayItems.forEach((item) => {
  item.addEventListener("click", () => {
    onewayInput.value = item.textContent.trim();
    onewaytravelList.style.display = "none";
  });
});
document.addEventListener("click", (e) => {
  if (!onewayInput.contains(e.target) && !onewaytravelList.contains(e.target)) {
    onewaytravelList.style.display = "none";
  }
});
let onewayarriveinput = document.getElementById("onewayarriveinput");
let onewayarriveList = document.getElementById("onewayarriveList");
let onewayarriveListItems =
  onewayarriveList.querySelectorAll(".onewayarriveitems");

onewayarriveinput.addEventListener("focus", () => {
  onewayarriveList.style.display = "block";
});
onewayarriveListItems.forEach((item) => {
  item.addEventListener("click", () => {
    onewayarriveinput.value = item.textContent.trim();
    onewayarriveList.style.display = "none";
  });
});
document.addEventListener("click", (e) => {
  if (
    !onewayarriveinput.contains(e.target) &&
    !onewayarriveList.contains(e.target)
  ) {
    onewayarriveList.style.display = "none";
  }
});
let leaveInputCities = document.getElementById("leaveInputCities");
let citiesArriveList = document.getElementById("citiesArriveList");

leaveInputCities.addEventListener("focus", () => {
  citiesArriveList.style.display = "block";
});

let citiesArriveItems = citiesArriveList.querySelectorAll(".list-group-item");

citiesArriveItems.forEach((item) => {
  item.addEventListener("click", () => {
    let cityText = item.querySelector("p")
      ? item.querySelector("p").textContent.trim()
      : item.textContent.trim();
    leaveInputCities.value = cityText;
    citiesArriveList.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!citiesArriveList.contains(e.target) && e.target !== leaveInputCities) {
    citiesArriveList.style.display = "none";
  }
});
let InputarriveCities = document.getElementById("InputarriveCities");
let citiesAleaveList = document.getElementById("citiesAleaveList");
let citiesLeaveItem = citiesAleaveList.querySelectorAll(".citiies-leave-items");

InputarriveCities.addEventListener("focus", () => {
  citiesAleaveList.style.display = "block";
});

citiesLeaveItem.forEach((item) => {
  item.addEventListener("click", () => {
    InputarriveCities.value = item.textContent.trim();
    citiesAleaveList.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== InputarriveCities && !citiesAleaveList.contains(e.target)) {
    citiesAleaveList.style.display = "none";
  }
});
let tripContainer = document.getElementById("tripContainer");
let addBtn = document.getElementById("addTrip");

let tripCount = 2;

addBtn.addEventListener("click", () => {
  tripCount++;

  let newTrip = document.createElement("div");
  newTrip.classList.add("trip", "border", "p-3", "mt-2", "rounded");

  newTrip.innerHTML = `
                  <span class="fw-medium">الرحلة ${tripCount}</span>

     <div class="tab-pane fade show" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                  tabindex="0">
                  <div class="  p-2 mt-2" >
                    <!-- الصف العلوي -->
                    <div class="go-back-cities  d-flex">
                              <div class="arrive-box-cities position-relative "> <span>موعد المغادرة</span>
                  <div> <input type="text" id="leaveInputCities" class="w-100 arr-date" placeholder=""> </div>
                   <div class="list-group mt-4  position-absolute" id="citiesArriveList"> 
                      <button type="button"
                        class="list-group-item citiies-arrive-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">الرياض , السعودية</p>
                          </div>
                        </div>
                      </button>
                      <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك خالد الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">جدة , السعودية</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك عبدالعزيز الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">الدمام , السعودية</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك فهد الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">دبي , الامارات</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item onewayarriveitems list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار دبي الدولي</p>
                          </div>
                        </div> <button type="button"
                          class="list-group-item onewayarriveitems list-group-item-action airport-list "
                          aria-current="true">
                          <div class="d-flex align-items-center">
                            <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                            <div class="ms-2 mt-2">
                              <p class=" text-dark">القاهرة , مصر</p>
                            </div>
                          </div>
                        </button> <button type="button"
                          class="list-group-item onewayarriveitems list-group-item-action airport-list "
                          aria-current="true">
                          <div class="d-flex align-items-center ms-4">
                            <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                            <div class="ms-2 mt-2">
                              <p class=" text-dark">مطار القاهرة الدولي</p>
                            </div>
                          </div>
                        </button>
                      </button>
                    </div>
                </div >
                <div class=" transferCities">
                <span ><i class="fa-solid fa-right-left"></i></span>
                </div>
                                    <div class="leave-box-cities "> <span>موعد المغادرة</span>
                  <div> <input type="text" id="InputarriveCities" class="w-100 arr-date" placeholder=""> </div>
                      <div class="list-group mt-4 position-absolute" id="citiesAleaveList"> <span class="fs-5 text-black ">أشهر الوجهات </span>
                      <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">الرياض , السعودية</p>
                          </div>
                        </div>
                      </button>
                      <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك خالد الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">جدة , السعودية</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك عبدالعزيز الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">الدمام , السعودية</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار الملك فهد الدولي</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center">
                          <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">دبي , الامارات</p>
                          </div>
                        </div>
                      </button> <button type="button"
                        class="list-group-item citiies-leave-items list-group-item-action airport-list "
                        aria-current="true">
                        <div class="d-flex align-items-center ms-4">
                          <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                          <div class="ms-2 mt-2">
                            <p class=" text-dark">مطار دبي الدولي</p>
                          </div>
                        </div> <button type="button"
                          class="list-group-item citiies-leave-items list-group-item-action airport-list "
                          aria-current="true">
                          <div class="d-flex align-items-center">
                            <div> <i class=" fa-solid fa-location-dot fs-4"></i> </div>
                            <div class="ms-2 mt-2">
                              <p class=" text-dark">القاهرة , مصر</p>
                            </div>
                          </div>
                        </button> <button type="button"
                          class="list-group-item citiies-leave-items list-group-item-action airport-list "
                          aria-current="true">
                          <div class="d-flex align-items-center ms-4">
                            <div> <i class=" fa-solid fa-plane fs-4"></i> </div>
                            <div class="ms-2 mt-2">
                              <p class=" text-dark">مطار القاهرة الدولي</p>
                            </div>
                          </div>
                        </button>
                      </button>
                    </div>
                </div>
                    </div>
<!-- الصف السفلي  -->
<div class="arrival-box w-100"> <span>موعد الوصول</span>
                  <div> <input type="text" id="myDate" class="w-100 arr-date" placeholder="2 sep, 2025"> </div>
                </div>
                  </div>
                </div>
  `;

  tripContainer.appendChild(newTrip);
  if (tripCount == 6) {
    addBtn.style.display = "none";
  }

  initTripEvents(newTrip);
});

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