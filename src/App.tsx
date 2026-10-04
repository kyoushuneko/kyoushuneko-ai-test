import React, { useState } from 'react';
import { NavTab, ShowcaseModel } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { StlGalleryView } from './views/StlGalleryView';
import { GamesRulesView } from './views/GamesRulesView';
import { MerchantDirectoryView } from './views/MerchantDirectoryView';
import { PatronHubView } from './views/PatronHubView';
import { PatreonTribesModal } from './components/PatreonTribesModal';
import { FreeStlModal } from './components/FreeStlModal';
import { ModelDetailModal } from './components/ModelDetailModal';
import { RulebookModal } from './components/RulebookModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isPatreonModalOpen, setIsPatreonModalOpen] = useState(false);
  const [isFreeStlModalOpen, setIsFreeStlModalOpen] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [selectedShowcaseModel, setSelectedShowcaseModel] = useState<ShowcaseModel | null>(null);
  const [isRulebookModalOpen, setIsRulebookModalOpen] = useState(false);

  const handleSubscribeLeadMagnet = (email: string) => {
    setSubscriberEmail(email);
    setIsFreeStlModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-body selection:bg-[#e02020] selection:text-white">
      {/* Permanent Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
      />

      {/* Main Content Area switching between the 5 views */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomeView
            onTabChange={setActiveTab}
            onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
            onOpenModelDetail={(model) => setSelectedShowcaseModel(model)}
            onSubscribeLeadMagnet={handleSubscribeLeadMagnet}
          />
        )}

        {activeTab === 'stl-gallery' && (
          <StlGalleryView
            onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
          />
        )}

        {activeTab === 'games-rules' && (
          <GamesRulesView
            onOpenRulebookModal={() => setIsRulebookModalOpen(true)}
            onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
          />
        )}

        {activeTab === 'merchant-directory' && (
          <MerchantDirectoryView
            onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
          />
        )}

        {activeTab === 'patron-hub' && (
          <PatronHubView
            onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
            onOpenRulebookModal={() => setIsRulebookModalOpen(true)}
          />
        )}
      </main>

      {/* Studio Global Footer */}
      <Footer
        onTabChange={setActiveTab}
        onOpenPatreonModal={() => setIsPatreonModalOpen(true)}
      />

      {/* Interactive Modals */}
      <PatreonTribesModal
        isOpen={isPatreonModalOpen}
        onClose={() => setIsPatreonModalOpen(false)}
      />

      <FreeStlModal
        isOpen={isFreeStlModalOpen}
        onClose={() => setIsFreeStlModalOpen(false)}
        subscriberEmail={subscriberEmail}
      />

      <ModelDetailModal
        model={selectedShowcaseModel}
        onClose={() => setSelectedShowcaseModel(null)}
        onOpenPatreonModal={() => {
          setSelectedShowcaseModel(null);
          setIsPatreonModalOpen(true);
        }}
      />

      <RulebookModal
        isOpen={isRulebookModalOpen}
        onClose={() => setIsRulebookModalOpen(false)}
      />
    </div>
  );
}
