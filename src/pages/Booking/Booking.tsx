import React, { useState } from "react";
import Menu from "../../components/Menu";
import "./booking.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";

const Booking: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bowlers, setBowlers] = useState("");
  const [lanes, setLanes] = useState("");
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [personThree, setPersonThree] = useState("");

  const [inputCount, setInputCount] = useState();
  const [shoeSizes, setShoeSizes] = useState<string[]>([""]);

  const handleShoeSizesChange = (index: number, value: string) => {
    const updatedSizes = [...shoeSizes];
    updatedSizes[index] = value;
    setShoeSizes(updatedSizes);
  };

  const handleInputCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value, 10) || 0;
    setInputCount(count);

    setShoeSizes((prevSizes) =>
      Array.from({ length: count }, (_, i) => prevSizes[i] || "")
    );
  };

  return (
    <div className="main-booking">
      <nav className="booking-nav">
        <Menu />
      </nav>
      <div className="booking-content">
        <div>
          <BowlingIconSmall />
          <h1 className="booking-header">BOOKING</h1>
        </div>
        <div>
          <div className="booking-form-header">
            <div className="booking-form-header-divider"></div>
            <h2>WHEN, WHAT & WHO</h2>
            <div className="booking-form-header-divider"></div>
          </div>
          <form>
            <label>
              DATE
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                required
              />
            </label>
            <label>
              TIME
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
                required
              />
            </label>
            <label>
              NUMBER OF AWESOME BOWLERS
              <input
                type="text"
                value={inputCount}
                onChange={handleInputCountChange}
                placeholder="Number of players"
                required
              />
            </label>
            <label>
              NUMBER OF LANES
              <input
                type="text"
                value={lanes}
                onChange={(e) => setLanes(e.target.value)}
                placeholder="Number of lanes"
                required
              />
            </label>
            <div></div>
            <h2>SHOES</h2>
            <div></div>
            {shoeSizes.map((size, index) => (
              <label key={index}>
                SHOE SIZE / PERSON {index + 1}
                <input
                  type="text"
                  value={size}
                  onChange={(e) => handleShoeSizesChange(index, e.target.value)}
                  placeholder={`Person ${index + 1}`}
                  required
                />
              </label>
            ))}
            {/* <label>
              SHOE SIZE / PERSON 1
              <input
                type="text"
                value={personOne}
                onChange={(e) => setPersonOne(e.target.value)}
                placeholder="Person 1"
                required
              />
            </label>
            <label>
              SHOE SIZE / PERSON 2
              <input
                type="text"
                value={personTwo}
                onChange={(e) => setPersonTwo(e.target.value)}
                placeholder="Person 2"
                required
              />
            </label>
            <label>
              SHOE SIZE / PERSON 3
              <input
                type="text"
                value={personThree}
                onChange={(e) => setPersonThree(e.target.value)}
                placeholder="Person 3"
                required
              />
            </label> */}
            <div>
              <button type="submit">STRRIIIIIIKE!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
