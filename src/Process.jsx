const Process = () => {
  //fix this later on
  return (
    <div className="w-full  flex flex-col gap-3 mt-20 mb-20 p-10">
      <div className="ml-8">
        <p className=" text-white tracking-widest ">THE PROCESS</p>
        <h2 className=" pb-5">
          Three steps, no setup
        </h2>
        <div className="pb-5">
          <p >01</p>
          <h4 className=" text-white tracking-widest">Choose an algorithm</h4>
          <p>Pick from the collection of algorithms and data structures</p>
        </div>
        <div className="pb-5">
             <p >02</p>
          <h4 className=" text-white tracking-widest">Feed it your data</h4>
          <p>
            Enter your own array, message or grid- or start from a generated
            example.
          </p>
        </div>
        <div className="pb-5">
           <p >03</p>
          <h4 className=" text-white tracking-widest">Watch it Think and Learn</h4>
          <p>Step forward, rewind or let it run at your own pace.</p>
        </div>
      </div>
    </div>
  );
};
export default Process;
