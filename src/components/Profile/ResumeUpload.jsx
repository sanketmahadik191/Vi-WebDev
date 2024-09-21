import React from 'react'

const ResumeUpload = ({ resumeUpload, handleFileChange, userFiles, setresumeUpload, setuserFiles }) => {
    return (
        <>
            <div className="grid grid-cols-1 rounded-lg border-2 mt-16 border-gray-300 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg"></div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8 text-base sm:text-lg">
                <label className=" mb-0 font-semibold text-gray-800">
                    Upload Resume
                    <br />
                    <p className="font-light text-sm">
                        Employers can download and view this resume
                    </p>
                </label>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-resume-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 light:hover:bg-gray-800 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="mb-2 text-sm text-gray-500 light:text-gray-400">
                                <span className="font-semibold">Upload File</span> or
                                drag and drop
                            </p>
                        </div>
                        <input
                            id="dropzone-resume-file"
                            type="file"
                            onChange={(e) => handleFileChange(e, false)}
                            accept="image/png, image/jpeg, .pdf, .doc, .docx"
                            className="hidden"
                        />
                    </label>
                </div>
                <p className="font-light text-sm">
                    Max file size: 10Mb. File type - PDF, DOC, DOCX, PNG, JPEG
                </p>
                {resumeUpload ? (
                    <div className="flex items-center">
                        <p>
                            ✅ -{" "}
                            <a
                                className="underline"
                                href={resumeUpload}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {userFiles.resume.fileName}
                            </a>{" "}
                        </p>

                        <button
                            className="w-5 ml-2"
                            onClick={() => {
                                setresumeUpload(null);
                                setuserFiles((prev) => ({ ...prev, resume: {} }));
                            }}
                        >
                            ❌
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default ResumeUpload