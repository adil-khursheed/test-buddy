// import {folders} from '../../lib/constants'
"use client";
import { ArrowBigDown, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Folders({ folder }: any) {
  const [openFolder, setOpenFolder] = useState(false);
  if (folder.isFolder === true) {
    return (
      <div key={folder.id}>
        <div
          className="flex items-center cursor-pointer truncate"
          onClick={() => setOpenFolder(!openFolder)}
        >
          {folder.files.length && !openFolder ? (
            <ChevronRight size={20} />
          ) : folder.files.length ? (
            <ChevronDown size={20} />
          ) : (
            ""
          )}
          📂{folder.name}
        </div>
        {folder.files.map(
          (f: any) =>
            openFolder && (
              <div className="pl-10" key={f.id}>
                <Folders folder={f} />
              </div>
            )
        )}
      </div>
    );
  } else return <div className="cursor-pointer truncate">📝{folder.name}</div>;
}
