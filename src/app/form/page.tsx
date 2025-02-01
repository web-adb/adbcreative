import ContactMeForm from "@/components/contact-me-form";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

const form = () => {
  return (
    <div className="items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
      <BlurFade>
        <div className="space-y-0">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <ContactMeForm />
        </div>
      </BlurFade>
    </div>
  );
};

export default form;
