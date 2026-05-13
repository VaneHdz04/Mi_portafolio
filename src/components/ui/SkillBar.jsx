export const SkillBar = ({ skillName, percentage }) => {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">{skillName}</span>
        <span className="text-cyan-400 font-medium">{percentage}</span>
      </div>
      <div className="w-full bg-[#0b0d14] rounded-full h-1.5 border border-white/5">
        <div 
          className="bg-cyan-500 h-1.5 rounded-full progress-bar-fill shadow-[0_0_10px_rgba(0,242,255,0.5)]" 
          style={{ width: percentage }}>
        </div>
      </div>
    </div>
  );
};