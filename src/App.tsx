
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Scope from "./pages/Scope";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AboutJournal from "./pages/journal/AboutJournal";
import AimScope from "./pages/journal/AimScope";
import EditorialBoard from "./pages/journal/EditorialBoard";
import Archives from "./pages/journal/Archives";
import AuthorGuidelines from "./pages/journal/AuthorGuidelines";
import PublicationEthics from "./pages/journal/PublicationEthics";
import PublisherDetails from "./pages/journal/PublisherDetails";
import JournalInfo from "./pages/journal/JournalInfo";
import BgjcssrAbout from "./pages/bgjcssr/AboutJournal";
import BgjcssrJournalInfo from "./pages/bgjcssr/JournalInfo";
import BgjcssrArchives from "./pages/bgjcssr/Archives";
import BgjcssrMission from "./pages/bgjcssr/MissionObjectives";
import BgjcssrAimScope from "./pages/bgjcssr/AimScope";
import BgjcssrEditorialBoard from "./pages/bgjcssr/EditorialBoard";
import BgjcssrContact from "./pages/bgjcssr/JournalContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          {/* Journal Routes */}
          <Route path="/journal/about" element={<AboutJournal />} />
          <Route path="/journal/aim-scope" element={<AimScope />} />
          <Route path="/journal/editorial-board" element={<EditorialBoard />} />
          <Route path="/journal/archives" element={<Archives />} />
          <Route path="/journal/author-guidelines" element={<AuthorGuidelines />} />
          <Route path="/journal/publication-ethics" element={<PublicationEthics />} />
          <Route path="/journal/publisher-details" element={<PublisherDetails />} />
          <Route path="/journal/journal-info" element={<JournalInfo />} />
          <Route path="*" element={<NotFound />} />
          {/* BGJCSSR Routes */}
          <Route path="/bgjcssr/about"          element={<BgjcssrAbout />} />
          <Route path="/bgjcssr/journal-info"   element={<BgjcssrJournalInfo />} />
          <Route path="/bgjcssr/archives"       element={<BgjcssrArchives />} />
          <Route path="/bgjcssr/mission"        element={<BgjcssrMission />} />
          <Route path="/bgjcssr/aim-scope"      element={<BgjcssrAimScope />} />
          <Route path="/bgjcssr/editorial-board" element={<BgjcssrEditorialBoard />} />
          <Route path="/bgjcssr/contact"        element={<BgjcssrContact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
