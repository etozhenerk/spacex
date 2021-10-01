import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useHistory } from "react-router";
import { Main } from "../Main/Main";
import { useFetch } from "../Hooks/useFetch";
import "./details.css";

export const Details = ({ match : { params : { id } } }) => {

  const history = useHistory();
  const { getLaunch } = useFetch();
  const [ launch, setLaunch ] = useState(null);

  useEffect(() => {
    setLaunch(getLaunch(id));
  },[getLaunch]);


//прелоудер
  return (
    <>
      <Main name={launch?.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch?.links.patch.small} alt="" />
            </div>
            <div className="details-content">
              <p className="details-description">{launch?.name}</p>
            </div>
          </div>
          <div>
            <YouTube className="details-youtube" videoId={launch?.links.youtube_id}/>
          </div>
        </div>
        <a onClick={history.goBack} className="button button-back">
          go back
        </a>
      </main>
    </>
  );
};
