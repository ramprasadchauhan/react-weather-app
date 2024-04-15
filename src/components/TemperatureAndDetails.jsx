/* eslint-disable react/prop-types */
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  // console.log(weather);
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details} </p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-4xl">{temp.toFixed()} &deg;</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell
            <span className="ml-1 font-medium">
              {feels_like.toFixed()} &deg;
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className="ml-1 font-medium"> {humidity.toFixed()} %</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind
            <span className="ml-1 font-medium">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light  whitespace-nowrap">
          Rise:
          <span className="ml-1 font-medium">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light  whitespace-nowrap">
          Set:
          <span className="ml-1 font-medium ">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light whitespace-nowrap">
          High:
          <span className="ml-1 font-medium">{temp_max.toFixed()} &deg;</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-ligh whitespace-nowrap">
          Low:
          <span className="ml-1 font-medium">{temp_min.toFixed()}&deg;</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
