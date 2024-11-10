import React, { useState } from "react";
import Menu from "../../components/Menu";
import "./booking.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";

const Booking: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [lanes, setLanes] = useState("");

  const [inputCount, setInputCount] = useState(1);
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
            <div className="booking-form-dividers"></div>
            <h2>WHEN, WHAT & WHO</h2>
            <div className="booking-form-dividers"></div>
          </div>
          <form>
            <div className="testy">
              <fieldset className="form-group">
                <legend>DATE</legend>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </fieldset>

              <fieldset className="form-group">
                <legend>TIME</legend>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </fieldset>
            </div>
            <fieldset className="form-group">
              <legend>NUMBER OF AWESOME BOWLERS</legend>
              <input
                type="number"
                value={inputCount}
                onChange={handleInputCountChange}
                required
                min="1"
              />
            </fieldset>
            <fieldset className="form-group">
              <legend>NUMBER OF LANES</legend>
              <input
                type="text"
                value={lanes}
                onChange={(e) => setLanes(e.target.value)}
                required
              />
            </fieldset>
            <div className="booking-form-header">
              <div className="booking-form-lower-dividers"></div>
              <h2>SHOES</h2>
              <div className="booking-form-lower-dividers"></div>
            </div>
            {shoeSizes.map((size, index) => (
              <fieldset className="form-group">
                <legend key={index}>SHOE SIZE / PERSON {index + 1}</legend>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => handleShoeSizesChange(index, e.target.value)}
                  required
                />
              </fieldset>
            ))}
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
