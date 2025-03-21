import NavigationBar from "../navbar/NavigationBar";
import "./Contact.css"
export default function Contact() {
    return (
        <div>
            <NavigationBar />
                <h1>Contact Us</h1>
                <p>Got questions, feedback, or any general queries about categories please get in touch.</p>
            <div className="contact-wrapper">

                    <h2>Reach Us At</h2>
                    <ul>
                        <li>Email: <a href="mailto:support@rackcafe.com">Dmw8ltd@gmail.com</a></li>
                        <li>Phone: 07825 485715</li>
                        <li>11-13 Ramsden Street HD12SX Huddersfield, United Kingdom</li>
                    </ul>
                    <h2>For Any Technical Queries</h2>
                    <ul>
                        <li>Email: <a href="mailto:support@rackcafe.com">Hakimsheard@gmail.com</a></li>
                    </ul>
            </div>

        </div>
    );
}