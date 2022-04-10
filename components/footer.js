import Container from './container';
import {TWITTER_LINK, GITHUB_LINK} from '../lib/constants';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <p className="text-center md:text-left text-md mt-5 md:pl-8">
            <br />
            <a
              href={`${GITHUB_LINK}`}
              className="mx-3 font-bold hover:underline"
            >
        My GitHub
            </a>
            <br />
            <a
              href={`${TWITTER_LINK}`}
              className="mx-3 font-bold hover:underline"
            >
        My Twitter
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
