// ---------------------------------------------------------------
//
// BE SURE TO REPLACE "mdb.es.min.js" FILE PATH ON EVERY FUNCTION
//
// ---------------------------------------------------------------

/**
 * Retrieves or creates an MDB Select instance for a given element ID.
 * @param {string} id - The ID of the select element to be initialized or retrieved.
 */
async function getOrCreateMdbSelect(id) {
    const { Select } = await import("../lib/MDB5/js/mdb.es.min.js");
    const element = document.getElementById(id);
    return Select.getOrCreateInstance(element);
}

/**
 * Retrieves the value of the MDB Select element with the given ID.
 * @param {string} id - The ID of the select element.
 */
async function getMdbSelectValue(id) {
    const instance = await getOrCreateMdbSelect(id);
    return instance ? document.getElementById(id).value : null;
}

/**
 * Sets the value of the MDB Select element with the given ID.
 * @param {string} id - The ID of the select element.
 * @param {string | string[]} value - The value(s) to set (array for multiple selects).
 */
async function setMdbSelectValue(id, value) {
    const instance = await getOrCreateMdbSelect(id);
    const select = document.getElementById(id);

    if (instance) {
        if (instance.multiple) {
            instance.setValue(value.map(String));
        } else {
            const optionsToDeselect = select.querySelectorAll(`option[selected], option[selected="selected"]`);
            optionsToDeselect.forEach(option => option.removeAttribute("selected"));

            instance.setValue(`${value}`);
        }
    }
}

/**
 * Destroys the MDB Select instance and clears its options.
 * @param {string} id - The ID of the select element.
 */
async function destroyMdbSelect(id) {
    const instance = await getOrCreateMdbSelect(id);
    const select = document.getElementById(id);
    if (instance) instance.dispose();
    select.options = [];
    select.innerHTML = "";
}

/**
 * Reinitializes the MDB Select element with new options.
 * @param {string} id - The ID of the select element.
 * @param {HTMLOptionElement[]} options - The new options to populate the select.
 */
async function updateMdbSelect(id, options = []) {
    await destroyMdbSelect(id);
    const select = document.getElementById(id);
    options.forEach(option => select.add(option));
    await getOrCreateMdbSelect(id);
}