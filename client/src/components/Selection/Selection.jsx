function Selection({ setRoute }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setRoute(e.target.location_area.value);
  };

  return (
    <>
      <h1>Selection Component</h1>
      <form onSubmit={handleSubmit}>
        <select name="location_area">
          <option value="route-201">Route 201</option>
          <option value="route-202">Route 202</option>
          <option value="route-203">Route 203</option>
          <option value="route-204">Route 204</option>
          <option value="route-205">Route 205</option>
          <option value="route-206">Route 206</option>
          <option value="route-207">Route 207</option>
          <option value="route-208">Route 208</option>
          <option value="route-209">Route 209</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Selection;
