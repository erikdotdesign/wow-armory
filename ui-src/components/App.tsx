import * as React from "react";
import { useState, useEffect } from "react";
import RegionControl from './RegionControl';
import RealmControl from "./RealmControl";
import CharacterControl from "./CharacterControl";
import SubmitButton from "./SubmitButton";
import './App.css';

const App = () => {
  const [region, setRegion] = useState<Region>("us");
  const [realm, setRealm] = useState<string>("");
  const [character, setCharacter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const fetchIpLocation = async () => {
  //   const ipLocatorUrl = `https://ipapi.co/json`;

  //   try {
  //     const response = await fetch(ipLocatorUrl);
  //     const location = await response.json();

  //     return location;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const updateRegionByIp = async () => {
  //   try {
  //     const location = await fetchIpLocation();

  //     if (location) {
  //       if (location.in_eu) {
  //         setRegion('eu');
  //       }
  //       if (location.country_code === 'KR') {
  //         setRegion('kr');
  //       }
  //       if (location.country_code === 'TW') {
  //         setRegion('tw');
  //       }
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // useEffect(() => {
  //   updateRegionByIp();
  // }, []);

  return (
    <div className="c-app">
      <div className="c-app__logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" aria-labelledby="blz-icon-title-world-of-warcraft" viewBox="0 1 48 48">
          <title id="blz-icon-title-world-of-warcraft">World Of Warcraft</title>
          <path 
            fill="#2B374C" 
            fill-rule="evenodd" 
            d="M24 8.848c8.8 0 16 7.255 16 16.121 0 8.867-7.2 16.121-16 16.121S8 33.836 8 24.97 15.2 8.847 24 8.847" 
            clip-rule="evenodd">
          </path>
          <path 
            fill="#F4BF2A" 
            fill-rule="evenodd" 
            d="M44 24.97c0-4.031-1.2-8.061-3.6-11.487V8.647c0-.202-.2-.202-.2-.202h-4.8c-6.8-4.635-15.8-4.635-22.6 0H7.6v5.038c-4.8 6.851-4.8 16.12 0 22.972v4.837c0 .201.2.201.2.201h4.8c6.8 4.635 15.8 4.635 22.8 0h4.8c.2 0 .2-.202.2-.403v-4.836c2.4-3.224 3.6-7.255 3.6-11.285m-37.4-.001c0-9.673 7.8-17.531 17.4-17.531s17.4 7.859 17.4 17.531C41.4 34.641 33.6 42.5 24 42.5S6.6 34.64 6.6 24.969" 
            clip-rule="evenodd">
          </path>
          <path 
            fill="#F4BF2A" 
            fill-rule="evenodd" 
            d="M12.4 15.498H19c-.2.806-.2 1.612-.2 2.418C19 20.94 21 29 21 29l3-12.695 3.2 12.292s2-10.881 2-11.687c0-.605-.4-1.008-.8-1.411h7c-1 .806-1.6 2.015-2 3.224-.6 2.418-2.8 14.509-2.8 15.315s.4 1.612.8 2.217H25c.2-.605.2-1.21.2-1.814 0-1.209-1-6.448-1-6.448s-1.4 5.44-1.4 6.448c0 .605.2 1.21.4 1.814h-6.6s1.2-1.008 1.2-1.814c-.2-2.418-3.6-15.315-3.8-16.322 0-1.008-.6-2.015-1.6-2.62" 
            clip-rule="evenodd">
          </path>
        </svg>
      </div>
      <RegionControl 
        region={region}
        setRegion={setRegion}
        loading={loading} />
      <RealmControl 
        realm={realm}
        setRealm={setRealm}
        region={region}
        loading={loading} />
      <CharacterControl
        character={character}
        setCharacter={setCharacter}
        loading={loading} />
      <SubmitButton
        region={region}
        realm={realm}
        character={character}
        loading={loading}
        setLoading={setLoading} />
    </div>
  );
}

export default App;