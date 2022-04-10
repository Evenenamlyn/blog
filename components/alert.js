import Container from './container'
import cn from 'classnames'
import { GITHUB_BLOG } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
              Work In Progress - Follow along on&nbsp;
              <a
                href={`${GITHUB_BLOG}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                GitHub
              </a>
        </div>
      </Container>
    </div>
  )
}
