const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ananya-sharma-822b5b215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8%2FC%2F1VdHQCSphImWaqdQ9g%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="gmail-link" src="../assets/gmail.png" />
      </a> */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
