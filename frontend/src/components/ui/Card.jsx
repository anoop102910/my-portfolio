import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-base shadow-light dark:shadow-dark border-2 border-border dark:border-darkBorder bg-main text-black',
      className,
    )}
    {...props}
  />
))
// Card.displayName = 'Card' // Removed type annotations

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
// CardHeader.displayName = 'CardHeader' // Removed type annotations

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl leading-none font-heading tracking-tight',
      className,
    )}
    {...props}
  />
))
// CardTitle.displayName = 'CardTitle' // Removed type annotations

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-black font-base !mt-3', className)}
    {...props}
  />
))
// CardDescription.displayName = 'CardDescription' // Removed type annotations

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
// CardContent.displayName = 'CardContent' // Removed type annotations

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
// CardFooter.displayName = 'CardFooter' // Removed type annotations

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }