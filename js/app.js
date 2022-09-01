

//
// Alert box
//

const alertMessage = document.querySelector('.alert-message');

const alertMessageText = "<strong>Alert:</strong> You have unread messages";
alertMessage.innerHTML = alertMessageText;

// Removes the alert box when the user click on the x button.
document.addEventListener('click', (e) => {
    const click = e.target;
    const element = click.parentNode;
    if (click.className == 'close-button') {
        element.style.display = 'none';
    }
});


//
// NEW MEMBERS
//

// Get todays date and store in a variable caller todaysDate.
function getTodaysDate() {
    let fullDate =  new Date();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();
    let day = fullDate.getDate();
    let todaysDate = `${day}/${month}/${year}`;
    
    return todaysDate;
}

// Creates a profile photo with a ClassName, src and alttext
function createPhoto(elementType, imgClass, sourceLink, altName) {
    const element = document.createElement(elementType);
    element.className = imgClass;
    element.setAttribute('src', sourceLink);
    element.setAttribute('alt', `Profile image of ${altName}`);
    return element;
}

// Creates a new element with a className
function createElement(elementType, elementClass) {
    const element = document.createElement(elementType);
    element.className = elementClass;
    return element;
}

const memberInfo = [
    ['images/member-1.jpg', 'Victoria Chambers', 'victoria.chambers80@example.com'],
    ['images/member-2.jpg', 'Dale Byrd', 'dale.byrd52@example.com'],
    ['images/member-3.jpg', 'Dawn Wood', 'dawn.wood16@example.com'],
    ['images/member-4.jpg', 'Dan Oliver', 'dan.oliver82@example.com']
];

const memberActivity = [
    ["commented on <strong>WebApp's SEO Tips</strong>", "4 hours ago"],
    ["liked the post <strong>Facebook's Changes for 2021</strong>", "5 hours ago"],
    ["commented on <strong>Facebook's Changes for 2021</strong>", "5 hours ago"],
    ["posten <strong>WebApp's SEO Tips</strong>", "1 day ago"]
];

// Creates a list of LI elements for the new members section. 
function createNewMembersLi() {
    const membersWidget = document.querySelector('.new-members-widget');
    const newUl = createElement('ul', 'member-ul');
    const date = getTodaysDate();
    
    for (let i = 0; i < memberInfo.length; i++) {
        let profileImage = memberInfo[i][0];
        let memberEmail = memberInfo[i][2];
        let memberName = memberInfo[i][1];

        const newLi = createElement('li', 'member-li');
        
        const imageDiv = createElement('div', 'member-image-div');
        const imageElement = createPhoto('img', 'member-image', profileImage, memberName);

        imageDiv.appendChild(imageElement);

        const infoDiv = createElement('div', 'member-info');
        const nameDiv = createElement('div', 'member-name');
        nameDiv.innerHTML = memberName;
        const emailDiv = createElement('a', 'member-email');
        emailDiv.setAttribute('href', '#');
        emailDiv.innerHTML = memberEmail;

        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(emailDiv);

        const dateDiv = createElement('div', 'member-date');
        dateDiv.innerHTML = date;


        newLi.appendChild(imageDiv);
        newLi.appendChild(infoDiv);
        newLi.appendChild(dateDiv);
        newUl.appendChild(newLi);
        membersWidget.appendChild(newUl);
    }

}

createNewMembersLi();
createRecentActivityLi();

//
// Recent Activity
//

// Creates a list of LI elements for the activity section. 
function createRecentActivityLi() {
    const membersWidget = document.querySelector('.recent-activity-widget');
    const newUl = createElement('ul', 'member-ul');
    
    for (let i = 0; i < memberActivity.length; i++) {
        let profileImage = memberInfo[i][0];
        let memberName = memberInfo[i][1];
        let comment = memberActivity[i][0];
        let time = memberActivity[i][1];

        const newLi = createElement('li', 'member-li');

        
        const imageDiv = createElement('div','member-image-div');
        const imageElement = createPhoto('img', 'member-image', profileImage, memberName);

        imageDiv.appendChild(imageElement);

        const activityContainer = createElement('div', 'recent-activity-container');
        const activityComment = createElement('div', 'activity-comment');
        const activityTime = createElement('div', 'activity-time');
        activityComment.innerHTML = `${memberName} ${comment}`;
        activityTime.innerHTML = `${time}`;

        activityContainer.appendChild(activityComment);
        activityContainer.appendChild(activityTime);

        const smallArrow = createElement('div', 'activity-arrow');
        smallArrow.innerHTML = '&#10095';

        newLi.appendChild(imageDiv);
        newLi.appendChild(activityContainer);
        newLi.appendChild(smallArrow);
        newUl.appendChild(newLi);
        membersWidget.appendChild(newUl);
    }

}


//
// Message form
//


const searchField = document.querySelector('.search-field');
const textField = document.querySelector('.text-field');
const messageBox = document.querySelector('.message-box');
const emptyFieldText = 'Please make sure all fields are filled in correctly';
const sent = 'Message sent!';

// An array with all fields. 
const fields = [
  searchField,
  textField
];


// Creates a div with an error message.
function createMessageElement(message, elementType, elementClass) {
  const element = createElement(elementType, elementClass);
  element.innerHTML = message;
  return element;
}

// Creates a message, appends the message and changes the backgound color of the inputfield.
function CreateAndAppendMessage(parenEle, siblingBefore, message, elementType, elementClass) {
  const element = createMessageElement(message, elementType, elementClass);
  parenEle.insertBefore(element, siblingBefore.nextSibling);
}

// Checks if any fields are empty and then checks if error div is already added appended to the site.
function checkInputField() {
  for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (field.value === ''){
          if (!field.nextElementSibling.classList.contains('errorMessage')) {
              field.style.backgroundColor = 'rgba(229, 115, 115, 0.3)';
          }
      } else if (field.nextElementSibling.classList.contains('errorMessage')) {
          field.style.backgroundColor = '#f5f5f5';
          field.nextElementSibling.remove();
       }
  }
}

// Used to remove the error message and the error background color. 
function clearAllFields() {
  for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (field.nextElementSibling.classList.contains('errorMessage')){
          field.style.backgroundColor = '#f5f5f5';
          field.nextElementSibling.remove();
      } else {
        field.style.backgroundColor = '#f5f5f5';
      }
  }
}

// Used to remove the sent message.
function clearConfirmSentMessage() {
  for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (field.nextElementSibling.classList.contains('message-sent')){
          field.nextElementSibling.remove();
      }
  }
}


// Check if all fields are filled in correctly and displays a message confirming that the message was sent. If any fields are empty, display an error message. 
document.addEventListener('click', (e) => {
    const submit = e.target;

    if (submit.id === 'submit-message') {
        if ( searchField.value === '' || textField.value === '' ) {
            clearAllFields();
            clearConfirmSentMessage();
            checkInputField();
            CreateAndAppendMessage(messageBox, textField, emptyFieldText, 'div', 'errorMessage');
        } else if ( searchField.value !== '' && textField.value !== '' ) {
            clearAllFields();
            clearConfirmSentMessage();
            CreateAndAppendMessage(messageBox, textField, sent, 'div', 'message-sent');
            searchField.value = '';
            textField.value = '';
        }

    }   
});


//
// Select timezone
//
const select = document.getElementById('timezone');

const timezones = [
    {
      "offset": "GMT-12:00",
      "name": "Etc/GMT-12"
    },
    {
      "offset": "GMT-11:00",
      "name": "Etc/GMT-11"
    },
    {
      "offset": "GMT-11:00",
      "name": "Pacific/Midway"
    },
    {
      "offset": "GMT-10:00",
      "name": "America/Adak"
    },
    {
      "offset": "GMT-09:00",
      "name": "America/Anchorage"
    },
    {
      "offset": "GMT-09:00",
      "name": "Pacific/Gambier"
    },
    {
      "offset": "GMT-08:00",
      "name": "America/Dawson_Creek"
    },
    {
      "offset": "GMT-08:00",
      "name": "America/Ensenada"
    },
    {
      "offset": "GMT-08:00",
      "name": "America/Los_Angeles"
    },
    {
      "offset": "GMT-07:00",
      "name": "America/Chihuahua"
    },
    {
      "offset": "GMT-07:00",
      "name": "America/Denver"
    },
    {
      "offset": "GMT-06:00",
      "name": "America/Belize"
    },
    {
      "offset": "GMT-06:00",
      "name": "America/Cancun"
    },
    {
      "offset": "GMT-06:00",
      "name": "America/Chicago"
    },
    {
      "offset": "GMT-06:00",
      "name": "Chile/EasterIsland"
    },
    {
      "offset": "GMT-05:00",
      "name": "America/Bogota"
    },
    {
      "offset": "GMT-05:00",
      "name": "America/Havana"
    },
    {
      "offset": "GMT-05:00",
      "name": "America/New_York"
    },
    {
      "offset": "GMT-04:30",
      "name": "America/Caracas"
    },
    {
      "offset": "GMT-04:00",
      "name": "America/Campo_Grande"
    },
    {
      "offset": "GMT-04:00",
      "name": "America/Glace_Bay"
    },
    {
      "offset": "GMT-04:00",
      "name": "America/Goose_Bay"
    },
    {
      "offset": "GMT-04:00",
      "name": "America/Santiago"
    },
    {
      "offset": "GMT-04:00",
      "name": "America/La_Paz"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Argentina/Buenos_Aires"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Montevideo"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Araguaina"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Godthab"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Miquelon"
    },
    {
      "offset": "GMT-03:00",
      "name": "America/Sao_Paulo"
    },
    {
      "offset": "GMT-03:30",
      "name": "America/St_Johns"
    },
    {
      "offset": "GMT-02:00",
      "name": "America/Noronha"
    },
    {
      "offset": "GMT-01:00",
      "name": "Atlantic/Cape_Verde"
    },
    {
      "offset": "GMT",
      "name": "Europe/Belfast"
    },
    {
      "offset": "GMT",
      "name": "Africa/Abidjan"
    },
    {
      "offset": "GMT",
      "name": "Europe/Dublin"
    },
    {
      "offset": "GMT",
      "name": "Europe/Lisbon"
    },
    {
      "offset": "GMT",
      "name": "Europe/London"
    },
    {
      "offset": "UTC",
      "name": "UTC"
    },
    {
      "offset": "GMT+01:00",
      "name": "Africa/Algiers"
    },
    {
      "offset": "GMT+01:00",
      "name": "Africa/Windhoek"
    },
    {
      "offset": "GMT+01:00",
      "name": "Atlantic/Azores"
    },
    {
      "offset": "GMT+01:00",
      "name": "Atlantic/Stanley"
    },
    {
      "offset": "GMT+01:00",
      "name": "Europe/Amsterdam"
    },
    {
      "offset": "GMT+01:00",
      "name": "Europe/Belgrade"
    },
    {
      "offset": "GMT+01:00",
      "name": "Europe/Brussels"
    },
    {
      "offset": "GMT+02:00",
      "name": "Africa/Cairo"
    },
    {
      "offset": "GMT+02:00",
      "name": "Africa/Blantyre"
    },
    {
      "offset": "GMT+02:00",
      "name": "Asia/Beirut"
    },
    {
      "offset": "GMT+02:00",
      "name": "Asia/Damascus"
    },
    {
      "offset": "GMT+02:00",
      "name": "Asia/Gaza"
    },
    {
      "offset": "GMT+02:00",
      "name": "Asia/Jerusalem"
    },
    {
      "offset": "GMT+03:00",
      "name": "Africa/Addis_Ababa"
    },
    {
      "offset": "GMT+03:00",
      "name": "Asia/Riyadh89"
    },
    {
      "offset": "GMT+03:00",
      "name": "Europe/Minsk"
    },
    {
      "offset": "GMT+03:30",
      "name": "Asia/Tehran"
    },
    {
      "offset": "GMT+04:00",
      "name": "Asia/Dubai"
    },
    {
      "offset": "GMT+04:00",
      "name": "Asia/Yerevan"
    },
    {
      "offset": "GMT+04:00",
      "name": "Europe/Moscow"
    },
    {
      "offset": "GMT+04:30",
      "name": "Asia/Kabul"
    },
    {
      "offset": "GMT+05:00",
      "name": "Asia/Tashkent"
    },
    {
      "offset": "GMT+05:30",
      "name": "Asia/Kolkata"
    },
    {
      "offset": "GMT+05:45",
      "name": "Asia/Katmandu"
    },
    {
      "offset": "GMT+06:00",
      "name": "Asia/Dhaka"
    },
    {
      "offset": "GMT+06:00",
      "name": "Asia/Yekaterinburg"
    },
    {
      "offset": "GMT+06:30",
      "name": "Asia/Rangoon"
    },
    {
      "offset": "GMT+07:00",
      "name": "Asia/Bangkok"
    },
    {
      "offset": "GMT+07:00",
      "name": "Asia/Novosibirsk"
    },
    {
      "offset": "GMT+08:00",
      "name": "Etc/GMT+8"
    },
    {
      "offset": "GMT+08:00",
      "name": "Asia/Hong_Kong"
    },
    {
      "offset": "GMT+08:00",
      "name": "Asia/Krasnoyarsk"
    },
    {
      "offset": "GMT+08:00",
      "name": "Australia/Perth"
    },
    {
      "offset": "GMT+08:45",
      "name": "Australia/Eucla"
    },
    {
      "offset": "GMT+09:00",
      "name": "Asia/Irkutsk"
    },
    {
      "offset": "GMT+09:00",
      "name": "Asia/Seoul"
    },
    {
      "offset": "GMT+09:00",
      "name": "Asia/Tokyo"
    },
    {
      "offset": "GMT+09:30",
      "name": "Australia/Adelaide"
    },
    {
      "offset": "GMT+09:30",
      "name": "Australia/Darwin"
    },
    {
      "offset": "GMT+09:30",
      "name": "Pacific/Marquesas"
    },
    {
      "offset": "GMT+10:00",
      "name": "Etc/GMT+10"
    },
    {
      "offset": "GMT+10:00",
      "name": "Australia/Brisbane"
    },
    {
      "offset": "GMT+10:00",
      "name": "Australia/Hobart"
    },
    {
      "offset": "GMT+10:00",
      "name": "Asia/Yakutsk"
    },
    {
      "offset": "GMT+10:30",
      "name": "Australia/Lord_Howe"
    },
    {
      "offset": "GMT+11:00",
      "name": "Asia/Vladivostok"
    },
    {
      "offset": "GMT+11:30",
      "name": "Pacific/Norfolk"
    },
    {
      "offset": "GMT+12:00",
      "name": "Etc/GMT+12"
    },
    {
      "offset": "GMT+12:00",
      "name": "Asia/Anadyr"
    },
    {
      "offset": "GMT+12:00",
      "name": "Asia/Magadan"
    },
    {
      "offset": "GMT+12:00",
      "name": "Pacific/Auckland"
    },
    {
      "offset": "GMT+12:45",
      "name": "Pacific/Chatham"
    },
    {
      "offset": "GMT+13:00",
      "name": "Pacific/Tongatapu"
    },
    {
      "offset": "GMT+14:00",
      "name": "Pacific/Kiritimati"
    }
  ];

  // Creates a option list with timezones. 
function createOptLi( type, value, txt) {
    const element = document.createElement(type);
    element.value = value;
    element.innerHTML = txt;
    return element;
}

for (let i = 0; i < timezones.length; i++) {
    const zoneName = timezones[i].name;   
    const zoneOffset = timezones[i].offset;
    const timezone = `${zoneName}, ${zoneOffset}`;
    const opt = createOptLi( 'option', zoneName, timezone);
    select.appendChild(opt);
}

//
// Notification dropdown
//

// Array with the notifaction texts. 
const notifications = [
    ['You have an unread message from <strong>Dale Byrd</strong>', '#'],
    ['Three users liked your latest post', '#'],
    ['<strong>Dale Byrd</strong> replied to your comment', '#']
];

const dropdown = document.getElementById("myDropdown");
const notficationlist = dropdown.children;

// Creates a list of notifications and appends the notifications to the site
function createDropdownNotifications() {
    for( let i = 0; i < notifications.length; i++) {
        const notif = notifications[i][0];
        const link = notifications[i][1];

        const a = document.createElement('a');
        a.href = link;
        a.innerHTML = notif;
        
        dropdown.appendChild(a);
    }
}

// Removes old notifications
function removeNotifications() {
    while (notficationlist.length >= 1 ) {
        dropdown.lastChild.remove();
    }
}

// When user clicks notification bell
    // Remove old notifications
    // Get new notifications and append
    // Open the notification box
function toggleDropDown() {
    removeNotifications();
    createDropdownNotifications();
    dropdown.classList.toggle("show");
}

// Removes the notification box when the user clicks anywhere on the page
window.onclick = (e) => {
    if (e.target.tagName !== 'svg')
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }   
};



//
// Search autocomplete 
//


const searchDropdown = document.getElementById("searchDropdown");
const autofillList = dropdown.children;

// Creates a dropdown with li elements containing the names matching the users input.
function filterSearch() {
  removeSearchListItems();
  let input = document.querySelector('.search-field');
  input = input.value.toLowerCase();
  for (let i = 0; i < memberInfo.length; i++) {
    let name = memberInfo[i][1];
    if (input) {
      if ( name.substr(0, input.length).toLowerCase() == input.toLowerCase() ) {
        const a = document.createElement('a');
        a.classList.add('searchList');
        a.innerHTML = name;
        
        searchDropdown.appendChild(a);
      }
    }
    }
  }


  // Removes items from dropdown list
function removeSearchListItems() {
  while (searchDropdown.children.length > 0 ) {
    searchDropdown.lastChild.remove();
  }
}

// Autofills the searchinput when the user clicks on a item in the list. 
document.addEventListener('click', (e)=> {
  if (e.target.classList.contains('searchList')) {
    searchField.value = e.target.innerHTML;
    removeSearchListItems();
  }
});

// Removes the searchlist if the user clicks on the page. 
document.addEventListener('click', (e)=> {
  if (!e.target.classList.contains('searchList') ) {
      if ( !e.target.classList.contains('search-field') ) {
        removeSearchListItems();
      } 
  }
});


//
// Local storage
//

const emailNotificationsSwitch = document.getElementById('email-notifications');
const publicProfileSwitch = document.getElementById('public-profile');
const timezoneSelect = document.getElementById('timezone');
let SelectedTimeZonePlacement;


const switches = [
  emailNotificationsSwitch,
  publicProfileSwitch,
  timezoneSelect
];

// Updates the values stored in local storage
function updateLocalStorageSelect( name, valueToSave) {
  localStorage.removeItem(name);
  localStorage.setItem(name, valueToSave);
}

// Updates local storage for checboxes
function updateLocalStorageCheckbox(tar) {
const checkboxName = tar.name;
const checkedStatus = tar.checked;
localStorage.removeItem(checkboxName);
localStorage.setItem(checkboxName, checkedStatus);
}

// Clears the values in local storage
function removeLocalStorageCheckbox(tar) {
  const checkboxName = tar.name;
  localStorage.removeItem(checkboxName);
  }

function removeSavedMessage() {
if ( settingsBox.lastElementChild.className === ('message-sent') ){
  settingBoxButtons.nextElementSibling.remove();
} else {
  return false;
}
}

const settingsBox = document.querySelector('.settings-box');
const settingBoxButtons = document.querySelector('.settings-buttons');


// Saves information to local storage when user clicks 'save' and removes information from local storage when user clicks on the 'cancel' button.
document.addEventListener('click', (e) => {
  const click = e.target;
  if (click.id === 'save-settings') {
    updateLocalStorageCheckbox(emailNotificationsSwitch);
    updateLocalStorageCheckbox(publicProfileSwitch);
    const timzoneSelected = timezoneSelect.value;
    updateLocalStorageSelect( 'SelectedTimeZone', timzoneSelected );
    removeSavedMessage();
    CreateAndAppendMessage(settingsBox, settingBoxButtons, 'Saved', 'div', 'message-sent');
  } else if (click.id === 'cancel-settings') {
    emailNotificationsSwitch.checked = true;
    publicProfileSwitch.checked = true;
    timezoneSelect.selectedIndex = 0;
    removeLocalStorageCheckbox(emailNotificationsSwitch);
    removeLocalStorageCheckbox(publicProfileSwitch);
    localStorage.removeItem('SelectedTimeZone');
    removeSavedMessage();
    CreateAndAppendMessage(settingsBox, settingBoxButtons, 'Saved', 'div', 'message-sent');
  }
});



// Loops through all options in the select list and returns the placement of the option that matches the information saved in local storage.
for (let i = 0; i <  timezoneSelect.length; i++) {
  const SelectedTime = localStorage.SelectedTimeZone;
  if (timezoneSelect.children[i].value === SelectedTime) {
      SelectedTimeZonePlacement = i;
  }
}

// Adds the selected attr to the option is saved in local storage.
if (SelectedTimeZonePlacement) {
  timezoneSelect.children[SelectedTimeZonePlacement].setAttribute('selected', 'selected');
}

for (let i = 0; i < switches.length; i++) {
  const cbox = switches[i];
  const switchName = cbox.name;
  if (localStorage.getItem(switchName) === 'false') {
    cbox.removeAttribute('checked');
  }
}