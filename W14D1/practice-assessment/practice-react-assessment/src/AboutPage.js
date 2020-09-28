import React from 'react';

const AboutPage = (props) => {

  return (
    <>
      <h1>
        {props.company.name}
      </h1>
      <p>
        {props.company.about.story}
      </p>
    </>
  );
};

export default AboutPage;
