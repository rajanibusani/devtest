<template>
  <div v-if="meal " class="meal">
     <div class="img_container">
         <img :src=" meal .image" alt="image"/>
       </div>
       <div class="card_content">
            <div class="card_title">
              <h3>  {{ meal .title }}</h3>
             </div>
            <div class="card_body">
                 <p>{{ meal .description }}</p>
           </div>      
             <div class="btn">               
                  <button type="button"  @click="isActive ? removeMeal(meal .id) : recoverMeal(meal.id)">
                     {{ isActive ? "Remove" : "Recover" }}
                  </button>    
              </div>
      </div>        
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CardItem",
  props: {
   meal : Object,
    isActive : Boolean,
  },
  methods: {
    ...mapMutations(["removeMeal", "recoverMeal"]),
  },
};
</script>

<style>
.meal{  
    margin: 1rem 0.5rem;  
    background-color:grey;
    width:320px;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
    transition: 0.3s;
    animation:ease-in;
    }
  .meal:hover{
        transform:scale(1.05);
        box-shadow: 0px 0px15px 0px;
    }
    .img_container img{
        overflow:hidden;
        width: 100%;
        height:200px;
    }  
    .card_content{
        margin:1rem;
        margin-top:0.5rem;
    }
    h3,p{
        margin: 0;
        padding: 0;
    }
    .card_title{
        margin-bottom: 0.5rem;
        text-align: center;
        text-transform: capitalize;
        font-weight: 600;        
    }
    .card_body{
       min-height: 60px;
        text-align: center;
    }
    .card_body p{
      text-transform: capitalize;
    }
    .btn{        
        margin-top: 0.5rem;
        display:flex;
        justify-content: center;
    }
    .btn button{      
        padding:0.5rem 1rem;
        background-color:#121936;
        font-size:16px;
        border:1px solid #121936;
        border-radius : 10px;
        color:white;
    }
</style>
