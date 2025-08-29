// Custom SVG Icons
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PartnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <EmailIcon />,
      title: "Email Us",
      content: "hello@vycepay.com",
      description: "Drop us a line anytime"
    },
    {
      icon: <LocationIcon />,
      title: "Visit Us",
      content: "Nairobi, Kenya",
      description: "East Africa's tech hub"
    },
    {
      icon: <PartnershipIcon />,
      title: "Partner With Us",
      content: "partnerships@vycepay.com",
      description: "Let's build together"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Multiple ways to connect
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 text-gray-900">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg text-gray-900 mb-2 font-light">{method.content}</p>
              <p className="text-gray-600 font-light">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;