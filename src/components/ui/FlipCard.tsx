import { cn } from '@/utils/cn'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

const FlipCard = ({ className, frontText, backText, classNameText }: { className?: ClassNameValue, frontText: string, backText: string, classNameText?: ClassNameValue }) => {
  return (
    <div className={cn('flip-card max-sm:col-span-full max-sm:row-span-1 max-sm:min-h-72 max-sm:px-2', className)}
    >
      <div className="flip-card-inner"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        <div className="flip-card-front">
          <p className="text-2xl font-extrabold ">{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p className={cn("title max-sm:text-sm", classNameText)}>{backText}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard