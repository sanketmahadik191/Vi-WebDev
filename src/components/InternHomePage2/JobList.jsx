import JobCard from './JobCard';

const JobList = () => {
  const jobs = [
    { title: 'UI/UX Designer', salary: '₹10,000 - ₹15,000', location: 'Mumbai', type: 'Paid' },
    { title: 'UI Designer', salary: 'Unpaid', location: 'Mumbai', type: 'Unpaid' },
    { title: 'Animator', salary: '₹5,000', location: 'Mumbai', type: 'Paid' },
    // Add more jobs here
  ];

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="font-bold text-xl mb-4">Showing 0 Results</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
