import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const LoadingAnimated = () => {
  useEffect(() => {
    Loading.dots();
  }, []);

  useEffect(() => {
    return () => {
      Loading.remove();
    };
  }, []);
};
