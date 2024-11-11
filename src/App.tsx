import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { ResponseDataProvider } from "./providers/ResponseDataContext";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ResponseDataProvider>
      <RouterProvider router={router} />
    </ResponseDataProvider>
  );
}

export default App;
