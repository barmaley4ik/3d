<template>
<div>
    <div class="flex mt-2 font-medium text-sm justify-center md:text-xl ">До конца акции осталось</div>
    <div class="flex mt-3 justify-center text-medium text-red-600 font-bold md:text-xl md:my-3 "> {{ counterDay }}</div>
    <button class="bg-green-500 focus:outline-none text-white py-2 px-4 w-full h-1/2 md:text-medium lg:text-lg lg:py-6 "
    @click.prevent="show()">
      ЗАКАЗАТЬ
    </button>

    <modal name="modal"
         :width="300"
         :clickToClose="false"
         :adaptive="true"
         :height="490">
        <div class="flex-1 m-2 text-right">
            <button @click="$modal.hide('modal')">
                ❌
            </button>
        </div>         
      <div class="flex justify-center text-black text-medium md:uppercase" v-html="title">

      </div>
      <template v-if="!success">
      <div class="leading-normal mx-4 my-2">
        <div class="text-left py-2">
          <label class="form-label text-black text-base" for="name">Ваше имя:</label>
          <input id="name" v-model="name" v-focus type="text" class="px-4 py-3 w-full focus:outline-none border border-black focus:border-green-300 h-10" :class="{ 'border-red-500': error.name}" >
            <div v-if="error.name" class="text-red-500">{{ error.name[0] }}</div>          
        </div>
        <div class="text-left pb-2">
          <label class="form-label text-black text-base" for="phone">Телефон:</label>
          <input id="phone" type="tel" v-model="tel" v-mask="['(###) ##-##-###']" placeholder="(067) 12-34-567" class="px-4 py-3 w-full focus:outline-none border border-black focus:border-green-300 h-10" :class="{'border-red-500': error.phone}" >
          <div v-if="error.phone" class="text-red-500">{{ error.phone[0] }}</div>
        </div>
        <div class="text-left">
          <label class="form-label text-black text-base" for="plastic">Добавить к заказу пластик:</label>
          <select id="plastic" v-model="plastic" class="form-select w-full focus:outline-none border border-black focus:border-green-300 h-10" >
        <option v-for="option in optionPlastic" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
          </select>
        </div>
        <div class="text-left my-2">
            Итого: {{Summa}} грн.
        </div>
        <button class=" bg-green-500 focus:outline-none text-white py-4 px-4 w-full md:text-medium md:py-3 lg:text-lg lg:py-2 " 
        @click.prevent="newProposal()">
            ЗАКАЗАТЬ
        </button>
        <div class="flex-1 ">
            <button class="mt-6 bg-gray-300 focus:outline-none py-2 px-2 w-full md:text-medium lg:text-lg "
            @click.prevent="$modal.hide('modal')">
                ЗАКРЫТЬ
            </button>
        </div>
      </div>
      </template>
      <template v-else>
        <div class="flex min-h-40 mx-4 items-end"> 
            <button class="bg-gray-300 focus:outline-none py-2 px-2 w-full md:text-medium lg:text-lg "
            @click.prevent="$modal.hide('modal'); success= false; title= 'Оформление заказа'">
                ЗАКРЫТЬ
            </button>
        </div>
      </template>

    </modal>

  </div>
</template>
<script>




//import Modal from '@/Shared/Modal.vue'

export default {

  components: {


  },
  props:{
    day: String,
  },
  data() {
    return {
      title: 'Оформление заказа',
      tel: '',
      name: '',
      plastic: 0,
      optionPlastic:[
      { text: '---не выбрано-- ', value: '0' },
      { text: '10 м. PLA пластика, к заказу +37 грн.', value: '1' },
      { text: '20 м. PLA пластика, к заказу +74 грн.', value: '2' },
      { text: '30 м. PLA пластика, к заказу +111 грн.', value: '3' },
      { text: '40 м. PLA пластика, к заказу +148 грн.', value: '4' },
      { text: '50 м. PLA пластика, к заказу +185 грн.', value: '5' },
      { text: '60 м. PLA пластика, к заказу +222 грн.', value: '6' },
      { text: '70 м. PLA пластика, к заказу +259 грн.', value: '7' },
      { text: '100 м. PLA пластика, к заказу +370 грн.', value: '10' },
    ],
      counterDay: '',
      open: false,
      error: {},
      success: false,
    }
  },
  computed: {
    Summa: function () {
      return this.plastic*37 + 399
    }
  },
  mounted() {
    this.counter();
  },
  methods: {
    show () {
        this.$modal.show('modal');
    },
    hide () {
        this.$modal.hide('modal');
    },
    counter(){
    var countDownDate = new Date(this.day);
    // Update the count down every 1 second
    var x = setInterval(() => {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo "
        hours= (hours < 10 ? '0' : '') + hours
       // console.log(hours ='0' + hours);
       var labelDay = days === 1 ? ' день ' : (days === 0 ? '' :' дня ')

        var localCounterDay = days + labelDay +
            hours + " : " +
            minutes + " : " + seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            localCounterDay = "Акция закончилась (- ";
        }
        this.counterDay = localCounterDay;

    }, 1000);

    },
    newProposal() {
        let form_data = new FormData();
        form_data.append( 'name', this.name );
        form_data.append( 'phone', this.tel);
        form_data.append( 'plastic', this.plastic);
        form_data.append( 'summa', this.Summa);
        this.axios.post('/proposal/create', form_data).then(response => {
        var success = response.data.success
        var message = response.data.message
        this.error = {}
        if (success) {
            this.success = true
            this.title = message
        } else {
            
            const objectArray = Object.entries(message)
            objectArray.forEach(([key, value]) => {
                this.$set(this.error, key, value)

            })
        }
        console.log(response.data.msgcrm );
        });
    },
  }
}
</script>
