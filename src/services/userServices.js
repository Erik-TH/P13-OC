import axios from "axios";

/**
 * Function to get user datas login
 * @param {Objet} credientials user's credentials
 * @param {String} credientials.email user's email
 * @param {String} credientials.password user's password
 */

export async function userLogin(credientials) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(process.env.REACT_APP_BACKEND_URL_LOGIN, credientials);
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      else delete axios.defaults.headers.common["Authorization"];
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

export async function userUpDate(userFirstLastName) {
  console.log(userFirstLastName)
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(process.env.REACT_APP_BACKEND_URL_PROFILE, userFirstLastName)

      console.log(res)

      resolve(res.data)
    } catch (error) {
      console.log('error userUpDate')
      console.log(error)
      reject(error)
    }
  })
}
