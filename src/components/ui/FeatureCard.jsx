export const FeatureCard = ({ iconClass, title, description }) => {
  return (
    <div className="feature-card p-8 rounded-2xl">
      <div className="icon-box">
        <i className={`fa-solid ${iconClass}`}></i>
      </div>
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};