import React from "react";
import "./Widgets.css";
import { Info } from "@material-ui/icons";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Architecht is celebrating 8 years of success!",
        "Top news - 5937 readers"
      )}
      {newsArticle("Cybertruck is shipping.", "Tesla - 886 readers")}
      {newsArticle("Sam Altman returns to OpenAI!", "OpenAI - 307 readers")}
      {newsArticle("Boston Dynamics is hiring.", "Technology - 428 readers")}
      {newsArticle("Is AI dangerous?", "Technology - 368 readers")}
    </div>
  );
}

export default Widgets;
