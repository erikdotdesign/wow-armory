import * as React from "react";
import './Control.css';

interface RegionInputProps {
  region: Region,
  loading: boolean,
  setRegion: (region: Region) => void
}

const RegionControl = ({ region, loading, setRegion }: RegionInputProps) => {
  const regions: {
    value: Region,
    label: RegionDisplay
  }[] = [{
    value: "us",
    label: "US"
  }, {
    value: "eu",
    label: "EU"
  }, {
    value: "kr",
    label: "KR"
  }, {
    value: "tw",
    label: "TW"
  }];

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  }

  return (
    <div className="c-control">
      <label 
        className="c-control__label"
        htmlFor="region-select">
        Region
      </label>
      <select 
        className="c-control__field" 
        name="region" 
        id="region-select"
        disabled={loading}
        onChange={handleRegionChange}
        value={region}>
        {
          regions.map((regionOption) => (
            <option 
              key={regionOption.value}
              value={regionOption.value}>
              {regionOption.label}
            </option>
          ))
        }
      </select>
      <div className="c-control__icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      </div>
    </div>
  )
}

export default RegionControl;