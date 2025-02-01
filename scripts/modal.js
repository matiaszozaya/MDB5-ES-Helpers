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
 * Shows the MDB Modal element with the given ID.
 * @param {string} id - The ID of the modal element.
 */
async function showMdbModal(id) {
    const modal = await getOrCreateMdbModal(id);
    if (modal) modal.show();
}

/**
 * Hides the MDB Modal element with the given ID.
 * @param {string} id - The ID of the modal element.
 */
async function hideMdbModal(id) {
    const modal = await getOrCreateMdbModal(id);
    if (modal) modal.hide();
}