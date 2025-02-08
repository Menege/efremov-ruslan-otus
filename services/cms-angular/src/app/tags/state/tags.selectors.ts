import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TagState } from './tags.state';

export const selectTagState = createFeatureSelector<TagState>('tags');

export const selectAllTags = createSelector(
  selectTagState,
  (state) => state.tags
);

export const selectTagLoading = createSelector(
  selectTagState,
  (state) => state.loading
);

export const selectTagError = createSelector(
  selectTagState,
  (state) => state.error
);

export const selectCurrentTag = createSelector(
  selectTagState,
  (state) => state.currentTag
);