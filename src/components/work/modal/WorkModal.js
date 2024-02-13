import React from "react";
import { motion } from "framer-motion";
import Skill from "../../skills/skill/Skill";
import "./WorkModal.css";

export default function WorkModal({ project, closeModal }) {
  const issueRef = React.useRef(null);
  const pullRef = React.useRef(null);

  if (!project) return null;

  const { title, about, tags, issue, image, site, code, pull } = project;

  return (
    <motion.div id="modal-card">
      <motion.button
        id="btn-close-modal"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => closeModal()}
      >
        <img src="images/ui/close.svg" alt="Close" />
      </motion.button>
      <img id="modal-image" src={`images/${image}`} alt={title} />
      <div id="modal-content">
        <div id="modal-info">
          <div>
            <h1 style={{ paddingLeft: "20px" }}>{title}</h1>
            <ul>
              {about.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div style={{ marginBottom: "1em" }}>
              {site && (
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn"
                >
                  View Project
                </a>
              )}
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
          {issue && (
            <div ref={issueRef} id="sample-issue">
              <h2>Example Issue</h2>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              {issue.objective && (
                <>
                  <h4>Objective</h4>
                  <ul>
                    {issue.objective.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <h4>Steps to Reproduce</h4>
              <ol>
                {issue.reproduce.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              <h4>Expected Behavior</h4>
              <p>{issue.expected}</p>
              <h4>Actual Behavior</h4>
              <p>{issue.actual}</p>
              <h4>Possible Solution</h4>
              <p>{issue.solution}</p>
              <h4>Environment</h4>
              <ul>
                {Object.entries(issue.environment).map(
                  ([key, value], index) => (
                    <li key={index}>
                      <span style={{ fontWeight: 600 }}>
                        {key.toUpperCase()}
                      </span>
                      : {value}
                    </li>
                  )
                )}
              </ul>
              {issue.plan && (
                <>
                  <h4>Implementation Plan</h4>
                  <ul>
                    {issue.plan.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {issue.impact && (
                <>
                  <h4>Impact</h4>
                  <p>{issue.impact}</p>
                </>
              )}
            </div>
          )}
          {pull && (
            <div ref={pullRef} id="sample-pull">
              <h2>Example Pull Request</h2>
              <h3>{pull.title}</h3>
              <p>{pull.description}</p>
              {pull.fix && (
                <>
                  <h4>Proposed Fix</h4>
                  <p>{pull.fix}</p>
                </>
              )}
              <h4>Changes Made</h4>
              <ul>
                {pull.changes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {pull.reference && (
                <>
                  <h4>Technical Reference</h4>
                  <p>{pull.reference}</p>
                </>
              )}
              <h4>How to Test</h4>
              <ol>
                {pull.test.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              {pull.code && (
                <>
                  <h4>Code</h4>
                  <code>
                    <pre>{pull.code.split("\\n").join("\n   ")}</pre>
                  </code>
                </>
              )}
              {pull.impact && (
                <>
                  <h4>Impact</h4>
                  <ul>
                    {pull.impact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {pull.notes && (
                <>
                  <h4>Notes</h4>
                  <p>{pull.notes}</p>
                </>
              )}
              <h4>Relevant Issue(s)</h4>
              <p>{pull.issue}</p>
            </div>
          )}
        </div>
        <ul id="modal-skills">
          {tags.split(",").map((tag, index) => (
            <Skill key={index} id={index} skill={tag} columns={1} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
