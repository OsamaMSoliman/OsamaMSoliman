import type { ReactNode } from 'react';

interface IProps {
  tl: string /* top-left */;
  tr?: string /* top-right */;
  br?: string /* bottom-right */;
  bl?: string /* bottom-left */;
  children?: ReactNode;
}
export default function Grid4x4({ tr, tl, br, bl, children }: IProps) {
  return (
    <>
      <div className="flex justify-between font-bold">
        <p>{tl}</p>
        <p>{tr}</p>
      </div>
      <div className="flex justify-between font-bold">
        <p>{bl}</p>
        <p>{br}</p>
      </div>
      {children}
    </>
  );
}
