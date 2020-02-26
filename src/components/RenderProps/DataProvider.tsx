import { useSelector } from 'react-redux';
import _ from 'lodash';

const DataProvider = ({ render, id }: any) => {
  const comment = useSelector((state: any) => _.get(state, ['comments', 'entities', id]));
  return render(comment) ;
}

export default DataProvider
