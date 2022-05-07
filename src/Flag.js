const Flag = ({ name, flag }) => {
  // console.log(countryInfo);
  return (
    <>
      <div>
        <h3>{name}</h3>
      </div>
      <div className="flag">
        <img src={flag} />
      </div>
    </>
  );
};

export default Flag;
