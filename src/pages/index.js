import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Match from "../components/match";

const IndexPage = () => {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlayer = async () => {
    try {
      const response = await axios.get("/.netlify/functions/fortnite-api", {
        params: {
          player: "hagoona_matata",
        },
      });
      const data = await response.data;
      console.log("DATA", data);

      setPlayerStats([...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("playerStats", playerStats);

  const matches = playerStats.map(match => (
    <Match
      key={match.id}
      date={match.dateCollected}
      playlist={match.playlist}
      kills={match.kills}
      matchCount={match.matches}
    />
  ));

  return (
    <Layout>
      <SEO title="Home" />

      <button
        type="button"
        onClick={() => {
          setLoading(true);
          getPlayer();
        }}
      >
        Get Player Info
      </button>
      {loading && <h3>Loading......</h3>}
      {playerStats.length ? matches : null}
    </Layout>
  );
};

export default IndexPage;
