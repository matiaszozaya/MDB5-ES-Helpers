// ---------------------------------------------------------------
//
// BE SURE TO REPLACE "mdb.es.min.js" FILE PATH ON EVERY FUNCTION
//
// ---------------------------------------------------------------

/**
 * Initializes MDB Input elements that have not been initialized yet.
 */
async function initializeMdbInputs() {
    const { Input } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-input-init]:not([data-mdb-input-initialized])").forEach((element) => {
        new Input(element).init();
    });
}

/**
 * Initializes MDB Alert and Toast elements that have not been initialized yet.
 */
async function initializeMdbAlerts() {
    const { Alert } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-alert-init]:not([data-mdb-alert-initialized]), [data-mdb-toast-init]:not([data-mdb-toast-initialized])").forEach((element) => {
        Alert.getOrCreateInstance(element);
    });
}

/**
 * Initializes MDB Select elements that have not been initialized yet.
 */
async function initializeMdbSelects() {
    const { Select } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-select-init]:not([data-mdb-select-initialized])").forEach((element) => {
        Select.getOrCreateInstance(element);
    });
}

/**
 * Initializes MDB Collapse and Accordion elements.
 */
async function initializeMdbCollapses() {
    const { Collapse } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-collapse-init]:not([data-mdb-collapse-initialized]), .accordion").forEach((element) => {
        Collapse.getOrCreateInstance(element);
    });
}

/**
 * Initializes MDB Tab elements that have not been initialized yet.
 */
async function initializeMdbTabs() {
    const { Tab } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-tab-init]:not([data-mdb-tab-initialized])").forEach((element) => {
        Tab.getOrCreateInstance(element);
    });
}

/**
 * Initializes MDB Modal elements that have not been initialized yet.
 */
async function initializeMdbModals() {
    const { Modal } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-modal-init]:not([data-mdb-modal-initialized])").forEach((element) => {
        Modal.getOrCreateInstance(element);
    });
}

/**
 * Initializes MDB Dropdown elements that have not been initialized yet.
 */
async function initializeMdbDropdowns() {
    const { Dropdown } = await import("../lib/MDB5/js/mdb.es.min.js");
    document.querySelectorAll("[data-mdb-dropdown-init]:not([data-mdb-dropdown-initialized])").forEach((element) => {
        Dropdown.getOrCreateInstance(element);
    });
}