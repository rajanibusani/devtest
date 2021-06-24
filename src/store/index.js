import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meals: [
      {
        id: 1,
        title: "Italian Pasta with dessert",
        description: "Spinach ravioli with a fresh tomato sauce and Tiramisu",
        image: require('../assets/images/pasta.jpeg'),
        isActive: true
      },
      {
        id: 2,
        title: "Chicken stew with appam",
        description: "chicken stew with south indian pancake",
        image: require('../assets/images/appam.jpg'),
        isActive: true
      },
      {
        id: 3,
        title: "Mexican Shrimp Tacos",
        description: "crispy cheesy shrimp tacos and homemade salsa",
        image: require('../assets/images/tacos.jpeg'),
        isActive: true
      },
      {
        id: 4,
        title: "Baklava and Sfouf Cake",
        description: "Baklava which is pastry layered with chopped nuts,Sfouf Cake which is almond-semolina cake",
        image: require('../assets/images/baklava.jpeg'),
        isActive: true
      },
      {
        id: 5,
        title: "Risotto with shrimp",
        description: "Risotto with shrimp lemon and rosemary",
        image: require('../assets/images/risotto.jpeg'),
        isActive: true
      },
      {
        id: 6,
        title: "SouthIndian Breakfast",
        description: "Dosa, Vada, Idli(made with lentils and rice batter)with Peanut sause",
        image: require('../assets/images/dosa.jpeg'),
        isActive: true
      },
      {
        id: 7,
        title: "Steamed Momos & Choyla",
        description: "Steamed Momos, one of the most popular dishes in Nepal Choyla,a traditional Nepali spiced meat dish",
        image: require('../assets/images/momos.jpeg'),
        isActive: true
      },
      {
        id: 8,
        title: "Kadai Paneer with Naan",
        description: "Indian curry made with paneer (cottage cheese), to…butter and cashew sauce and with Indian flatbread",
        image: require('../assets/images/paneer.jpeg'),
        isActive: true
      },
      {
        id: 9,
        title: " Grilled Chicken",
        description: "Grilled chicken in mushroom sause",
        image: require('../assets/images/chicken.jpeg'),
        isActive: true
      },
    ],
  },
  mutations: {
    // deleting a meal from meals, by changing meal.isActive false
    removeMeal(state, mealId) {
      state.meals = state.meals.map((meal) =>
        meal.id === mealId ? { ...meal, isActive: false } : meal
      );
      alert("Meal Removed")
    },
    // recovering the meal to meals, by changing meal.isActive true
    recoverMeal(state, mealId) {
      state.meals = state.meals.map((meal) =>
        meal.id === mealId ? { ...meal, isActive: true } : meal
      );
      alert("Meal Recovered")
    },
  },
  getters: {
    // filtering the meals based meal.isActive value 
    getActiveMeals: (state) => {
      return state.meals.filter(meal => !!meal.isActive);
    },
    getInActiveMeals: (state) => {
      return state.meals.filter(meal => !(!!meal.isActive));
    },
  },
});
