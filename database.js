const store = localStorage.getItem('user');

function fname() {
  const name = {username:"skillboy"};
  localStorage.setItem("user", JSON.stringify(name));
}


export const getUser = () => {
  const user = JSON.parse(store);
  if (user == undefined) {
    alert('null');
    return {error:'@user not faun'}
  }
  return user;
}


export const addUser = (data) => {
  if (!data?.username || !data?.email || !data?.password) {
    return {error: 'error'}
  }
  localStorage.setItem('user', JSON.stringify(data));
  return {success: 'success'}
}