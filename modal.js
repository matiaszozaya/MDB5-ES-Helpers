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