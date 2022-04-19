import React from "react";
import PropTypes from "prop-types";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = (props: any) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 10.7837593, lng: 106.6957011 }}
      >
        <Marker position={{ lat: 10.7807593, lng: 106.6957011 }}>
          <InfoWindow>
            <div>
              <div>mplify Vietnam</div>
              <div>2-4 Alexandre de Rhodes, District 1</div>
            </div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </div>
  );
};

Map.propTypes = {};

export default withScriptjs(withGoogleMap(Map));
