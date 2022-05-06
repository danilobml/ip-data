const Flag = ({ countryInfo }) => {
  console.log(countryInfo);
  return (
    <div>
      <img src={countryInfo[0].flags.png} />
    </div>
  );
};

export default Flag;
