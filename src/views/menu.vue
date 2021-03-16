<template>
  <div class="Menu">
    <b-container>
      <b-row>
        <b-col v-for="(menu, key) in list" :key="key">
          <b-card
            :img-src="menu.url"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <h1>
              {{ (name = menu.name) }}
            </h1>
            <br />
            {{ menu.Engname }}
            <br />
            {{ menu.title }}
            <br />
            {{ menu.title1 }}
            <h2 class="mt-4">{{ menu.price }} Baht</h2>
            <b-button @click="index = key, buy()" variant="danger" class="mt-4">
              BUY
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { db } from "@/plugin/firebaseConfig.js";
import { auth } from "@/plugin/firebaseConfig.js";
export default {
  name: "menu",
  data: () => ({
    list: [],
    index: 0,
    name: null,
    price: 0,
    email: "",
    Amount: 1,
  }),
  created() {
    this.get();
  },
  methods: {
    get() {
      db.collection("FoodDetail")
        .orderBy("price")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.list.push(doc.data());
          });
        });
    },
    buy() {
      const data = {
        num:this.Amount,
        email: this.email,
        name: this.list[this.index].name,
        price: this.list[this.index].price,
      };
      db.collection("OrderDetail")
        .doc()
        .set(data)
        .then(function () {
          console.log("Document successfully written -> OrderDetail");
          alert("สั่งเรียบร้อย");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
       },
  },
  beforeCreate() {
      auth.onAuthStateChanged((user) => {
        if (user!=null) {
          console.log(user.email);
          this.email = user.email
        } else {
         console.log("Error");
         this.$router.replace("/User");
        }
      });
  
  
  },
        
      
};
</script>
