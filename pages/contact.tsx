import Head from "next/head";
import ContactForm from "@/components/contact/contact-form";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>TheoCodes.dev - Contact Me</title>
        <meta
          name="description"
          content="Feel free to reach out and contact me!"
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
