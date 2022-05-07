const Flag = ({ countryInfo }) => {
  console.log(countryInfo);
  return (
    <>
      <div>
        <h3>{countryInfo[0].name.common}</h3>
      </div>
      <div className="flag">
        <img src={countryInfo[0].flags.png} />
      </div>
    </>
  );
};

export default Flag;
