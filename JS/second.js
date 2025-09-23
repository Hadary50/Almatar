const distnationInput = document.getElementById("distnationInput");
const distnationList = document.querySelector(".distnation-list-group");
const distnationItem=document.querySelectorAll('.distnatin-item')
// للاظهار
  distnationInput.addEventListener("focus", () => {
    distnationList.style.display = "flex";
  });
// content
distnationItem.forEach((item)=>{
item.addEventListener("click",()=>{
    distnationInput.value=item.textContent.trim()
    distnationList.style.display="none"
})
})
// الاخفاء
document.addEventListener('click',(e)=>{
if(!distnationInput.contains(e.target)&& !distnationList.contains(e.target)){
    distnationList.style.display="none"

}
})
// ////////// طيران دروب داون ذهاب وعودة /////////////
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
// updateTotal();
// ليست الذهاب والعودة ف الطيران
const goBackLeaveInput=document.getElementById('goBackLeaveInput')
const flightList =document.getElementById('flightList')
const flighItem=document.querySelectorAll('.fligh-item')
goBackLeaveInput.addEventListener('click',()=>{
  flightList.style.display='block'
})
flighItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    goBackLeaveInput.value=item.textContent.trim()
    flightList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!goBackLeaveInput.contains(e.target)&& !flightList.contains(e.target)){

    flightList.style.display='none'
}
})
// /////////////////////////
const goBackarriveInput=document.getElementById('goBackarriveInput')
const arriveFlightList=document.getElementById('arriveFlightList')
const arriveFlightItem=document.querySelectorAll('.arrive-fligh-item')
goBackarriveInput.addEventListener('click',()=>{
  arriveFlightList.style.display='block'
})
arriveFlightItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    goBackarriveInput.value=item.textContent.trim()
    arriveFlightList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!goBackarriveInput.contains(e.target)&& !arriveFlightList.contains(e.target)){

    arriveFlightList.style.display='none'
}
})
const goOnlyInput=document.getElementById('goOnlyInput')
const goOnlyFLightList=document.getElementById('goOnlyFLightList')
const goOnlyFlightItem=document.querySelectorAll('.go-only-fligh-item')
goOnlyInput.addEventListener('click',()=>{
  goOnlyFLightList.style.display='block'
})
goOnlyFlightItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    goOnlyInput.value=item.textContent.trim()
    goOnlyFLightList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!goOnlyInput.contains(e.target)&& !goOnlyFLightList.contains(e.target)){

    goOnlyFLightList.style.display='none'
}
})

const goOnlyArriveFlightInput=document.getElementById('goOnlyArriveFlightInput')
const goOnlyArriveFlightList=document.getElementById('goOnlyArriveFlightList')
const goOnlyArriveFlightItem=document.querySelectorAll('.go-only-arrive-fligh-item')
goOnlyArriveFlightInput.addEventListener('click',()=>{
  goOnlyArriveFlightList.style.display='block'
})
goOnlyArriveFlightItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    goOnlyArriveFlightInput.value=item.textContent.trim()
    goOnlyArriveFlightList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!goOnlyArriveFlightInput.contains(e.target)&& !goOnlyArriveFlightList.contains(e.target)){

    goOnlyArriveFlightList.style.display='none'
}
})

const leaveMultibleCitiesInput=document.getElementById('leaveMultibleCitiesInput')
const leaveMultibleCitiesList=document.getElementById('leaveMultibleCitiesList')
const leaveMultibleCitiesItem=document.querySelectorAll('.leaveMultibleCitiesItem')
leaveMultibleCitiesInput.addEventListener('click',()=>{
  leaveMultibleCitiesList.style.display='block'
})
leaveMultibleCitiesItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    leaveMultibleCitiesInput.value=item.textContent.trim()
    leaveMultibleCitiesList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!leaveMultibleCitiesInput.contains(e.target)&& !leaveMultibleCitiesList.contains(e.target)){

    leaveMultibleCitiesList.style.display='none'
}
})
const arrivesMultibleCitiesInput=document.getElementById('arrivesMultibleCitiesInput')
const arrivesssMultibleCitiesList=document.getElementById('arrivesssMultibleCitiesList')
const arriveMultibleCitiesItem=document.querySelectorAll('.arriveMultibleCitiesItem')
arrivesMultibleCitiesInput.addEventListener('click',()=>{
  arrivesssMultibleCitiesList.style.display='block'
})
arriveMultibleCitiesItem.forEach((item)=>{
  item.addEventListener('click',()=>{
    arrivesMultibleCitiesInput.value=item.textContent.trim()
    arrivesssMultibleCitiesList.style.display='none'
  })
})
document.addEventListener('click',(e)=>{
if(!arrivesMultibleCitiesInput.contains(e.target)&& !arrivesssMultibleCitiesList.contains(e.target)){

    arrivesssMultibleCitiesList.style.display='none'
}
})
