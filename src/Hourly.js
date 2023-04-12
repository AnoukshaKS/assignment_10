import React, { useState, useEffect } from "react";
import HourlyCityForecast from "./HourlyCityForecast";

function Hourly(props) {
const completeData = props.location.state.completeData;
const selectedParam = props.match.params;
const [data, setData] = useState([]);

useEffect(() => {
const tempData = completeData.filter((cd) => cd.day === selectedParam.day);
setData(tempData);
}, [completeData, selectedParam]);

return (
<div className="container-fluid">
<h4 className="py-3">
{" "}
{props.location.state.cityName} {selectedParam.day} Weather Forecast
</h4>
<div className="justify-content-center m-2">{displayHourlyData()}</div>
</div>
);


function displayHourlyData() {
return data.map((value, index) => (
<HourlyCityForecast data={value} key={index} />
));
}
}

export default Hourly;