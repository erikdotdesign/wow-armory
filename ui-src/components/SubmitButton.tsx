import * as React from "react";
import Spinner from "./Spinner";
import './SubmitButton.css';

interface SubmitButtonProps {
  region: Region,
  realm: string,
  character: string,
  loading: boolean,
  setLoading: (loading: boolean) => void
}

const SubmitButton = ({ 
  region, 
  realm, 
  character, 
  loading, 
  setLoading 
}: SubmitButtonProps) => {

  const fetchCharacterData = async () => {
    const query = new URLSearchParams({
      region,
      realm,
      character: character.toLowerCase(),
    });

    const proxyUrl = `http://localhost:3000/character-armory?${query.toString()}`;

    try {
      const response = await fetch(proxyUrl);
      const characterData = await response.json();

      if (characterData.name) {
        parent.postMessage({ 
          pluginMessage: { 
            type: "add-armory", 
            characterData
          } 
        }, "*");
      } else {
        alert("Armory not found!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch character armory");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await fetchCharacterData();
    setLoading(false);
  }

  return (
    <button 
      className="c-submit-button"
      onClick={handleSubmit}
      disabled={loading || character.length < 2 || character.length > 12}>
      {
        loading
        ? <Spinner />
        : <span>Share Armory</span>
      }
    </button>
  );
}

export default SubmitButton;