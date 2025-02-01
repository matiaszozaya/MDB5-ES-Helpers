/**
 * Initializes form validation for forms with the `needs-validation` class.
 * Adds validation on form submission.
 */
function initializeMdbFormValidation() {
    const forms = document.querySelectorAll(".needs-validation");
    forms.forEach(form => {
        form.addEventListener(
            "submit",
            event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
}

/**
 * Validates a form with the given ID.
 * Adds `was-validated` styling and checks the form's validity.
 * @param {string} id - The ID of the form to validate.
 */
function validateMdbForm(id) {
    const form = document.getElementById(id);
    if (form) {
        form.classList.add("was-validated");
        return form.checkValidity();
    }
    return false;
}

/**
 * Removes form validation for the form with the given ID.
 * @param {string} id - The ID of the form.
 */
function removeMdbFormValidation(id) {
    const form = document.getElementById(id);
    if (form) {
        form.classList.remove('was-validated');
    }
}

/**
 * Updates the active state of form elements based on their value.
 */
function updateMdbFormActiveElements() {
    var elements = document.querySelectorAll('input[type="text"], textarea[type="text"]');
    elements.forEach(input => {
        if (input.value.trim() !== "") {
            input.classList.add("active");
        }
    });
}