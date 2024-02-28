import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center gap-2">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about React</h2>
        <p className=" text-gray-500">
          Checkout these resources with React Projects
        </p>
        <Button
          type="button"
          className="rounded-tl-xl rounded-bl-none"
          gradientDuoTone="purpleToPink"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            projects
          </a>
        </Button>
      </div>
      <div className="flex-1">
        <img
          src="https://static.frontendmasters.com/assets/courses/2022-12-06-intermediate-react-v5/thumb.webp"
          alt="react"
        />
      </div>
    </div>
  );
};

export default CallToAction;
