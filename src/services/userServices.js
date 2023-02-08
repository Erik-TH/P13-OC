import axios from "axios";

/**
 * Function to get user datas login
 * @param {Objet} credentials user's credentials
 * @param {String} credentials.email user's email
 * @param {String} credentials.password user's password
 */

export async function userLogin(credentials) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL_LOGIN, credentials);
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
      else delete axios.defaults.headers.common["authorization"];
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function userDatas() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL_PROFILE)
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}

export async function userUpdateName(userFirstLastName) {
  console.log(userFirstLastName)
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(process.env.REACT_APP_BACKEND_URL_PROFILE, userFirstLastName)

      console.log(res)

      resolve(res.data)
    } catch (error) {
      console.log('error userUpdateName')
      console.log(error)
      reject(error)
    }
  })
}
