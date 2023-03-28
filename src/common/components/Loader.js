import React, {useState} from "react";
import {ClipLoader, SyncLoader} from "react-spinners";

export const Loader = ({isLoading, loadingType, children, size}) => {
  const [loading, setLoading] = useState(true)
  return isLoading ? (
    <div className="loader">
      {
        loadingType === 'THREE-DOT' && (
          <div className="sync-loader-container">
            <SyncLoader speedMultiplier={0.8} size={size || 15}/>
          </div>
        )}
      {
        loadingType === "CIRCLE" && (
          <div className="clip-loader-container">
            <ClipLoader
              color="#36d7b7"
              cssOverride={{}}
              size={35}
            />
          </div>
        )
      }
    </div>
  ) : (children)
}
