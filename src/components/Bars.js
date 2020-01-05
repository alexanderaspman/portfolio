

export default ()=>{

function bar() {
    const [inProgress, setInProgress] = React.useState(false);
    React.useEffect(() => {
     setInProgress(true);
    }, []);
    return (
     <>
      <ProgressBar seconds={5} inProgress={inProgress} />
     </>
    );
}

   
   function ProgressBar({ seconds, inProgress }) {
    return (
     <div className="ProgressBar">
      <div
       className="ProgressBar__Progress"
       style={{
        transition: `ease-in-out ${seconds}s width`,
        width: inProgress ? "80%" : "0%"
       }}
      />
     </div>
    );
   }}

   