import { createFileRoute } from "@tanstack/react-router";
import Confirmation from "../pages/Confirmation/Confirmation";

export const Route = createFileRoute("/confirmation")({
  component: () => <Confirmation />,
});
