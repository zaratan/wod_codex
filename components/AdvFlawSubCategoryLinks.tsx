import React from 'react';

const AdvFlawSubCategoryLinks = ({
  type,
  subtypes,
}: {
  type: string;
  subtypes: Array<string>;
}) => (
  <section className="flex flex-col justify-center mb-3 text-lg items-center">
    <span>Aller au sous-type :</span>

    <ul className="flex flex-row flex-wrap">
      {subtypes.map((subtype) => (
        <li key={`type-${type}-${subtype}`} className="pr-3 last:pr-0">
          <a href={`#type-${type}-${subtype}`}>{subtype}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default AdvFlawSubCategoryLinks;
