export const selectContacts = state => state.phonebook.contacts.items;
export const selectContactsIsLoading = state =>
  state.phonebook.contacts.isLoading;
export const selectContactsError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.phonebook.filter;
