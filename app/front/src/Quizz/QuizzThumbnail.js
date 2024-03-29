import React, {Component} from "react";
import {Link} from 'react-router-dom';
//Lvoir les quizzs
import { HTTP_SERVER_PORT, HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT_VIDEOS} from "../constantes";


function QuizzThumbnail(props) {
  return (
    <>
    <div className="QuizzThumbnail">

      <Link  to={'/quizz/'+props.id}>{props.name}</Link>

      <img src={HTTP_SERVER_PORT_PICTURES + props.picture} />
      {/* {props.picture_url} */}
      {/* <img src={HTTP_SERVER_PORT_PICTURES + props.picture_url} />             */}

    </div>
    </>
  );
}

export default QuizzThumbnail;
