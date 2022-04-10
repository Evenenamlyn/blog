import Header from './header';
import CoverImage from '../components/cover-image';
import React from 'react';

export default function PostHeader({title, coverImage, date, author}) {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <Header />
    </>
  );
}
