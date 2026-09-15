// TEMPORARY: no auth yet, so each portal is pinned to a fixed mock person
// until real sessions exist. Centralized here so wiring up real auth later
// only means changing this file instead of hunting down a constant that was
// copied into every page that needs "the current user."
export const CURRENT_ADMIN_ID = 2; // Diane Okafor
export const CURRENT_EMPLOYEE_ID = 3; // Paul Brennan
export const CURRENT_CONTRACTOR_ID = 5; // Marcus Bell
export const CURRENT_CUSTOMER_ID = 1; // James Delgado
