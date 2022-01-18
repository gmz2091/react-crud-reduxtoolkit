/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
const CellRender = ({ data }) => {
  console.log(data.status);
  return (

    data.status ? (
      <div style={{
        width: 20, height: 20, borderRadius: '100%', backgroundColor: 'green',
      }}
      />
    ) : (
      <div style={{
        width: 20, height: 20, borderRadius: '100%', backgroundColor: 'red',
      }}
      />
    )
  );
};

export default CellRender;
