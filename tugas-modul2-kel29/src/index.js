import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatOwner from './component/CatOwner';

const data = [
  {nama: "Britsy", jenis:"British Shorthair", gambar: "https://cdn.onemars.net/sites/whiskas_id_98_2/image/editor/photo-3_1581586570401.jpg"}, 
  {nama: "Scoty", jenis:"Scottish Fold", gambar: "https://cdn.onemars.net/sites/whiskas_id_98_2/image/editor/photo-3_1581593291215.jpg"}
] 

ReactDOM.render(
  <React.StrictMode>
    <CatOwner nama="Wahyu Liga" asal="Semarang" data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
