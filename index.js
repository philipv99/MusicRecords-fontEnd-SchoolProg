const apiurl = "https://progrecords-pearporg-opgave.azurewebsites.net/Api/MusicRecords"
Vue.createApp({
   data(){
      return{
        records: []
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
            this.records = await response.body
            console.log(response);
         }
         catch(ex)
         {
            alert(ex.message)
         }
         }
      }
   }
).mount("#app")