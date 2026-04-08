import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-[#10B981]" />,
  title = "Featured",
  description = "Discover amazing content",
  date,
  iconClassName,
  titleClassName,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-44 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border px-5 py-4 transition-all duration-500",
        // Dark card — readable on any page background
        "bg-editor border-[#10B981]/40",
        "hover:border-[#10B981]/80 hover:shadow-[0_0_32px_0px_#10B98144]",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      {/* HEADER */}
      <div>
        <span
          className={cn(
            "relative inline-flex shrink-0 items-center justify-center rounded-full",
            "bg-[#10B981]/20 text-[#10B981] p-2",
            iconClassName
          )}
        >
          {icon}
        </span>

        <p
          className={cn(
            "text-lg font-semibold text-[#10B981] leading-tight",
            titleClassName
          )}
        >
          {title}
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/80 leading-snug whitespace-normal block w-full">
        {description}
      </p>

      {/* DATE */}
      {date && (
        <p className="text-white/40 text-xs">{date}</p>
      )}
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {

  const defaultCards = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-100 before:absolute before:inset-0 before:rounded-xl before:bg-black/50 before:z-10 before:transition-opacity before:duration-500 hover:before:opacity-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-20 before:absolute before:inset-0 before:rounded-xl before:bg-black/30 before:z-10 before:transition-opacity before:duration-500 hover:before:opacity-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:-translate-y-10 before:absolute before:inset-0 before:rounded-xl before:bg-black/30 before:z-10 before:transition-opacity before:duration-500 hover:before:opacity-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-48 translate-y-30 hover:translate-y-2",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700  mt-20">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}