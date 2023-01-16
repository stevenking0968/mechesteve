import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useHistory} from "react-router-dom";

const NavBar = (props) => {
  let history = useHistory();
  return (
      <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={(selected) => {
            if (selected.itemId) {
             history.push(selected.itemId);
             history.go();
            }
          }}
          items={[
            {
              title: 'About Me',
              itemId: '/',
              // you can use your own custom Icon component as well
              // icon is optional
            },
            {
              title: 'Projects - Camera/Optics',
              itemId: '/optics',
            },
            {
              title: 'Projects - AR/VR',
              itemId: '/ar-vr',
            },
            {
              title: 'Projects - Biotech',
              itemId: '/biotech',
            },
            {
              title: 'Projects - Telecom',
              itemId: '/telecom',
            },
            {
              title: 'Projects - Probe Cards',
              itemId: '/probecards',
            },
            {
              title: 'Projects - Simulations',
              itemId: '/simulations',
            },
            {
              title: 'Slides',
              itemId: '/slides',
            },
            {
              title: 'Resume',
              itemId: '/resume',
            },
          ]}
        />);
}

export default NavBar;
