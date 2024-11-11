"use client";
import { getMusic } from "../../../../sanity/sanity.utils";
import React, { useState, useEffect } from "react";
import { Root } from "./styles";

export default function Page2() {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    async function fetchMusic() {
      const musicData = await getMusic();
      setMusic(musicData);
      console.log("fool money", musicData[0]?.coverImage);
    }
    fetchMusic();
  }, []);

  return (
    <Root>
      <h1>Music</h1>
      {music ? (
        // Render your music data here
        <div>Music data loaded</div>
      ) : (
        <div>Loading...</div>
      )}
    </Root>
  );
}
