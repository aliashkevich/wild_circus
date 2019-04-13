function switchTab(event) {
  // make current tab inactive
  let currentActiveTab = document.getElementsByClassName("active-tab")[0];
  currentActiveTab.classList.remove("active-tab");
  
  // make new tab active
  if (event.target.id) {
     event.target.classList.add("active-tab");
  } else {
     event.target.parentElement.classList.add("active-tab");
  }
  
  // make current page inactive
  let tabId = currentActiveTab.id;
  let activePageId = tabId.replace("-tab", "-page");
  let currentActivePage = document.getElementById(activePageId);
  currentActivePage.classList.remove("active-page");  
  currentActivePage.classList.add("hidden-page");
  
  // make new page active
  let newActivePageId = "";
  let newTab = event.target;
  
  if (newTab.id) {
    newActivePageId = newTab.id.replace("-tab", "-page");
  } else {
    newActivePageId = newTab.parentElement.id.replace("-tab", "-page");
  }
  
  let newActivePage = document.getElementById(newActivePageId);
  
  newActivePage.classList.remove("hidden-page");
  newActivePage.classList.add("active-page");
  
  //clear Contact form
  document.getElementById("contact-form").reset();
}



// check form validity and collect feedback
function submitUserMessage(event) {
  if (event) {
    event.preventDefault();
  }  
  if (email.checkValidity() || message.checkValidity()) {
    let feedback = {
      name: uname.value,
      email: email.value,
      message: message.value      
    };    
    window.alert("Thank you for your message!\n" + JSON.stringify(feedback));
    document.getElementById("contact-form").reset();
  }
}

