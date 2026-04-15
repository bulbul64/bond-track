'use client';

import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { Interaction } from '@/types/friend';
import { Calendar, Phone, RectangleEllipsis, Video } from 'lucide-react';
import React, { useContext } from 'react'
import EmptyState from '../ui/EmptyState';

export default function History() {

const context = useContext(interactionHistoryContext);

  if (!context) return null;
  const { state } = context;
  // console.log(state);
  if (state.history.length === 0) return <EmptyState /> ;
  return (
   <>
   
   
    <div className="mx-auto max-w-(--breakpoint-sm) col-end-3 px-6 py-12 md:py-20">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {state.history.map((s: Interaction , index) => {

          const { name, action, time} = s;
          return (
            <div key={index} className="relative pb-12 pl-10">
              {/* Timeline Icon */}
              <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-background">
               {action === "call" ? <Phone className="h-5 w-5" /> : action === "text" ? <RectangleEllipsis className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              </div>

              {/* Content */}
              <div className="space-y-3 pt-2 sm:pt-1">
                <p className="font-medium text-base">{action}</p>

                <div>
                  <h3 className="font-medium text-xl tracking-[-0.01em]">
                    {name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{time}</span>
                  </div>
                </div>

                <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                  Led the development of enterprise-scale web applications, mentored junior
                  developers, and implemented best practices for code quality and performance
                  optimization.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </>
  )
}
