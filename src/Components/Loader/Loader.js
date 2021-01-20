import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

import Loader from 'react-loader-spinner';
export default function Loaders() {
  return (
    <div className={s.loader}>
      <Loader type="Oval" color="#3f51b5" height={150} width={150} />
    </div>
  );
}
