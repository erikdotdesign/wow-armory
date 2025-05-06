import * as React from "react";
import { useEffect } from "react";
import realms from "../assets/realms.json";
import './Control.css';

interface RealmInputProps {
  realm: string,
  region: Region,
  loading: boolean,
  setRealm: (realm: string) => void,
}

const RealmControl = ({ realm, region, loading, setRealm }: RealmInputProps) => {

  const handleRealmChange = (e) => {
    setRealm(e.target.value);
  }

  const sanitizeRealmName = (realmName) => {
    return realmName.replace(/\s+/g, '-').replace(/'/g, "").toLowerCase();
  }

  const handleRegionChange = () => {
    setRealm(sanitizeRealmName(realms[region][0]));
  }

  useEffect(() => {
    handleRegionChange();
  }, [region]);

  return (
    <div className="c-control">
      <label 
        className="c-control__label"
        htmlFor="realm-select">
        Realm
      </label>
      <select 
        className="c-control__field" 
        name="realm" 
        id="realm-select"
        disabled={loading}
        onChange={handleRealmChange}
        value={realm}>
        {
          realms[region].map((realmOption) => (
            <option 
              key={sanitizeRealmName(realmOption)}
              value={sanitizeRealmName(realmOption)}>
              {realmOption}
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

export default RealmControl;