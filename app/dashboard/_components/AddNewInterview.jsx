"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { chatSession } from '../../../utils/GeminiAIModel';
import { LoaderCircleIcon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '../../../utils/db';
import { aiInterview } from '../../../utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDes, setJobDes] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [numQuestions, setNumQuestions] = useState(process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT);
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const inputPrompt = `
      You are an AI specialized in generating interview questions.
      Based on the following details, generate a list of interview questions and answers in JSON format:
      - Job Position: ${jobPosition}
      - Job Description: ${jobDes}
      - Years of Experience: ${jobExperience}
      - Number of Questions: ${numQuestions}

      Provide the output in JSON format only. Do not include any text outside the JSON.
      JSON should be strictly in format - [{..},{..}] . which is array of objects not individual arrays containing a single object
    `;

    try {
      const result = await chatSession.sendMessage(inputPrompt);
      const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      setJsonResponse(mockJsonResp);

      if (mockJsonResp) {
        const resp = await db.insert(aiInterview).values({
          mockID: uuidv4(),
          jsonAIResp: mockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDes,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY')
        }).returning({ mockId: aiInterview.mockID });

        if (resp) {
          setOpenDialog(false);
          router.push('/dashboard/interview/' + resp[0]?.mockId);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      {/* Add New Button */}
      <div className="p-8 border rounded-lg bg-blue-500 text-white hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer w-64 text-center" onClick={() => setOpenDialog(true)}>
        <h2 className="text-lg font-semibold">+ Add New Interview</h2>
      </div>

      {/* Dialog Box */}
      <Dialog open={openDialog}>
        <DialogContent className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">Add New Interview Details</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Job Role */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Job Role / Job Position</label>
                  <Input
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="e.g., Web Developer"
                    required
                    onChange={(e) => setJobPosition(e.target.value)}
                  />
                </div>

                {/* Job Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Job Description</label>
                  <Textarea
                    className="w-full border-gray-300 rounded-lg p-2"
                    placeholder="e.g., Tech Stack - React, Angular, NodeJS"
                    required
                    onChange={(e) => setJobDes(e.target.value)}
                  />
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                  <Input
                    className="w-full border-gray-300 rounded-lg p-2"
                    type="number"
                    placeholder="e.g., 2"
                    required
                    max="40"
                    onChange={(e) => setJobExperience(e.target.value)}
                  />
                </div>

                {/* Number of Questions */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
                  <Input
                    className="w-full border-gray-300 rounded-lg p-2"
                    type="number"
                    placeholder="e.g., 5"
                    min="1"
                    required
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(e.target.value)}
                  />
                </div>

                {/* Submit / Cancel Buttons */}
                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="ghost"
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all flex items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <LoaderCircleIcon className="animate-spin h-5 w-5 mr-2" />
                        Generating...
                      </>
                    ) : (
                      'Start Interview'
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
