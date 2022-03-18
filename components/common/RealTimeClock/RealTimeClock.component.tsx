import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onCurrentTimeChange } from "@/store/common/common.actions";
import { selectCurrentTime } from "@/store/common/common.selectors";

import * as styles from "./RealTimeClock.styles";

const RealTimeClock = () => {
    const currentTime = useSelector(selectCurrentTime);
    const dispatch = useDispatch();

    useEffect(() => {
        setInterval(() => {
            dispatch(onCurrentTimeChange(new Date().toLocaleTimeString()));
        }, 1000);
    }, [dispatch]);

    return (
        <h5 css={styles.text} suppressHydrationWarning>
            The time is - {currentTime}
        </h5>
    );
};

export default RealTimeClock;
