import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import { motion } from "framer-motion";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Section } from "./Hero.styles";
import homeImage from "../assets/hero.png";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Failed to load location search. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default function Hero() {
  const [address, setAddress] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const navigate = useNavigate(); // Thêm useNavigate để điều hướng

  // Load Google Maps JavaScript API
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        setIsGoogleMapsLoaded(true);
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.onload = () => setIsGoogleMapsLoaded(true);
      script.onerror = () => console.error("Failed to load Google Maps API");
      document.head.appendChild(script);
    };
    loadGoogleMapsScript();
  }, []);

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      console.log("Selected location:", value, latLng);
    } catch (error) {
      console.error("Error selecting location:", error);
      alert("Failed to select location. Please try again.");
    }
  };

  const handleExplore = () => {
    if (!address || !checkInDate || !checkOutDate) {
      alert("Please fill in all fields before exploring!");
      return;
    }
    console.log("Exploring:", { address, checkInDate, checkOutDate });
    // Chuyển hướng đến trang "Điểm Đến" (/diem-den)
    navigate("/diem-den", {
      state: { address, checkInDate, checkOutDate }, // Truyền dữ liệu nếu cần
    });
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Tropical Beach Destination" loading="lazy" />
      </div>
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>EXPLORE THE WORLD</h1>
          <p>
            Unveil the most awe-inspiring destinations across the globe. Join us
            on your next adventure and create unforgettable memories!
          </p>
        </motion.div>
        <motion.div
          className="search"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="container">
            <label htmlFor="location">Where you want to go</label>
            {!isGoogleMapsLoaded ? (
              <div>Loading location search...</div>
            ) : (
              <ErrorBoundary>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div style={{ position: "relative", width: "100%" }}>
                      <input
                        {...getInputProps({
                          placeholder: "Search Your location",
                          className: "location-search-input",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {suggestions.map((suggestion) => (
                          <div
                            {...getSuggestionItemProps(suggestion)}
                            className="suggestion-item"
                            key={suggestion.placeId}
                          >
                            {suggestion.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </ErrorBoundary>
            )}
          </div>
          <div className="container">
            <label htmlFor="checkin">Check-in</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Select Check-in Date"
              className="date-picker"
              minDate={new Date()}
            />
          </div>
          <div className="container">
            <label htmlFor="checkout">Check-out</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Select Check-out Date"
              className="date-picker"
              minDate={checkInDate || new Date()}
            />
          </div>
          <button onClick={handleExplore}>Explore Now</button>
        </motion.div>
      </div>
    </Section>
  );
}
