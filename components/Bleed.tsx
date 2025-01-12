import cn from 'clsx'
import type { ReactElement, ReactNode } from 'react'

export function Bleed({
  full,
  children,
}: {
  full: boolean
  children: ReactNode
}): ReactElement {
  return (
    <div
      className={cn(
        'nextra-bleed relative mx-2 mt-6 md:mx-4 lg:-mx-4 xl:-mx-8 2xl:-mx-16',
        full && [
          // 'md:mx:[calc(-50vw+50%+8rem)',
          'ltr:xl:ml-[calc(50%-50vw+16rem)] ltr:xl:mr-[calc(50%-50vw)]',
          'rtl:xl:ml-[calc(50%-50vw)] rtl:xl:mr-[calc(50%-50vw+16rem)]',
        ],
      )}
    >
      {children}
    </div>
  )
}
