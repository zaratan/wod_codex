import React from 'react';
import { ExtraRequirementsType, RequirementsType } from '../types/ComboTypes';

const Requirements = ({
  requirements = [],
  extraRequirements,
}: {
  requirements?: RequirementsType;
  extraRequirements?: ExtraRequirementsType;
}) => (
  <div className="text-base inline">
    {requirements
      .slice()
      .sort((a, b) => b.or[0].level - a.or[0].level)
      .map((requirement, j) => (
        <span key={`req-loop-${j}`}>
          {j !== 0 ? <span key={`and-${j}`}>, </span> : null}
          {requirement.or.map((req, i) => (
            <span key={`req-loop-${j}-${i}`}>
              {i !== 0 ? <span key={`or-${j}-${i}`}> ou </span> : null}
              <span key={`req-${j}-${i}`}>
                {req.name}
                {req.subname && ` (${req.subname})`}: {req.level}
              </span>
            </span>
          ))}
        </span>
      ))}
    {extraRequirements && extraRequirements.length > 0 ? (
      <>
        {requirements.length > 0 ? <span>, </span> : null}
        {extraRequirements.map((req, i) => (
          <>
            {i > 0 ? <span>, </span> : null}
            <span>{req}</span>
          </>
        ))}
      </>
    ) : null}
  </div>
);

export default Requirements;
