const apiurl = "https://progrecords-pearporg-opgave.azurewebsites.net/Api/MusicRecords"
Vue.createApp({
   data(){
      return{
        record: []

      };
   },
   async created(){
     this.getAll(apiurl) 
   },
   methods: {
      async getAll(url){
         try
         {
            const response = await axios.get(url)
            this.record = await response.data
         }
         catch(ex)
         {
            alert(ex.message)
         }
         }
      }
   }
).mount("#app")