import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppFrame from "@/components/mock/AppFrame";
import DashboardMock from "@/components/mock/DashboardMock";

const AppPlaceholder = () => {
  return (
    <div className="min-h-screen bg-surface-1 text-foreground p-6 md:p-10">
      <div className="container-edge">
        <Link to="/" className="text-xs text-muted-foreground inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Back to BusniessHub</Link>
        <div className="num-tag mt-6">Workspace · preview</div>
        <h1 className="h-section mt-2">A glimpse of the operator workspace.</h1>
        <p className="text-sm text-muted-foreground mt-3 max-w-2xl">This is a static preview of BusniessHub. Full sign-in and live workspace access is granted during onboarding.</p>
        <div className="mt-10">
          <AppFrame>
            <DashboardMock />
          </AppFrame>
        </div>
      </div>
    </div>
  );
};

export default AppPlaceholder;
