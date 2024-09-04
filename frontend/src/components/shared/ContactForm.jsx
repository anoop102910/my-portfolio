import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Button } from "../ui/Button";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("HM9PVhZc50PTQp0IP"), []);
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_ruwxdff", "template_lsygyyv", form.current, "HM9PVhZc50PTQp0IP").then(
      () => {
        console.log("SUCCESS!");
        toast.success("Message sent successfully");
        setLoading(false);
      },
      error => {
        console.log("FAILED...", error.text);
        toast.error("Something went wrong");
        setLoading(false);
      }
    );
  };

  return (
    <div className="p-8 neo-2  mx-auto mt-10 w-full md:w-auto">
      <form ref={form} className="mx-auto w-full lg:w-[500px]" onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Label>Name*</Label>
            <Input
              type="text"
              name="name"
              className="bg-white border-2 border-gray-900"
              placeholder={"Enter Your name"}
            />
          </div>
          <div>
            <Label>Email*</Label>
            <Input
              type="email"
              name="email"
              placeholder={"Enter Your email"}
              className="bg-white border-2 border-gray-900"
            />
          </div>
        </div>
        <div className="mt-8">
          <Label htmlFor="message">Message*</Label>
          <Textarea className="bg-white border-2 border-gray-900" name="message" placeholder="Enter your message" rows={8} />
        </div>
        <Button type="submit" className="mt-6 bg-white border-2 border-gray-900">
          <IoIosSend size={20} />
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
