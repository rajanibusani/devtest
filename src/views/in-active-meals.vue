<template>
  <div if="item" class="main-container">
    <div class="search-container">
      <input type="search" placeholder="Search meal.." v-model="searchQuery">   
      <div >   
        <div >
        <router-link to="/meals"> Show All Meals</router-link>
       </div>         
      </div>
    </div>   
    <div class="meals-container" >
     <CardItem
        v-for="item in searchResults"
        :key="item.id"
        :meal="item"
        :isActive="false"
      >
      </CardItem>
    </div>
  </div> 
</template>

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
    ...mapGetters(["getInActiveMeals"]),
     // filtering meals based on search input. 
    // we can search meals with both meal title and description.
    searchResults() {
      if (this.searchQuery) {
        return this.getInActiveMeals.filter((item) => {
          return this.searchQuery
            .trim()
            .toLowerCase()
            .split(" ")
            .every((search) =>
              Object.values(item)
                .join(" ")
                .toLowerCase()
                .includes(search)
            );
        });
      } else {
        return this.getInActiveMeals;
      }
    },
  }
};
</script>

<style scoped>
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
  color:green;  
  font-size:18px;
}
.meals-container{  
  display: flex;    
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
</style>
