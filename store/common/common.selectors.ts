import { createSelector } from "reselect";

import { ReduxState } from "@/interfaces/redux.interface";

const selectCommonState = (state: ReduxState) => state.commonState;

export const selectCurrentTime = createSelector(
    [selectCommonState],
    (commonState): string => commonState.currentTime
);
