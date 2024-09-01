'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import * as React from 'react'

import { cn } from '@/lib/utils'

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full outline outline-2 outline-black',
      className,
    )}
    {...props}
  />
))
// Avatar.displayName = AvatarPrimitive.Root.displayName // Removed type annotations

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
// AvatarImage.displayName = AvatarPrimitive.Image.displayName // Removed type annotations

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-white text-text dark:bg-darkBg dark:text-darkText font-base',
      className,
    )}
    {...props}
  />
))
// AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName // Removed type annotations

export { Avatar, AvatarImage, AvatarFallback }