// ---------------------------------------------------------------
//
// BE SURE TO REPLACE "mdb.es.min.js" FILE PATH ON EVERY FUNCTION
//
// ---------------------------------------------------------------

/**
 * Retrieves or creates an MDB Modal instance for a given element ID.
 * @param {string} id - The ID of the modal element to be initialized or retrieved.
 */
async function getOrCreateMdbModal(id) {
    const { Modal } = await import("../lib/MDB5/js/mdb.es.min.js");
    const element = document.getElementById(id);
    return Modal.getOrCreateInstance(element);
}

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
 * Retrieves or creates an MDB Collapse instance for a given element ID.
 * @param {string} id - The ID of the collapsible element to be initialized or retrieved.
 */
async function getOrCreateMdbCollapse(id) {
    const { Collapse } = await import("../lib/MDB5/js/mdb.es.min.js");
    const element = document.getElementById(id);
    return Collapse.getOrCreateInstance(element);
}