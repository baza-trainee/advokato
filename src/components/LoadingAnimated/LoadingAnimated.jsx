import { useEffect } from 'react';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';

export const LoadingAnimated = () => {
  useEffect(() => {
    NotiflixLoading.init({
      backgroundColor: '#98a5b173',
      svgSize: '110px',
      svgColor: '#0b0c0c',
      clickToClose: false,
    });

    NotiflixLoading.dots();
  }, []);

  useEffect(() => {
    return () => {
      NotiflixLoading.remove();
    };
  }, []);
};
