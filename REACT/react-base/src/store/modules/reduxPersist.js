import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'APP_NAME',
      storage,
      whitelist: ['anyName'],
    },
    reducers,
  );
  return persistReducers;
};
