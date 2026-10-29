import type { ButtonHTMLAttributes } from "react"

type LiquidButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function LiquidButton({
  children,
  className = "",
  type = "button",
  ...props
}: LiquidButtonProps) {
  return (
    <>
      <button
        className={`group/liquid relative isolate inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-slate-950 px-6 text-sm font-semibold whitespace-nowrap text-white shadow-[0_12px_32px_-14px_rgba(34,211,238,0.8)] transition-[transform,box-shadow,border-color] duration-300 outline-none select-none hover:border-violet-700 hover:shadow-[0_16px_40px_-12px_rgba(34,211,238,0.95)] focus-visible:border-cyan-200 focus-visible:ring-3 focus-visible:ring-cyan-300/35 active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45 disabled:shadow-none ${className}`}
        type={type}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute -inset-x-1/4 top-[98%] z-0 h-[190%] bg-gradient-to-b from-purple-400 via-violet-500 to-indigo-600 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/liquid:-translate-y-[58%] group-focus-visible/liquid:-translate-y-[58%] group-disabled/liquid:translate-y-0 motion-reduce:transition-none"
        >
          <span className="absolute top-0 left-1/2 size-[145%] -translate-x-1/2 -translate-y-1/2 [animation:liquid-button-wave_7s_linear_infinite] rounded-[43%] bg-slate-950/95 motion-reduce:animate-none" />
          <span className="absolute top-0 left-1/2 size-[135%] -translate-x-1/2 -translate-y-1/2 [animation:liquid-button-wave_5s_linear_infinite_reverse] rounded-[47%] bg-slate-950/45 motion-reduce:animate-none" />

          {/* <span
            className="absolute bottom-4 left-[22%] size-1.5 [animation:liquid-button-bubble_1.8s_ease-in_infinite] rounded-full bg-white/70 opacity-0 group-hover/liquid:opacity-100 group-disabled/liquid:hidden motion-reduce:hidden"
            style={{ animationDelay: "120ms" }}
          />
          <span
            className="absolute bottom-2 left-[48%] size-2 [animation:liquid-button-bubble_2.2s_ease-in_infinite] rounded-full bg-white/60 opacity-0 group-hover/liquid:opacity-100 group-disabled/liquid:hidden motion-reduce:hidden"
            style={{ animationDelay: "520ms" }}
          /> */}
          <span
            className="absolute bottom-5 left-[72%] size-1 [animation:liquid-button-bubble_1.6s_ease-in_infinite] rounded-full bg-white/80 opacity-0 group-hover/liquid:opacity-100 group-disabled/liquid:hidden motion-reduce:hidden"
            style={{ animationDelay: "860ms" }}
          />
        </span>

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-x-5 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      </button>

      <style>{`
        @keyframes liquid-button-wave {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes liquid-button-bubble {
          0% { opacity: 0; transform: translateY(0) scale(0.7); }
          18% { opacity: 0.75; }
          100% { opacity: 0; transform: translateY(-4.5rem) scale(1.15); }
        }
      `}</style>
    </>
  )
}

export { LiquidButton }
export type { LiquidButtonProps }
