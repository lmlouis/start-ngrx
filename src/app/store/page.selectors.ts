import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ModelStateInterface } from "./model-state";

export const featureKey = "select feature"
export const selectFeature = createFeatureSelector<ModelStateInterface>(featureKey)

export const selectFeatureIsLoading = createSelector(
  selectFeature,
  (state:ModelStateInterface) => state.isLoading
);

export const selectFeatureData = createSelector(
  selectFeature,
  (state:ModelStateInterface) => state.model
);

export const selectFeatureError = createSelector(
  selectFeature,
  (state:ModelStateInterface) => state.error
);
