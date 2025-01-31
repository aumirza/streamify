import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <header>
        <SidebarTrigger />
      </header>
      <main>
        <div className="">Hellow world</div>
      </main>
      <footer></footer>
    </SidebarProvider>
  );
}

export default App;
