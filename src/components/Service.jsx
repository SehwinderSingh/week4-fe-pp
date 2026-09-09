const Service = ({ id, icon, title, text, onRemove, details }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
        {details && <p className="service-details">{details}</p>}
      </div>
      <button
        className="btn"
        onClick={() => onRemove(id)}
        style={{ marginTop: "1rem" }}
      >
        Remove Service
      </button>
    </article>
  );
};
export default Service;
