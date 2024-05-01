import Resume from "@/components/resume";
import ResumeForm from "@/components/resumeForm";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <main>
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel minSize={25}>
          <ResumeForm />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={25} className="h-full">
          <Resume />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
