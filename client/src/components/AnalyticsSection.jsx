import SubjectTags from './SubjectTags';
import ResponseTime from './ResponseTime';
import ApproachData from './ApproachData';
import AccuracyChart from './AccuracyChart';
import TimeTaken from './TimeTaken';
import CompareAccuracy from './CompareAccuracy';
import Suggestions from './Suggestion'; // Import the CompareAccuracy component

function AnalyticsSection() {
  return (
    <div className="space-y-6">
      {/* First Row with 3 CompareAccuracy Components */}
      <div className="grid md:grid-cols-3 gap-6">
        <CompareAccuracy />
        <CompareAccuracy />
        <CompareAccuracy />
      </div>

      {/* Second Row with SubjectTags, ResponseTime, ApproachData, and CompareAccuracy */}
      <div className="grid md:grid-cols-4 gap-6">
        <SubjectTags />
        <ResponseTime />
        <ApproachData />
        <Suggestions />
      </div>

      {/* Third Row with AccuracyChart and TimeTaken using flex */}
      <div className="grid md:grid-cols-2 gap-6">
        <AccuracyChart className="flex-1" />
        <TimeTaken className="flex-1" />
      </div>
    </div>
  );
}

export default AnalyticsSection;
