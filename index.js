const apiurl = "https://progrecords-pearporg-opgave.azurewebsites.net/Api/MusicRecords"


Vue.createApp({
   data(){
      return{
        records: [],
        idtosearch : -1
      };
   },
   async created(){
     this.getAll(apiurl) 
   },
   methods: {
      async getAll(url){
         try{
            const response = await axios.get(url)
            this.records = await response.data
            console.log(response);
         }
         catch(ex){
            alert(ex.message)
         }
      },
      GetById(idtosearch){
         if (this.idtosearch < 0){
            alert ("insert id")
         } 
         records.find(x=>x.id===idtosearch)
      },
   }
}).mount("#app")