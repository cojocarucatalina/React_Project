import "./SearchResultList.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { SearchResult } from "./SearchResult";

export function SearchResultList() {
  const [candles, setCandles] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCandles();
  }, []);

  const loadCandles = async () => {
    const result = await axios.get("http://localhost:8080/candles");
    setCandles(result.data);
  };

  const deleteCandle = async (id) => {
    await axios.delete(`http://localhost:8080/candle/${id}`);
    loadCandles();
  };

  return (
    <div className="results-list">
      {candles.map((candle, id) => {
        return <SearchResult result={candle.model} key={id} />;
      })}
    </div>
  );
}

/*
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};*/