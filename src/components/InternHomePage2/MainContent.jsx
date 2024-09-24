import Suggestions from './Suggestions';
import JobList from './JobList';

const MainContent = () => {
  return (
    <main className="flex-1 p-4">
      <Suggestions />
      <div className="bg-blue-200 p-4 mt-4 text-center">
        <h2 className="font-bold">Keep Connected And Embrace New Internship Opportunities</h2>
        <p>Connection breeds opportunity. Stay linked, stay open.</p>
      </div>

      {/* Job List assign to Avinash */}
      <JobList />
    </main>
  );
};

export default MainContent;
