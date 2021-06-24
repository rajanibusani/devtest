<template>
  <div class="main-container">
    <div class="search-container">
      <input type="text" placeholder="Search meal.." v-model="searchQuery">   
      <div >   
        <div >        
        <router-link to="/deleted-meals"> Show Deleted Meals</router-link>
       </div>    
      </div>
    </div>   
    <div class="meals-container" >
      <CardItem
        v-for="meal in searchResults"
        :key="meal.id"
        :meal="meal"
        :isActive="true"
      >
      </CardItem>
    </div>
  </div>
</template>

<style >
.main-container{
margin: 0 30px;
}
.search-container{ 
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:1rem 2.5rem;
}
.search-container input {
  padding: 10px;
  font-size: 17px;
  border: 2px solid #280e3e;
  border-radius: 10px;
  outline:none;
   width:40%;  
  background: #f1f1f1;
}
.search-container a{
  color: red;
  font-size:18px;
}
.meals-container{  
  display: flex;    
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
</style>

<script>
import { mapGetters } from "vuex";
import CardItem from '../components/meal.vue'
export default {
  data() {
    return {
      searchQuery: null,
    };
  },
  components: {
    CardItem
  },
  computed: {
    ...mapGetters(["getActiveMeals"]),
    searchResults() {
      if (this.searchQuery) {
        return this.getActiveMeals.filter((meal) => {
          return this.searchQuery
            .trim()
            .toLowerCase()
            .split(" ")
            .every((search) =>
              Object.values(meal)
                .join(" ")
                .toLowerCase()
                .includes(search)
            );
        });
      } else {
        return this.getActiveMeals;
      }
    },
  },
};
</script>
