Vue.createApp({
   data(){
      return{
        hej: null
      };
   },
   //async
   methods: {
      say(input){
         hej = input
         }
      }
   }
).mount("#app")