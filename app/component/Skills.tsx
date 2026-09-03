import Skill_bar from "./Skill_bar";

const Skills = () => {
  return (
    <div className="font-montserrat flex md:justify-end items-center bg-[url('/wide2-1.jpg')] bg-cover bg-center text-white">
      <div className="h-auto md:w-1/2 w-full bg-black/50 ">
        <div className="w-full md:p-16 p-12 flex flex-col gap-10">
          {/* 1 */}
          <div className="flex-1 text-[28px] font-medium">
            <h1 className="pb-3 font-medium text-[28px]">Our Skills</h1>
            <hr className="bg-[#F2C802] w-14 h-0.5 border-0" />
          </div>

          {/* 2 */}
          <div className="flex-1">
            <h1 className="pb-3 font-medium text-[17px]">General Consulting</h1>
            <Skill_bar limit={80} />
          </div>

          {/* 3 */}
          <div className="flex-1">
            <h1 className="pb-3 font-medium text-[17px]">Construction Management</h1>
            <Skill_bar limit={70} />
          </div>

          {/* 5 */}
          <div className="flex-1">
            <h1 className="pb-3 font-medium text-[17px]">Design & Build</h1>
            <Skill_bar limit={90} />
          </div>

          {/* 6 */}
          <div className="flex-1">
            <h1 className="pb-3 font-medium text-[17px]">Special Projects</h1>
            <Skill_bar limit={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
