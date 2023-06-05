import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = () => {

  return (
    <Appbar.Header style={{backgroundColor:'#a60bff'}}>
      <Appbar.Content title="Rock - Paper - Scissors" color="black" style={{ alignItems: 'center', transform:[{scaleX: 2}, {scaleY: 2}]}}/>
    </Appbar.Header>
  );
};

export default Header;