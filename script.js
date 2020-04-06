const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector(".save"); // select save button
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

/*
$(document).ready(function () {
    $("i").click(function () {
        //   do something
    });
});

// when icon is clicked, this will save the text
$("textarea").change(function () {
    $(this).closest('textarea').data('changed', true);
});
$('i').click(function () {
    if ($(this).closest('form').data('changed')) {
        // save to local storage
    }
});
*/

// form.js
...

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
    let data = { [formIdentifier]: {} }; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of formElements) {
        if (element.name.length > 0) {
            data[formIdentifier][element.name] = element.value;
        }
    }
    return data;
};

saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    displayAlert(message);
};

// Code to change colors based on time
/* if (time === past) {
    $(".tense").addClass("past");
} else if (time === present) {
    $(".tense").addClass("present");    
} else if (time === future) {
    $(".tense").addClass("future");
} */