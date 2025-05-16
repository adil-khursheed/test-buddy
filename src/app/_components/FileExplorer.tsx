"use client";
import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import { Folders } from "./Folders";
import { folders } from "../../lib/constants";
import { useState } from "react";

export function FileExplorer() {
  return (
    <Sidebar open>
      <SidebarBody className="absolute right-0 z-20 bg-white/30 backdrop-blur-5xl rounded-r-3xl">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          <div className="text-xl mb-10">Folder Structure</div>
          <div
            className={`flex flex-col gap-2 border-${
              folders?.root?.length ? "2" : "0"
            }`}
          >
            {folders?.root?.map((f) => (
              <div key={f.id}>
                <Folders folder={f} />
              </div>
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
