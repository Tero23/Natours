const login = async (email, password) => {
  try {
    // const res = await axios({
    //   method: 'POST',
    //   url: 'http://127.0.0.1:8000/api/v1/users/login',
    //   data: {
    //     email,
    //     password,
    //   },
    // });
    const data = {
      email,
      password,
    };
    const res = await fetch('http://127.0.0.1:8000/api/v1/users/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }).json();

    if (res.body.status === 'success') {
      alert('Logged In Successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    alert(error.response.body.message);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
