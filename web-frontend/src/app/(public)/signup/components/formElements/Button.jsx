import React from "react";

const Button = ({ loading, currentFlow }) => {
  if (currentFlow === "confirmed") return;

  return (
    <div className="flex items-end justify-end">
      <button disabled={loading} type="submit" className="btn btn-primary-solid text-body">
        {currentFlow === "review" ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Button;
