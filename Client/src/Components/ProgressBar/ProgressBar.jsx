import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  { id: '02', name: 'Application Form', description: 'Cursus semper viverra.', href: '#', status: 'complete' },
  { id: '03', name: 'Skills Assessment', description: 'Penatibus eu quis ante.', href: '#', status: 'current' },
  { id: '04', name: 'Interview', description: 'Consectetur adipiscing elit.', href: '#', status: 'upcoming' },
  { id: '05', name: 'Offer', description: 'Finis coronat opus.', href: '#', status: 'upcoming' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProgressBar() {
  const handleNextClick = () => {
    // Add your logic for the next button click here
    console.log('Next button clicked');
  };

  return (
    <div className="bg-blue-50 p-8  flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Application Progress</h2>
        <div className="lg:border-b lg:border-t lg:border-gray-200">
          <nav aria-label="Progress" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol
              role="list"
              className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
            >
              {steps.map((step, stepIdx) => (
                <li key={step.id} className="relative overflow-hidden lg:flex-1">
                  <div
                    className={classNames(
                      stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                      stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                      'overflow-hidden border border-gray-200 lg:border-0',
                    )}
                  >
                    {step.status === 'complete' ? (
                      <a href={step.href} className="group">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        />
                        <span className="flex flex-col items-center px-6 py-5 text-sm font-medium">
                          <span className="flex-shrink-0 mb-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                              <CheckIcon className="h-6 w-6 text-white" />
                            </span>
                          </span>
                          <span className="text-center">
                            <span className="text-sm font-medium">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500 block">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    ) : step.status === 'current' ? (
                      <a href={step.href} aria-current="step">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        />
                        <span className="flex flex-col items-center px-6 py-5 text-sm font-medium">
                          <span className="flex-shrink-0 mb-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                              <span className="text-indigo-600">{step.id}</span>
                            </span>
                          </span>
                          <span className="text-center">
                            <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500 block">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    ) : (
                      <a href={step.href} className="group">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        />
                        <span className="flex flex-col items-center px-6 py-5 text-sm font-medium">
                          <span className="flex-shrink-0 mb-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                              <span className="text-gray-500">{step.id}</span>
                            </span>
                          </span>
                          <span className="text-center">
                            <span className="text-sm font-medium text-gray-500">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500 block">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    )}

                    {stepIdx !== 0 ? (
                      <>
                        {/* Separator */}
                        <div aria-hidden="true" className="absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                          <svg
                            fill="none"
                            viewBox="0 0 12 82"
                            preserveAspectRatio="none"
                            className="h-full w-full text-gray-300"
                          >
                            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                          </svg>
                        </div>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={handleNextClick} className="bg-indigo-600 text-white hover:bg-indigo-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}