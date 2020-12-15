import { expectSaga } from 'redux-saga-test-plan';
import fetchMock from 'fetch-mock-jest';

import { fetchData } from '../saga';
import { fetchPhotosSuccess, fetchPhotosError } from '../slices/photos';
import { dataMock } from '../../api/mock';

afterEach(() => {
  fetchMock.reset();
});

describe('Photos saga', () => {
  it('successfully fetches data', () => {
    fetchMock.mock('https://picsum.photos/v2/list?page=3&limit=100', dataMock);

    return expectSaga(fetchData)
      .put({
        type: fetchPhotosSuccess.type,
        payload: dataMock,
      })
      .run();
  });

  it('handles errors', () => {
    const error = new Error('error');

    fetchMock.mock('https://picsum.photos/v2/list?page=3&limit=100', {
      throws: error,
    });

    return expectSaga(fetchData)
      .put({ type: fetchPhotosError.type, payload: error })
      .run();
  });
});
