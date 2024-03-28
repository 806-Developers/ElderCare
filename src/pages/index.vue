<template>

<v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>ElderCare</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>

            <v-card
              class="mx-auto"
              width="400"
            >
            <template v-slot:title>
              Hello {NAME}
            </template>

            <v-card-text>
              <h3>您的身体指标正常，请继续保持</h3>
            </v-card-text>
            </v-card>

            

            <v-container class="text-center">
              <v-row justify="center">

                
                <v-col cols="12" md="12" sm="6" > 
                  <v-btn rounded="xs" size="x-large" block style="height: 120px;width:100px;background: linear-gradient(145deg, #a9ecbf, #7ed56f);text-align: left;" >
                    <v-col>
                      
                    <v-card-title class="font-weight-bold"><v-icon>mdi-heart</v-icon>近期平均血压</v-card-title>
                      <v-card-title class="font-weight-bold">
                        <!-- {{ Data.data.value }} mmHg -->
                      </v-card-title>   
                    </v-col>      
                  </v-btn>
                </v-col> 

                <v-col cols="12" md="12" sm="6" >
                  <v-btn rounded="xs" size="x-large" block style="height: 120px;background: linear-gradient(145deg, #D1C4E9, #7C4DFF);align-items: flex-start;">
                    <v-col>
                      <v-card-title class="font-weight-bold"><img src="../assets/blood-sugar.png" style="width: 30px;"/>近期平均血糖 </v-card-title>
                      <v-card-title class="font-weight-bold">4.4 mmol /L </v-card-title>
                    </v-col>                  
                  </v-btn>
                </v-col>

                <v-col cols="12" md="6" sm="6" >
                  <router-link to="/assistant" style="text-decoration: none;">
                  <v-btn rounded="xs" size="x-large" block style="height: 200px;background: linear-gradient(145deg, #ffcc9e, #ff9e9e);">
                    <v-col>
                      <img src="../assets/assistant.png" style="width: 30px;color: inherit;"/>
                      <v-card-title class="font-weight-bold">健康助手 </v-card-title>
                    </v-col>                   
                  </v-btn>
                  </router-link>
                </v-col>

                <v-col cols="12" md="6" sm="6">
                  <v-btn rounded="xs" size="x-large" block style="height: 200px;background: linear-gradient(145deg, #F48FB1, #EC407A);">
                    <v-col>
                      <img src="../assets/physical-information.png" style="width: 30px;"/>
                      <v-card-title class="font-weight-bold" >身体信息 </v-card-title>
                    </v-col>          
                  </v-btn>
                </v-col>
                
                <v-col cols="12" md="6" sm="6">
                  <v-btn rounded="xs" size="x-large" block style="height: 200px;background: linear-gradient(145deg, #B2DFDB, #00BFA5);">
                    <v-col>
                      <img src="../assets/relatives-information.png" style="width: 30px;"/>
                      <v-card-title class="font-weight-bold">联系亲人 </v-card-title>
                    </v-col>                   
                  </v-btn>
                </v-col>

                <v-col cols="12" md="6" sm="6">
                  <v-btn rounded="xs" size="x-large" block style="height: 200px;background: linear-gradient(145deg, #B3E5FC, #0091EA);">
                    <v-col>
                      <img src="../assets/personal-information.png" style="width: 30px;"/>
                      <v-card-title class="font-weight-bold">我的资料 </v-card-title>
                    </v-col>
                    
                  </v-btn>
                </v-col>

              </v-row>
            </v-container>

          </v-row>
        </v-container>
      </v-main>
    </v-layout>

    <v-layout class="overflow-visible" style="height: 56px;" >
    <v-bottom-navigation
      v-model="value"
      :bg-color="color"
      mode="shift"
    >
      <v-btn>
        <v-icon>mdi-home</v-icon>
        
        <span>home</span>
      </v-btn>

      <v-btn>
        <router-link to="/assistant" style="text-decoration: none;color: inherit;">
        <v-icon>mdi-chat</v-icon>
        </router-link>
        <span>chat</span>

      </v-btn>
      <v-btn>
        <v-icon>mdi-account-circle</v-icon>
        <span>about</span>
      </v-btn>

    </v-bottom-navigation>
  </v-layout>

  

  </v-card>


</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        Data:[],
      }
    },
    methods:{
      fetchData(){
        axios.get('https://api.soulter.top/cccc2024/healthData?uid=2c688d838286494a95f8dfaff439b050&key=all&offset=-1')
          .then(response => {
            console.log(response.data);
            this.Data = response.data;
          })
          .catch(error => {
            console.error('发生错误',error);
          });
      },
      mounted() {
        this.fetchData();
      }
    }
  }
</script>

<style>
  .font-weight-bold {
	font-size: 25px;
	font-weight: 1000;
  color:white;
	}
</style>
