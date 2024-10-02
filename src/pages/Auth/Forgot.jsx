import React, { useState } from "react";

const Forgot = () => {
  let [emailUsername, setEmailUsername] = useState("");

  let handleForget = (e) => {
    e.preventDefault();

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailUsername }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or email");
        }
        return response.json();
      })
      .then((data) => {
        data
          ? alert("Reset link sent to your registered email.")
          : alert("Email or Username does not exists");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            Forgot Your Password?
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mt-4">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="border-4 border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 w-full max-w-md">
          <form onSubmit={handleForget} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Username or Email
              </label>
              <input
                type="text"
                id="email"
                value={emailUsername}
                onChange={(e) => setEmailUsername(e.target.value)}
                placeholder="Username or Email"
                className="block w-full px-4 py-3 border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-950 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150"
            >
              Verify
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Didn't receive the mail?{" "}
                <button
                  onClick={handleForget}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Resend
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgot;
