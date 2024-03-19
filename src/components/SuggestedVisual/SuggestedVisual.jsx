export default function SuggestedVisual({ name, icon, handleIconSelect }) {
  return (
    <div
      className="search_circle_block"
      style={{
        flex: "0 0 calc(25% - 20px)", // 25% width minus margin
        marginRight: "20px",
        marginBottom: "20px", // Add margin bottom for spacing between rows
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={handleIconSelect}
    >
      <img
        className="search_circle"
        src={icon}
        style={{ width: "125px", height: "165px" }}
      />
      <p>{name}</p>
    </div>
  );
}
