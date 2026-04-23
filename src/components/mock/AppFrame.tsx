import type { ReactNode } from "react";

interface AppFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
  url?: string;
}

/** Premium 2D app window chrome. Used to frame all product screenshots. */
export const AppFrame = ({ children, className = "", title = "BusniessHub Workspace", url = "app.busnieshub.com" }: AppFrameProps) => {
  return (
    <div className={`app-frame ${className}`}>
      <div className="app-frame-bar">
        <span className="app-dot" />
        <span className="app-dot" />
        <span className="app-dot" />
        <div className="flex-1 flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-mono tracking-wide">
          <span className="opacity-60">⌘</span>
          <span>{url}</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default AppFrame;
