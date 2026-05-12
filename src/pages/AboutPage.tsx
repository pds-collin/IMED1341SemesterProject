import { Profile } from '../components/Profile.tsx';
import { Terminal } from '../components/Terminal.tsx';
import { ExperienceTimeline } from '../components/ExperienceTimeline.tsx';
import { resumeCodeText } from '../Constants.ts';
import { profilePicture } from "../Constants.ts";

export function AboutPage() {
    return (
        <>
            <section className="card-section">
                <Profile
                    image={profilePicture}
                    imageAlt={"A portrait of Preston Sparks"}
                    name="Preston Sparks"
                    title="Software Engineer"
                >
                    <p>
                        I am an engineer based in North Texas with eight years of
                        professional experience building and maintaining software systems across a range of states in
                        the development lifecycle and sixteen years of experience as a software hobbyist. I progressed
                        from an aimless teenager to a lead software engineer in one of the most inefficient and
                        unconventional routes possible. From dropping out of high school to slaving away as an
                        electrician to starting over and embracing the opportunities that presented themselves.
                    </p>
                </Profile>
            </section>

            <div id="layout">
                <div className="terminal-column">
                    <Terminal>{resumeCodeText}</Terminal>
                </div>
                <div className="content-column">
                    <ExperienceTimeline />
                </div>
            </div>
        </>
    );
}