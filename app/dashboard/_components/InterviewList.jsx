"use client";
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../utils/db';
import { aiInterview } from '../../../utils/schema';
import { desc, eq } from 'drizzle-orm';  // Import the eq function

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
        setLoading(false);
        setError('User email not available');
        console.error("User email not available.");
        return;
      }

      console.log("User Email:", user.primaryEmailAddress.emailAddress);

      // Use `eq` for comparing the email in the `where` clause
      const result = await db
        .select()
        .from(aiInterview)
        .where(eq(aiInterview.createdBy, user.primaryEmailAddress.emailAddress))  // Correct comparison
        .orderBy(desc(aiInterview.id));

      console.log("Fetched Interview List:", result);

      setInterviewList(result);
      setLoading(false);
    } catch (error) {
      setError('Error fetching interview list');
      console.error('Error fetching interview list:', error);
      setLoading(false);
    }
  };

  // Handle loading and error states
  if (loading) {
    return <div>Loading interviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="font-medium text-2xl">Previous Mock Interviews:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interviewList && interviewList.length > 0 ? (
          interviewList.map((interview, index) => (
            <div key={index} className="border shadow-sm p-4 rounded-md">
              <h2 className="font-bold text-lg">{interview?.jobPosition}</h2>
              <h2 className="text-sm text-gray-600">{interview?.jobExperience} Years of Experience</h2>

              <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <a href={`dashboard/interview/${interview?.mockID}/start`} className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Reinterview
                  </button>
                </a>

                <a href={`dashboard/interview/${interview?.mockID}/feedback`} className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Feedback
                  </button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No interviews found</p>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
