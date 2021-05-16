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
        <>
          {j !== 0 ? <span>, </span> : null}
          {requirement.or.map((req, i) => (
            <>
              {i !== 0 ? <span> ou </span> : null}
              <span>
                {req.name}
                {req.subname && ` (${req.subname})`}: {req.level}
              </span>
            </>
          ))}
        </>
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
