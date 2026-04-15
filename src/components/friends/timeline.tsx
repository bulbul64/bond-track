'use client';

import { Calendar, Phone, RectangleEllipsis, Video } from 'lucide-react';
import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { useContext, useState } from 'react';
import { Interaction } from '@/types/friend';
import { Button } from '../ui/button';



export default function Timeline() {


  const context = useContext(interactionHistoryContext);

  const [selectedFilter, setSelectedFilter] = useState('all');

    const activeBtn = (value: string) => {
    setSelectedFilter(value);
  }

  if (!context) return null;
  const { state } = context;
const filterText = [{
  label: "All",
  value: "all"
},
{
  label: "Call",
  value: "call"
},
{
  label: "Text",
  value: "text"
},
{
  label: "Video",
  value: "video"
}]

const filteredHistory = state.history.filter((item) => {
  return selectedFilter === "all" || item.action === selectedFilter;
});

  return (
    <div className=" max-w-(--breakpoint-sm) col-end-3 px-6 py-12 md:py-20">
         <div className="mb-6 flex items-center gap-2 rounded-xl border bg-background p-2 w-fit">

          {filterText.map((filter) => (
            <Button
             onClick={() => activeBtn(filter.value)}
             className='cursor-pointer'
             variant={`${selectedFilter === filter.value ? "default" : "outline"}`}
             key={filter.value}>
              {filter.label}
            </Button>
          ))}
        </div>
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {filteredHistory.map((s: Interaction , index) => {

          const { name, action, time} = s;
          return (
            <div key={index} className="relative pb-12 pl-10">
              {/* Timeline Icon */}
              <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-background">
               {action === "call" ? <Phone className="h-5 w-5" /> : action === "text" ? <RectangleEllipsis className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              </div>

              {/* Content */}
              <div className="space-y-3 pt-2 sm:pt-1">
                <p className="font-medium text-base"> {action} with {name}</p>

                <div>
                  <h3 className="font-medium text-xl tracking-[-0.01em]">
                    {name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
