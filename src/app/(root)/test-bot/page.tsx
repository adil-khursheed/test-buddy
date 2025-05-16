import { FileExplorer } from "@/app/_components/FileExplorer";
import { SideNavbar } from "@/app/_components/SideNavbar";
import { TestbotWindow } from "@/app/_components/TestbotWindow";

export default function TestBot() {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-[linear-gradient(to_right,_#e7d7f6,_#f4e9f9,_#deeefc)]">
      <SideNavbar />
      <TestbotWindow />
      <FileExplorer />
    </div>
  );
}
