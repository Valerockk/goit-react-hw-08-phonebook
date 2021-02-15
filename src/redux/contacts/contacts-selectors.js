import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getLoading = (state) => state.contacts.isLoading;
const getError = (state) => state.contacts.error;
const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export { getContacts, getLoading, getError, getFilter, getVisibleContacts };
