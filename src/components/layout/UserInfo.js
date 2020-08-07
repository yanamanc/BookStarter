import React from "react"

import AuthContext from "~/src/AuthContext"

const UserInfo = () => {
  return (
    <AuthContext.Consumer>
    {
      ({AvatarUrl, FirstName, LastName}) => (
        <div style={styles.userInfo}>
          <div><img src={AvatarUrl} style={styles.img} /></div>
          <div>{FirstName} {LastName}</div>
        </div>
      )
    }
  </AuthContext.Consumer>
  )
}

export default UserInfo;

const styles = {
  userInfo: {
    marginLeft: "auto",
    display: "flex",
    alignItems: 'center'
  },
  img: {
    height: "50px",
    borderRadius: "100%",
    margin: "10px 10px"
  },
}