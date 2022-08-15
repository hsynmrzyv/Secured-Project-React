import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <h1>
              <span>Contact</span>
              Us
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" placeholder="Enter Your Message"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
