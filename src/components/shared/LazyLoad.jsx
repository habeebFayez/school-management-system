import React, { Suspense } from 'react';
import Loading from './Loading';

const LazyLoad = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

export default LazyLoad; 