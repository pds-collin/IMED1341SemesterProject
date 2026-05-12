import { Card } from './Card.tsx';
import { resumeData } from '../Constants.ts';

export function ExperienceTimeline() {
    return (
        <section className="resume-section">
            <h2>Experience</h2>
            <div className="timeline">
                {resumeData.experience.map((job, i) => (
                    <Card
                        key={i}
                        timeline
                        title={job.role}
                        subtitle={job.company}
                        footer={job.period}
                        className="experience-entry"
                    >
                        <ul className="experience-highlights">
                            {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                        </ul>
                    </Card>
                ))}
            </div>
        </section>
    );
}