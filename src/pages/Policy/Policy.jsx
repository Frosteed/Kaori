import React from 'react'
import { policyText } from './data'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Policy.css'
const Policy = () => {
    return (
        <>
        <div className="container policy">
            <h2>Privacy Policy</h2>
            {/* ------------ Policys -------------- */}

            <ReactMarkdown>{policyText}</ReactMarkdown>

            </div>
        </>
    )
}

export default Policy