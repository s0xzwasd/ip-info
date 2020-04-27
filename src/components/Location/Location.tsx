import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';
import styles from './Location.less';

type Props = {
  lat: number;
  lon: number;
};

const Location: React.FC<Props> = ({ lat, lon }) => (
  <Map className={styles.map} center={[lat || 0, lon || 0]} zoom={12}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat || 0, lon || 0]} />
  </Map>
);

const mapStateToProps = (state: any) => ({
  lat: state.data.ip.lat,
  lon: state.data.ip.lon,
});

export default connect(mapStateToProps)(Location);
