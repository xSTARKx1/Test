import Axios from 'axios';
import testActions from './test-actions';

const apiKey = '16292415-b72e1ae2e957998a23d4228ff';

const getImages = () => dispatch => {
  dispatch(testActions.getImagesRequest());
  Axios.get(
    `https://pixabay.com/api/?q="black+cat"&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=9`,
  )
    .then(({ data }) => dispatch(testActions.getImagesSuccess(data.hits)))
    .catch(error => dispatch(testActions.getImagesError(error.message)));
};

export default { getImages };
