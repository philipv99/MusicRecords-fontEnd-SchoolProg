Vue.createApp({
   data(){
      return{
         showAddForm: false,
         addData: { 
            title: "", 
            artist: "", 
            publicationYear:0,
            Duration:0,
            id:0
         },
         addMeassge: ""
      };
   },
   methods: {
      async addRecord(){
         console.log(this.data)
         try{
            response = await axios.post(apiurl, this.addData)
            this.addMeassge = "response " + response.status + " " + response.statusText
            this.getAll(apiurl)
            showAddForm = false
         }
         catch (ex) {
            alert(ex.message)
         };
      },


      async getAll(url){
         try{
            const response = await axios.get(url)
            this.records = await response.data
            console.log(response);
         }
         catch(ex){
            alert(ex.message)
         }
      }
   }
}).mount("#grud")