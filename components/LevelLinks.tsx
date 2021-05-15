import React from 'react';

const LevelLinks = ({ levels }: { levels: Array<number> }) => {
  console.log(levels);
  return (
    <section className="flex flex-row justify-center mb-3">
      <span className="pr-2">Aller au niveau :</span>

      <ul className="flex flex-row justify-between max-w-md space-x-3">
        {levels.map((level) => (
          <a href={`#level-${level}`} key={`level-${level}`}>
            <li>{level}</li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default LevelLinks;
