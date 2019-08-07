import { createSelector } from 'reselect'

const getErrors = state => state.errors.entries

const getDisplayName = (state, displayName) => displayName

export const getErrorByDisplayName = createSelector(
  getErrors,
  getDisplayName,
  (errors, displayName) => errors[displayName]
)