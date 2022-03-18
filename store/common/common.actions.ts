import { ON_TIME_CHANGE } from "@/store/common/common.action-types";

export const onCurrentTimeChange = (currentTime: string) => ({
    type: ON_TIME_CHANGE,
    payload: currentTime,
});
