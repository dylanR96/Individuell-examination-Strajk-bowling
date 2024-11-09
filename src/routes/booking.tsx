import { createFileRoute } from "@tanstack/react-router";
import Booking from "../pages/Booking/Booking";

export const Route = createFileRoute("/booking")({
  component: () => <Booking />,
});
