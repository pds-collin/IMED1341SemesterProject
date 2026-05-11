import './App.css'
import { resumeCodeText, resumeData } from "./Constants.ts";
import { Terminal } from "./components/Terminal.tsx";
import { Card } from "./components/Card.tsx";

function App() {
    return (
        <div id="layout">
            <div className="terminal-column">
                <Card>
                    <Terminal>{resumeCodeText}</Terminal>
                </Card>
            </div>

            <div className="content-column">
                <section className="resume-section">
                    <h2>Skills</h2>
                    {Object.entries(resumeData.skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <div className="skill-tags">
                                {items.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                <section className="resume-section">
                    <h2>Experience</h2>
                    {resumeData.experience.map((job, i) => (
                        <div key={i} className="experience-item">
                            <div className="experience-header">
                                <span className="experience-role">{job.role}</span>
                                <span className="experience-period">{job.period}</span>
                            </div>
                            <ul className="experience-highlights">
                                {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="resume-section">
                    <h2>Currently Learning</h2>
                    <div className="skill-tags">
                        {resumeData.currentlyLearning.map(item => (
                            <span key={item} className="skill-tag">{item}</span>
                        ))}
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Reading List</h2>
                    <ul className="reading-list">
                        {resumeData.readingList.map((book, i) => <li key={i}>{book}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default App
