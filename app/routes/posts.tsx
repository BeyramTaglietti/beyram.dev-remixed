import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <div className="p-10 prose-p:my-4 prose-strong:text-orange-400 prose-a:font-bold prose-a:text-blue-400 prose-a:underline prose-li:list-disc prose-code:bg-primary prose-code:px-4 prose-code:py-2 prose-code:rounded prose-img:w-full">
      <Outlet />
    </div>
  );
}