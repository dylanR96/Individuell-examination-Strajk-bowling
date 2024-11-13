import React, { useState } from "react";
import Menu from "../../components/Menu";
import "./booking.css";
import BowlingIconSmall from "../../assets/BowlingIconSmall";
import { useNavigate } from "@tanstack/react-router";
import { useResponseData } from "../../providers/ResponseDataContext";

const sizesOfShoes: string[] = [
  "Euro 36",
  "Euro 37",
  "Euro 38",
  "Euro 39",
  "Euro 40",
  "Euro 41",
  "Euro 42",
  "Euro 43",
  "Euro 44",
  "Euro 45",
];

interface BookingData {
  when: string;
  lanes: number;
  players: number;
  shoes: number[];
}

const Booking: React.FC = () => {
  const { setResponseData } = useResponseData();
  const navigate = useNavigate();
  const [when, setWhen] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [lanes, setLanes] = useState<number>(0);
  const [players, setPlayers] = useState<number>(0);
  const [shoeSizes, setShoeSizes] = useState<string[]>([]);
  const [maxPlayers, setMaxPlayers] = useState<number>(0);

  const handleNavigate = () => {
    navigate({ to: "/confirmation" });
  };

  const handleShoeSizesChange = (index: number, value: string) => {
    const updatedSizes = [...shoeSizes];
    updatedSizes[index] = value;
    setShoeSizes(updatedSizes);
  };

  const handleLanesWithPlayers = (lanes: number) => {
    console.log("Number of lanes: " + lanes);

    const maxPlayers = lanes * 4;
    setMaxPlayers(4);
    console.log("Max players: " + maxPlayers);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const bookingData: BookingData = {
      when: `${when}T${time}`,
      lanes,
      players,
      shoes: shoeSizes.map((size) => parseInt(size, 10) || 0),
    };

    try {
      const API_URL = "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com";
      const API_KEY = "738c6b9d-24cf-47c3-b688-f4f4c5747662";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      console.log("Booking successful:", data.players);
      setResponseData(data);
      handleNavigate();
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };
  const handleInputCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value, 10) || 0;

    if (count <= maxPlayers) {
      setPlayers(count);
    } else {
      setPlayers(maxPlayers);
    }

    setShoeSizes((prevSizes) =>
      Array.from({ length: count }, (_, i) => prevSizes[i] || "")
    );
  };

  return (
    <div>
      <nav className="booking-nav">
        <Menu />
      </nav>
      <div className="main-booking">
        <div className="booking-content">
          <div className="booking-header-container">
            <BowlingIconSmall />
            <h1 className="booking-header">BOOKING</h1>
          </div>
          <div>
            <div className="booking-form-header">
              <div className="booking-form-dividers"></div>
              <h2 className="booking-second-headers">WHEN, WHAT & WHO</h2>
              <div className="booking-form-dividers"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="booking-form">
                <fieldset className="form-group-booking when">
                  <legend>DATE</legend>
                  <input
                    type="date"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    required
                  />
                </fieldset>

                <fieldset className="form-group-booking when">
                  <legend>TIME</legend>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="form-group-booking">
                <legend>NUMBER OF AWESOME BOWLERS</legend>
                <input
                  type="number"
                  value={players}
                  onChange={handleInputCountChange}
                  required
                  min="1"
                />
              </fieldset>
              <fieldset className="form-group-booking">
                <legend>NUMBER OF LANES</legend>
                <input
                  type="number"
                  value={lanes}
                  onChange={(e) => {
                    handleLanesWithPlayers(lanes);
                    setLanes(parseInt(e.target.value, 10));
                  }}
                  required
                  min="1"
                />
              </fieldset>
              <div className="booking-form-header">
                <div className="booking-form-lower-dividers"></div>
                <h2 className="booking-second-headers">SHOES</h2>
                <div className="booking-form-lower-dividers"></div>
              </div>
              {shoeSizes.length > 0 && (
                <>
                  {shoeSizes.map((size, index) => (
                    <div key={index}>
                      <fieldset className="form-group-booking">
                        <legend>SHOE SIZE / PERSON {index + 1}</legend>
                        <select
                          value={size}
                          onChange={(e) =>
                            handleShoeSizesChange(index, e.target.value)
                          }
                        >
                          {sizesOfShoes.map((availableSizes, optionsIndex) => (
                            <option key={optionsIndex} value={availableSizes}>
                              {availableSizes}
                            </option>
                          ))}
                        </select>
                      </fieldset>
                    </div>
                  ))}
                  <div className="booking-btn-container">
                    <button className="booking-btn" type="submit">
                      LETS BOWL!
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
