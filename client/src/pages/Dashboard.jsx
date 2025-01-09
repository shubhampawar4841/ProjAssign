import Navbar from '../components/Navbar';
import ResultCard from '../components/ResultCard';
import AnalyticsSection from '../components/AnalyticsSection';

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-300">
      <Navbar />
      <main className="container mx-auto p-6 grid lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-1">
          <ResultCard />
        </div>
        
        {/* Right Section */}
        <div className="lg:col-span-3 space-y-6">
          <AnalyticsSection />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
