import { ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowRight } from "lucide-react";

// Define props interface
interface InteractiveHoverButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

const InteractiveHoverButton = forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative w-40 text-primary cursor-pointer overflow-hidden rounded-2xl border-2 border-brand-accent bg-brand-accent p-3 text-center font-bold ${className}`}
        {...props}
      >
        {/* Default text (slides out on hover) */}
        <span
          className="inline-block translate-x-1 transition-all duration-300 
                     group-hover:translate-x-12 group-hover:opacity-0 
                     group-hover:text-black"
        >
          {text}
        </span>

        {/* Hover text + arrow (slides in) */}
        <div
          className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 
                     text-black font-bold opacity-0 transition-all duration-300 
                     group-hover:-translate-x-1 group-hover:opacity-100 
                     group-hover:text-white"
        >
          <span>{text}</span>
          <ArrowRight className="w-4 h-4 group-hover:text-white" />
        </div>

        {/* Expanding dot effect */}
        <div
          className="absolute left-[15%] top-[40%] h-2 w-2 rounded-full  bg-[#081725]  transition-all duration-300
                     group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full 
                     group-hover:rounded-full group-hover:scale-[1.8]"
        />
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };