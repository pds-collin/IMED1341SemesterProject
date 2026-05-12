import { Modal } from './Modal.tsx';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
            <h3>Overview</h3>
            <p>
                This website is a semester final project created for IMED 1341 at Collin County Community College.
                It is a static, informational site and process any information.
            </p>

            <h3>Data Collection</h3>
            <p>
                This site does not collect any personal information. There are no contact forms, login systems,
                analytics trackers, or cookies of any kind deployed on this site.
            </p>

            <h3>Third-Party Links</h3>
            <p>
                This site contains links to third-party websites including Goodreads, Amazon, and Github. These sites
                have their own privacy policies and data practices, which are independent of this site.
                We are not responsible for the content or privacy practices of those sites.
            </p>

            <h3>Hosting</h3>
            <p>
                This site is hosted as a static web page. The hosting provider may collect standard server
                logs (such as IP addresses and access times) as part of normal operations. Please refer to
                the hosting provider's privacy policy for details.
            </p>
        </Modal>
    );
}