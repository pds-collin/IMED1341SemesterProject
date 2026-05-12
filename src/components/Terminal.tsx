import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { idea } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// I didn't want to use external libraries for any of the styling but doing the regex for a syntax highlighter would
// have taken me entirely too long
SyntaxHighlighter.registerLanguage('javascript', js);

interface Props {
    children?: string;
}

export function Terminal(props: Props) {
    return (
        <>
            <h2>Skills & Qualifications</h2>
            <section className="terminal">
                <div className="terminal-prompt">
                    <span>ubuntu@hopper$</span> cat about.json
                </div>
                <SyntaxHighlighter language="javascript" style={idea} customStyle={{ background: 'transparent', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {props.children ?? ''}
                </SyntaxHighlighter>
                <div className="terminal-prompt">
                    <span>ubuntu@hopper$</span> <span className="terminal-cursor">_</span>
                </div>
            </section>
        </>
    );
}