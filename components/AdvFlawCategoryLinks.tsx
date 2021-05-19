import React from 'react';

const AdvFlawCategoryLinks = ({ types }: { types: Array<string> }) => (
  <section className="flex flex-col sm:flex-row justify-center mb-3">
    <span className="sm:pr-2">Aller au type :</span>

    <ul className="flex flex-row sm:justify-between flex-wrap">
      {types.map((type) => (
        <li className="pr-3 last:pr-0">
          <a href={`#type-${type}`} key={`type-${type}`}>
            {type}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default AdvFlawCategoryLinks;
