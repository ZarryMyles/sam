import React from "react";
import { WorkHero } from "../../components";

const SmartVision = () => {
  const work = {
    image:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    title: "Smart Vision",
    domain: "Case Study",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div>
      <WorkHero work={work} />
      {/* project brief */}
      <div class=" p-5 md:p-24 flex flex-wrap justify-between ">
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👨‍👩‍👦 Project Type
          </div>
          <div className="font-lato-light font-bold">Personal Project</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            ⏱️ Timeline
          </div>
          <div className="font-lato-light font-bold">3 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👩‍💻 My Role
          </div>
          <div className="font-lato-light font-bold">UX & UI Designer</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👥 Design Team
          </div>
          <div className="font-lato-light font-bold">Myself</div>
        </div>
      </div>
      {/* project concept */}
      <div class=" p-5 md:p-24 grid grid-cols-12  h-full">
        <div class="col-span-12 md:col-span-6 h-full  ">
          <div class="flex items-center mb-12">
            <div
              style={{
                height: "1px",
              }}
              class="bg-brand-gray w-28 mr-4"
            />
            <div class=" text-brand-gray uppercase text-xl tracking-widest ">
              Concept
            </div>
          </div>
          <div class="flex items-center">
            <div class="  text-2xl md:text-4xl my-8 tracking-widest font-lato-light font-bold ">
              💡 Smart Vision
            </div>
          </div>
          <div className="my-8    ">
            Smart Vision is an <b>Accessible, Independent and Secure</b>{" "}
            messaging App designed to make smartphones{" "}
            <b>more accessible for users with visual impairments.</b>
            <br />
            <br />
            Allows people to engage in hassle-free conversations, Provides the
            <b>finest accessibility features and secures privacy</b> to improve
            the quality of life.
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center ">
          <div className="my-5">
            <div className="mb-3">✅ Results</div>
            <div>
              Raised awareness, advanced accessibility features, Inclusive and
              easy to use space.
            </div>
          </div>
          <div className=" my-5">
            <div className="mb-3">💼 Contribution</div>
            <div>
              Secondary Research, Brainstorming Business goals, User Interviews,
              Journey Mapping, Ideation, Interface Design, Prototyping.
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="p-5 md:p-20">
        <div class="flex items-center mb-12">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray w-28 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Purpose
          </div>
        </div>
        <div class="grid grid-cols-12 font-lato">
          <div class="col-span-12 md:col-span-4">
            <div class="text-2xl font-lato">🎯 Goals</div>
            <div className="my-5 ">
              1. Allow them to <b>connect with people Independently.</b>
              <br />
              2. Provide essential <b>Accessibility features.</b>
              <br />
              3. Make it easier to <b>share information.</b>
              <br />
              4. Protect <b>privacy and security</b>.
              <br />
              5. <b>Promote awareness</b>
            </div>
          </div>
          <div class="col-span-12 md:col-span-8 hidden ">
            <div class="text-2xl font-lato ">👨‍👨‍👧‍👦 Target audience</div>
            <div class="flex  font-lato-bold  my-4">
              <div className="mr-16">Direct users</div>
              <div className="mr-16">Indirect users</div>
            </div>
            <div className="flex w-full justify-between md:justify-start my-4  pl-0 md:pl-14 ">
              <div className="mr-2 md:mr-16">Accounts team</div>
              <div className="mr-2 md:mr-16">Stakeholders</div>
              <div className="mr-2 md:mr-16">Business Intelligence</div>
            </div>
          </div>
        </div>
      </div>
      {/* user segmentation */}
      <div className="p-5 md:p-20 font-lato">
        <div className="text-2xl md:text-4xl mb-8 tracking-1.5">
          👨‍👨‍👧‍👦 User segmentation
        </div>
        <div class="ml-3">
          <div className=" text-base font-lato my-5">User Type</div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <b>Legally blind</b>
            <ul className="list-disc">
              <li className="">
                A legally blind individual is considered sightless if contact
                lenses or <b>eyeglasses cannot correct their vision.</b>
              </li>
              <li className="my-5">
                The <b>normal vision is 20/20</b>. That means an object can be
                seen correctly 20 feet away. But the vision of a{" "}
                <b>legally blind</b> is
                <b>20/200 or less</b>. This means if an object is 200 feet away,
                they have to stand 20 feet away to see it evidently.
              </li>
            </ul>
          </div>
          {/* primary  */}
          <div className=" text-base font-lato my-5">Primary User</div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <ul className="list-disc">
              <li className="">
                These are the users who require messaging apps the most.
              </li>
              <li className="my-5">
                They mostly utilize the app to share work-related information,
                promote their business, share valuable data, and have a shared
                platform for professional discussions, meetings, and so on.
              </li>
              <li className="my-5">
                Examples : Teachers, Bloggers, Youtubers, Advocates etc.{" "}
              </li>
              <li className="my-5">Age : 23 - 60 */ </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartVision;
