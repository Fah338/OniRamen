<template>
  <div class="row">
      <b-card
      border-variant="primary"
      :header="NameProduct"
      header-bg-variant="primary"
      header-text-variant="white"
      align="center"
      style="height: 40rem"
      ><b-col md="12">
        <b-card-img :src="img" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-card-text>ราคา : {{ Price }} บาท</b-card-text>
      จำนวน
      <b-form-spinbutton
        id="sb-small"
        size="sm"
        v-model="Amount"
        class="mb-2"
      ></b-form-spinbutton>
      <button type="button" class="btn btn-outline-info" @click="Order()">
        <b-icon icon="basket2-fill"></b-icon> หยิบใส่
      </button>
    </b-card>
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
            <br />
            <br />
            <b-form-spinbutton
              id="sb-inline"
              inline
              size="sm"
              v-model="Amount"
              class="mb-2"
            ></b-form-spinbutton>
            <h2 class="mt-4">{{ menu.price }} Baht</h2>
            <b-button
              @click="(index = key), buy()"
              variant="danger"
              class="mt-4"
            >
              BUY
            </b-button>
          </b-card>
    
  </div>
</template>
    
    <script>
export default {};
</script>
    
    <style>
</style>