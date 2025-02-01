import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import { store } from "@/store";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SidebarProvider>
          <AppRoutes />
        </SidebarProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
