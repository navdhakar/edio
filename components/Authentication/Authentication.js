import React from 'react';
import Login from '../../screens/Login/Login';

export default function Authentication() {
  return (
    <>
      <Login />
    </>
  );
}

// {data.isValidUser ? null : (
//   <Animatable.View animation="fadeInLeft" duration={500}>
//     <Text style={styles.errorMsg}>
//       enter valid email.
//     </Text>
//   </Animatable.View>
// )}

// {data.isValidPassword ? null : (
//   <Animatable.View animation="fadeInLeft" duration={500}>
//     <Text style={styles.errorMsg}>
//       Password must be 8 characters long.
//     </Text>
// </Animatable.View>
// )}
