<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <h2>用户登录</h2>
        <div class="form-group">
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="username" placeholder="请输入用户名">
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="password" placeholder="请输入密码">
        </div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
        <button type="submit">登录</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    mounted() {
      const token = window.Android.getToken();
      if (token !== undefined && token !== null) {
         window.Android.redirect('http://192.168.43.225:8080/#/main');
      }
    },
    methods: {
      async login() {
        // 这里可以添加登录逻辑，比如发送请求到服务器进行验证
        const response = await axios.post('https://api.soulter.top/cccc2024/user/login',
          {
            "name": this.username,
            "psw": this.password,
          }
        );
        const responseData = response.data;
        if (responseData.code == 0) {
          window.Android.setToken(responseData.data.uid);
          alert('登录成功');
          window.Android.redirect('http://192.168.43.225:8080/#/main');
        } else {
          this.errorMessage = '用户名或密码错误';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f4f7f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
    width: 100%;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .error-message {
    color: #ff0000;
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>