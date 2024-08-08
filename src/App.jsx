import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useWeatherInfo from "./hooks/useWeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(""); // State for error message
  const cityInfo = useWeatherInfo(searchCity);

  const info = Object.keys(cityInfo);

  const handleInputChange = () => {
    if (city === "") {
      setError("Please enter a city name"); // Set error message
      return;
    }

    setSearchCity(city.trim()); // Trim whitespace and set searchCity
    setLoading(false); // Set loading state to true on search
    setError(""); // Clear error message if input is valid
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
      <div className="w-1/3 overflow-hidden bg-white rounded-lg shadow-lg">
        <h1 className="mb-3 text-4xl font-extrabold text-center text-indigo-600 ">
          Weather App
        </h1>

        <div className="p-6">
          <div className="relative mb-6">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleInputChange}
              className="absolute right-0 px-4 py-2 mt-3 mr-4 text-white bg-blue-500 rounded-full -top-1 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <FaSearch />
            </button>
          </div>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          {loading ? (
            <p className="text-lg text-gray-800"></p>
          ) : (
            <div>
              {info.map((key) => (
                <div key={key} className="mb-4">
                  <h1 className="text-xl font-semibold text-blue-600">
                    {key}:
                  </h1>
                  <p className="text-lg text-gray-800">{cityInfo[key]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
