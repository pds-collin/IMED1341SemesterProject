import {useState} from 'react';
import {Collection} from '../components/Collection.tsx';
import {resumeData} from '../Constants.ts';

interface Step {
    number: string;
    title: string;
    body: string;
    readingList?: boolean;
}

const steps: Step[] = [
    {
        number: '01',
        title: 'Be Curious',
        body: `Curiosity and a computer are the only prerequisites. You don't need a degree. You don't need a background 
        in mathematics or robotics. You don't need to know the 7 layers of the OSI model. You don't need to 
        know how a browser works. You don't need to know how a microprocessor operates. You don't even need to know what a 
        programming language is. All you need is the curiosity to look under the hood and a little fascination with how
        the magic box that sits on your desk and acts as a window into all of the people and places on the earth that 
        aren't right there with you. If you are looking at this page, you are just a few clicks and keystrokes away from
         asking the question that could be the beginning of your journey into being a builder. There has never been a 
         single human since the invention of computer programming that began as an expert and likely not even a competent
          programmer. All it takes is asking the question of how it works and digging a little deeper to figure it out. 
          It could just be a blank HTML page. It could just be a c++ program that prints "Hello World." It could just 
          be as simple as opening that little black box called a terminal and typing in random words until it recognizes
           one. All you have to do is be curious.`,
    },
    {
        number: '02',
        title: 'Be Willing to Fail',
        body: `Any programmer will tell you about the first time they attempted to print "Hello World" to the screen. 
        Many of them will tell you all about this application that they built to trivialize their mundane tasks or about
         large scale systems that power grotesque amounts of transactions or masses of users which their systems handled
          with absolute grace. Unless you ask them about it directly, fewer would be willing to admit the frantic late 
          night that they spent trying to debug a completely offline system for hours on end, shaking from excess caffeine,
          only to find that they've looked in a thousand places and just discovered that there was a typo so obvious that
          the next person to look at that code would spot it in a few seconds. Or about how they spent months perfecting 
          their application only to realize that somebody has already done it and they did it way better. Another example
          is building an application that you think is awesome and fills you with pride when you see people using it only
          to find out 6 years later that it actually had a bug that would cost you nearly a month of time to repair the 
          historical data that it corrupted and people suddenly had a desire to use. I'm not saying this as a motivational
          poster candidate. I'm listing these examples as things that I have had to personally endure and the key 
          takeaway was that in each instance, I learned yet another way to not do things. Failure isn't just a possibility,
          it is an absolute guarantee. It's how you perceive those failures that determines whether or not you can succeed.
          If you broke the website and then stride through the depths of hell to get it back online, you have succeeded.`,
    },
    {
        number: '03',
        title: 'Break Stuff',
        body: `I remember that as a child I would constantly take apart my toys and attempt to put them back together. I 
        was rarely able to get them to function as they did before I took them apart but I did learn how to essentially 
        break things and reassemble them. I feel like this is one of the most fundamental parts of discovery for the human
        brain. Seeing things for more than just the sum of their parts is a necessity when it comes to software. In a 
        sense, software development is like being a surgeon where you can kill your patients as many times as needed to 
        figure out how to make a heart beat. The main difference is that nobody bats an eye when your program dies on the
        operating table. Sometimes, you need to write an infinite loop with a memory leak just to see that it does in fact
        freeze your computer. I remember intentionally doing this when I first learned about memory allocation in c++. If
        you want to transfer a file to a webserver with a CLI command, sometimes, the best thing you can do is just hit 
        enter and see the error message. Sometimes, you want to see if your application can handle the concurrent throughput
        of a small country so you write a program to stress test your other program. If you never break anything, you 
        will always assume that it either can't be broken or that everything that you don't know could break it. It's all
        about testing limits.`,
    },
    {
        number: '04',
        title: 'Follow Good Examples',
        body: `While I have generally taught myself how to build software alone in my room at all hours of the night, I 
        did it using the documentation and tutorials created by those who knew more about the topic. I think it's a good
        practice to have heroes in everything that you are passionate about and the world of technology has no shortage 
        of good examples to look up to. Whether you want to idolize Ada Lovelace for writing a program before computers 
        even existed, or you want to worship Grace Hopper for inventing the compiler, or you want to imagine what it would
        have been like to look over the shoulders of Dennis Ritchie and Ken Thompson as they created the C language or Unix,
         it's always a good idea to build on the lessons that they learned for us. Abstraction is core part of software 
         engineering and for good reason. Imagine having to write ones and zeroes just to get a little light to turn on 
         or pushing a cart full of punch cards to the massive room whose only purpose is to house the machine that can 
         the program on them to carry out long division. You can find good examples everywhere and most of them don't pop
         up when you type their name into Wikipedia. Hell, many of them aren't even programmers. I have learned more from
         the people who saw me struggling to figure out the logic in a function and took the time to show me the light. 
         Mentors are one of the most valuable things in life and not everyone is willing to spend countless hours with 
         you to build your personal and professional skills so don't take them for granted.`,
    },
    {
        number: '05',
        title: 'Master One Thing at a Time',
        body: `The urge to learn everything is real, and it will paralyze you. Pick one language. Pick one framework. Go
         so deep into it that you feel like you could write it from memory. The reality is that 
         there are certain concepts that you can only learn when it's the last thing to learn about a language. Imagine 
         trying to be a professional athlete in every sport. Sure, you might be natural, and you might be pretty good at 
         everything, but you won't have mastered any of them. It will get to a point that you find the thing that you've
         mastered so trivial that it's boring. This is the point at which you are fully equipped to easily learn the rest
         of the technologies. I like the saying that "every programming language you pick up is easier to learn than the 
         last one." This is true in the sense that if you master c++, picking up TypeScript isn't an exercise in learning
         loops, variables, and functions. It's a matter of, "ok, this is a new programming language, it has most of the 
         same stuff as the other one, I just need to see how this language does it." I like to think of programming 
         languages the same way that I think about spoken languages. Each has its own dialect, its own roots, and like 
         spoken language, they all have a word to describe the thing you are looking at.`,
    },
    {
        number: '06',
        title: 'Develop Impostor Syndrome',
        body: `This sounds like bad advice, but hear it out. Impostor syndrome means you feel like you are surrounded by 
        people who know more than you, in a field that moves faster than you can keep up with. That's exactly where you 
        want to be every once in a while. The moment you stop feeling like you're behind is the moment you've stopped 
        growing. Wear it as a sign you're in the right room. At the same time, don't let the feeling of existential dread
        consume you. Remember that these people who you feel know everything that you don't also didn't know it at some 
        point. Impostor syndrome is your brain telling you that you are aware enough to know a lot of things but honest
        enough with yourself to admit that you don't know everything. If someone claims they've never felt it in this 
        field, odds are, you probably don't want to copy their homework.`,
    },
    {
        number: '07',
        title: 'Teach Someone Else',
        body: `You don't truly understand something until you can explain it to someone else. Find a junior developer, 
        a curious friend, or a rubber duck. It doesn't matter. The act of teaching forces you to confront the gaps in 
        your own understanding and close them. Every explanation you give makes you better. The term "rubber ducking" 
        originates in the practice of hitting a difficult problem and describing what you are doing to a literal rubber
         duck sitting on your desk. As comical as it sounds, it is a tradition that has carried on for several generations
         of programmers. Sometimes, "rubber ducking" is just calling a coworker on Slack, sharing your screen, and just 
         talking through the problem. I have personally started so many calls that lasted less than a minute just to end 
         with "oh, hey, nevermind. I found the problem." Once you've done this enough times, you get to be the rubber duck
         that your junior developers turn to when they are stuck. This is my favorite part of this profession. When I get
         the chance sit in with a developer to help them through a problem, it reinforces my knowledge about it while
         providing them with new insight. There's something special about seeing one of your pupils struggle through an 
         issue that you hit years ago knowing that you can coax them through it with a little experience.`,
    },
    {
        number: '08',
        title: 'Keep Learning',
        body: `The field doesn't stop moving because you got comfortable. New patterns emerge, old approaches get 
        replaced, and the tools change every few years. Read books. Read documentation. Read other people's code. Build 
        something new in a language you overheard somebody talking about at the water cooler. Curiosity got you here and 
        its what will keep you moving forward. Everybody has different ways in which they learn best. Some prefer 
        classrooms, some prefer stack overflow, some prefer YouTube videos or Pluralsight series, some prefer interactive
        sites like Codecademy, and some people like the good old fashioned paperback covered with somebody else's footnotes.
        I've included some of the books that I've found the most useful in my journey in no particular order as well as 
        a personal favorite novel that I keep as a reminder to take a break from staring at a terminal all day.`,
        readingList: true,
    },
    {
        number: '09',
        title: 'Retrospect',
        body: `Every few months, look back. Where were you a year ago? What do you understand now that would have 
        confused your past self? Measuring backwards is how I stay motivated when progress feels slow. You are always 
        further along than you were a year ago if you are putting in effort. If you've made it this far, you will have 
        certainly encountered a piece of code you wrote years ago and say to yourself, "what in the hell was I thinking
        when I wrote that? I used to be an idiot." Most of the coders that you meet can likely tell you about some god 
        awful feature that they wrote and the only thing stopping them from deleting it is the fact that the business
        relies on it everyday. If you can look at one of your old pieces of code in horror and remember that it's served
        a purpose for years without issue, maybe you were smarter than you thought... and if you think that past self is
        an idiot for writing it that way, you're probably doing pretty well. That said, retrospect isn't just about 
        reviewing your old products, it's also about looking at your patterns and mindsets in an honest way so that you 
        can not only improve the quality of your work, but you can also improve the quality of your life along the way.
        When presented with a new feature to implement, I used to just try to write the entire thing in one go and then
        test whether or not it worked after all was said and done. Turns out, that's how you introduce tons of bugs and
        have to contend with fixing them all at once with the static of a compiler shouting red at you. If you take little
        steps and fix each bug as it arises, you'll be much happier at the end of the day.`,
    },
    {
        number: '10',
        title: 'Repeat',
        body: `This is not a checklist you complete once. It's a loop that will continue in perpetuity until you either 
        give up or retire. When you feel like you are content, go back to step one. Be curious about something new. 
        Break something different. Follow a new example. The engineers who keep growing are the ones who are always, in 
        some sense, beginners again. The thing that keeps me coming back for more is the continual cycle of sheer frustration,
        to the point of contemplating setting your keyboard on fire, that is punctuated by an overwhelming sense of triumph
        when you finally get it to run. There's nothing that compares to your victory dance over conquered issue that lies
        at your feet.`,
    },
];

export function HomePage() {
    const [started, setStarted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'forward' | 'back'>('forward');

    const step = steps[current];
    const isFirst = current === 0;
    const isLast = current === steps.length - 1;

    const goNext = () => {
        setDirection('forward');
        setCurrent(c => c + 1);
    };
    const goPrev = () => {
        setDirection('back');
        setCurrent(c => c - 1);
    };

    if (!started) {
        return (
            <section className="guide-hero anim-fade" aria-labelledby="guide-title">
                <h1 id="guide-title">How to Become a Software Engineer</h1>
                <p className="guide-subtitle">The unconventional way</p>
                <p className="guide-intro">
                    Nobody handed me a roadmap. I figured this out through dead ends, wrong turns,
                    and nearly a decade of learning on the job. From high school dropout to electrician
                    to lead software engineer. If you're doing it the unconventional way too,
                    here's what I wish I'd known.
                </p>
                <button className="guide-begin-btn" onClick={() => setStarted(true)}>
                    Read My Unsolicited Advice
                </button>
            </section>
        );
    }

    return (
        <div className="guide-step-view anim-forward">
            <section
                key={current}
                className={`guide-step ${direction === 'forward' ? 'anim-forward' : 'anim-back'}`}
                aria-labelledby={`step-title-${step.number}`}
            >
                <header className="step-header">
                    <span className="step-number" aria-label={`Step ${Number(step.number)}`}>
                        {step.number}
                    </span>
                    <h2 id={`step-title-${step.number}`} className="step-title">
                        {step.title}
                    </h2>
                </header>
                <div className="step-body">
                    <p>{step.body}</p>
                    {step.readingList && (
                        <div className="step-reading-list">
                            <h3>A few books worth your time</h3>
                            <Collection items={resumeData.readingList}/>
                        </div>
                    )}
                </div>
            </section>

            <nav className="guide-nav" aria-label="Guide navigation">
                <button
                    className="guide-nav-btn"
                    onClick={goPrev}
                    disabled={isFirst}
                    aria-label="Previous step"
                >
                    ← Previous
                </button>
                <span
                    className="guide-nav-progress"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {current + 1} / {steps.length}
                </span>
                <button
                    className="guide-nav-btn"
                    onClick={goNext}
                    disabled={isLast}
                    aria-label="Next step"
                >
                    Next →
                </button>
            </nav>
        </div>
    );
}