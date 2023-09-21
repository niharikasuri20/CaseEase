import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaseApplication = () => {
  const [Type, setType] = useState("Client");
  return (
    <div>
      <div className="m-10">
        <h1 className="text-center text-xl font-bold tracking-tight text-primary sm:text-4xl">
          Case Application
        </h1>
        <form className="mt-10">
          <div className="space-y-12">
            {Type === "Client" ? (
              <>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Case Details
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Kindly provide the necessary details required for
                      generating the application
                    </p>
                  </div>
                  <div className="max-w-2xl space-y-10 md:col-span-2">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Case Category
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please select a category as per your case:
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="push-everything"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Civil
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="push-email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Criminal
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Corporate
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Case Description
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Describe your case
                    </p>
                  </div>
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <div className="col-span-6">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-primary font-bold"
                        >
                          Case Description
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className=" w-full">
                        <Link to="/Dashboard_client">
                        <button
                        className="flex mx-auto text-amber-100 font-bold bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                      >
                        Submit
                      </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Notifications
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We will always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>
                </div>

                <div className="max-w-2xl space-y-10 md:col-span-2">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-900"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-900"
                          >
                            Candidates
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-900"
                          >
                            Offers
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseApplication;
