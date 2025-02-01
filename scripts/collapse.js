// ---------------------------------------------------------------
//
// BE SURE TO REPLACE "mdb.es.min.js" FILE PATH ON EVERY FUNCTION
//
// ---------------------------------------------------------------

/**
 * Retrieves or creates an MDB Collapse instance for a given element ID.
 * @param {string} id - The ID of the collapsible element to be initialized or retrieved.
 */
async function getOrCreateMdbCollapse(id) {
    const { Collapse } = await import("../lib/MDB5/js/mdb.es.min.js");
    const element = document.getElementById(id);
    return Collapse.getOrCreateInstance(element);
}

/**
 * Shows the MDB Collapse element with the given ID.
 * @param {string} id - The ID of the collapsible element.
 */
async function showMdbCollapse(id) {
    const collapse = await getOrCreateMdbCollapse(id);
    if (collapse) collapse.show();
}

/**
 * Hides the MDB Collapse element with the given ID.
 * @param {string} id - The ID of the collapsible element.
 */
async function hideMdbCollapse(id) {
    const collapse = await getOrCreateMdbCollapse(id);
    if (collapse) collapse.hide();
}

/**
 * Toggles all MDB Collapse elements marked with the `data-custom-collapsible-content` attribute.
 * This will collapse all if any are shown, or expand all if none are visible.
 */
function collapseAll() {
    const collapseElements = document.querySelectorAll("[data-custom-collapsible-content]");
    const anyShown = Array.from(collapseElements).some(element =>
        element.classList.contains("collapse") && element.classList.contains("show")
    );
    collapseElements.forEach(element =>
        anyShown ? hideMdbCollapse(element.id) : showMdbCollapse(element.id)
    );
}