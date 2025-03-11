function EntrantData(props) {
  return (
    <tr>
      <td>{props.entrant.name}</td>
      <td>{props.entrant.category}</td>
    </tr>
  );
}

export default EntrantData;
