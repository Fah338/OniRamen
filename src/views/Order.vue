<template>
  <div class="Menu">
    <b-container>
      <b-card-group deck>
        <b-card>
          <b-row>
           
            <table class="table table-borderless">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ชื่อผู้สั่ง</th>
                  <th scope="col">รายการอาหาร</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">จำนวน</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="(menu, key) in list" :key="key">
                  <td>{{ menu.email }}</td>
                  <td>{{ (name = menu.name) }}</td>
                  <td>{{ menu.price }}</td>
                  <td>{{ menu.num }}</td>
                 
                </tr>
              </tbody>
            </table>
            <h4 align="right">ยอดชำระเงิน {{total()}} บาท</h4>
          </b-row>
          <b-button @click="(index = key), summit()" class="mt-4"> Summit </b-button>
         
        </b-card>
      </b-card-group>
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
   
  }),
  created() {
    this.get();
  },
  methods: {
    get() {
      db.collection("OrderDetail")
        .orderBy("price")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.list.push(doc.data());
          });
        });
      // db.collection("OrderDetail")
      //   .orderBy("price")
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots
      //       console.log(doc.id, " => ", doc.data());

      //     });
      //   });
    },

    //     id() {
    //       db.collection("OrderDetail")
    //       console.log("1");
    //         .onSnapshot((querySnapshot) => {
    //           querySnapshot.forEach((doc) => {
    // console.log("2");
    //              this.list.push( doc.id());
    //           });
    //         });
    //     },
    // deletelist: function (id) {
    //   db.collection("OrderDetail")
    //     .doc(id)
    //     .delete()
    //     .then(() => {
    //       console.log("Document successfully deleted!");
    //     })
    //     .catch((error) => {
    //       console.error("Error removing document: ", error);
    // //     });
    // // },
    total:function(){
         var sum = 0;
         this.list.forEach(function(menu){
            sum += menu.price;
         })
         return sum;
      },
      summit() {
      const data = {
        num:this.Amount,
        email: this.email,
        name: this.list[this.index].name,
        price: this.list[this.index].price,
        total:this.total,
      };
      db.collection("bill")
        .doc()
        .set(data)
        .then(function () {
          console.log("Document successfully written -> Bill");
          alert("สั่งเรียบร้อย");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
       },
 
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user);
      } else {
        this.$router.replace("/User");
        // No user is signed in.
      }
    });
  },
};
</script>
<style >
#reservation {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: rgb(70, 70, 70);
}
#backg {
  background: rgb(20, 20, 20);
}
</style>
