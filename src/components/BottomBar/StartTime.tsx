import { useState, useEffect, FunctionComponent } from "react";
import { ITimeProps } from "./types/interfaces";
import { TimeContainer, BarText } from "./styles/styled";
import moment from "moment";

const StartTime: FunctionComponent<ITimeProps> = ({ themeState }) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  // Tick the time.
  const checkTimeTick = () => {
    return setInterval(() => {
      const time = moment().format("hh:mm:ss");
      const date = moment().format("DD/MM/yyyy");
      setCurrentTime(time);
      setCurrentDate(date);
    }, 1000);
  };

  useEffect(() => {
    const interval = checkTimeTick();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimeContainer themeState={themeState}>
      <BarText themeState={themeState}>{currentTime}</BarText>
      <BarText themeState={themeState}>{currentDate}</BarText>
    </TimeContainer>
  );
};

export default StartTime;
