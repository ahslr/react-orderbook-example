import React, { Fragment } from 'react';
import Icon from '../components/Icon';

const About = () => {
    return (
        <Fragment>
          <h1 className="text-primary lead pt-2">About</h1>
          <div className="p-2 p-0-sm">
            <p>
              The application is mostly built with React and Redux. Although it is not necessary to use an external state container library for such a small application, I used redux and redux-thunk to completely separate the store and computing logic and leave the components almost purely presentational. I also added an alert system to toast messages using redux and uuid libraries. React-router-dom and prop-types are used for routing and type-checking purposes respectively.
            </p>
            <br/>
            <p>
              The design is implemented with CSS and media queries without external packages and icons are used from the Material Design Iconic Font. A booting animation is also implemented with Vanilla JavaScript.
            </p>
            <br/>
            <p>
              The UI is responsive so please have look at the published version on your smartphone
              <Icon type="mood" size="lg" className="p text-primary"/>.
            </p>
          </div>
        </Fragment>
    )
}

export default About;