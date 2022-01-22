import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTime } from "@/store/common/common.selectors";
import { onCurrentTimeChange } from "@/store/common/common.actions";
import * as styles from "./RealTimeClock.styles";

const RealTimeClock = () => {
  const currentTime = useSelector(selectCurrentTime);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!process.browser) return;
    setInterval(() => {
      dispatch(onCurrentTimeChange(new Date().toLocaleTimeString()));
    }, 1000);
  }, []);

  return (
    <h5 css={styles.text} suppressHydrationWarning>
      The time is - {currentTime}
    </h5>
  );
};

export default RealTimeClock;
