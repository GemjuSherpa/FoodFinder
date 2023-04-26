import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetters.vue'
import MealsByName from '../views/MealsByName.vue'
import Ingredients from '../views/Ingredients.vue'
import MealDetails from '../views/MealDetails.vue'
import DefaultLayout from '../components/DefaultLayoutView.vue'
import GuestLayoutView from '../components/GuestLayoutView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredients,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayoutView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
