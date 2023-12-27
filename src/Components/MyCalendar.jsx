import { useEffect } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { convertToZuluTime } from "../App";

export default function MyCalendar({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) {
  useEffect(() => {
    // if(startDate)
    // console.log(startDate.split("T"));
    if (startDate) setStartTime(startDate.split("T")[1].substring(0, 5));
    if (endDate) setEndTime(endDate.split("T")[1].substring(0, 5));
  }, []);

  // console.log(startDate);
  // console.log(endDate);
  // console.log(startTime);
  // console.log(endTime);

  const highlightDates = ({ date }) => {
    if (startDate < date && date < endDate) {
      return "react-calendar__tile--highlighted";
    }
  };
  return (
    <div className="calendars">
      <div>
        <h1>Start Date</h1>
        <TimePicker value={startTime} onChange={setStartTime} />
        <Calendar
          onChange={setStartDate}
          value={startDate}
          tileClassName={highlightDates}
        />
      </div>
      <div>
        <h1>End Date</h1>
        <TimePicker value={endTime} onChange={setEndTime} />
        <Calendar
          onChange={setEndDate}
          value={endDate}
          tileClassName={highlightDates}
        />
      </div>
    </div>
  );
}
