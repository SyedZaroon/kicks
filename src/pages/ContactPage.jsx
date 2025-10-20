import Sidebar from "@/components/layout/Sidebar";
;
import ContactForm from "@/components/forms/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="section-margin flex mt-2 mb-8 flex-col gap-8 xl:flex-row xl:my-16 xl:gap-0">
        <Sidebar />
        <div className="xl:w-full">
          <h1 className="font-rubik text-2xl font-semibold">
            <span className="text-blue font-ru">Say Hello!</span> Got a
            question?
          </h1>

          <div>
            <p className="font-open-sans text-dark-gray text-[16px]">
              We are here to help you with any questions you may have.
            </p>
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
