import { iconUrlFromCode } from "../services/WeatherService";

/* eslint-disable react/prop-types */
const Forecast = ({ title, items }) => {
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-center mt-6">
        <p className="text-white font-medium uppercase">{title} </p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center justify-between gap-10 text-white">
          {items.map((item, i) => (
            <div key={i} className=" flex gap-10 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm whitespace-nowrap">
                  {item.title}
                </p>
                <img
                  src={iconUrlFromCode(item.icon)}
                  alt=""
                  className="w-12 my-1"
                />
                <p className="font-medium">{item.temp.toFixed()}&deg;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
